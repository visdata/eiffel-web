function drawLabels(optionNumber, doTransition, transitionType, d) {
    var data = this.data;
    var that = this;
    var sizeScale = this.sizeScale;
    var drawnodes = this.drawnodes;
    var focusedID = this.focusedID;
    var screenPreNodes = data.screenPreviousData[focusedID].node;
    var nodeClick = this.nodeClick;
    var mouseover = this.mouseover;
    var mouseout = this.mouseout;
    var textElem = this.textElem;
    var drag = this.drag;
    var k = this.zoomK || 1;
    var preYearNode = this.preYearNode;
    var clusterSummary = this.clusterSummary;
    var nodeList = this.nodeList;
    var nodes = d.node;
    var edges = d.edge;
    var fontSize = dMax/2;
    var fontFamily = 'Microsoft YaHei';
    var pre;
    if (this.preLabelLayer) {
        pre = this.preNodeLayer;
    }
    var g = drawnodes.append('g')
        .attr('class', 'labelLayer');
    this.preLabelLayer = g;
//    d3.select('.ruler')
//        .styles({
//            'font-size':fontSize+'px',
//            'font-family':'Microsoft YaHei'
//
//        });

    var x;
    if (nodes.length > 20) {
        x = 2;
    }
    else {
        x = 2;
    }
    nodes.forEach(function (node) {
        if (node.focused == 'true') {
            node.frequencyKeywords = node.keywords;
        }
    });
    function getAuthorVenue(d, i) {
//        console.log(d);
        var author = d.author_venue.author;
        var venue = d.author_venue.venue;
        var label = [author, venue];
        return label[i];
    }

    function setLabelAttributes(nodes) {
        g.selectAll('node_label')
            .data(nodes).enter()
            .append('g')
            .attr('id', function (d) {
                return 'g'+ d.id + '_' + i;
            })
            .each(function () {
                var thisLabelG = d3.select(this);
                thisLabelG.append('text')
                    .styles({
                        'font-size': function (d) {
                            d.fontSize = fontSize;
                            return fontSize / k + 'px'
                        },
                        'font-family': 'Microsoft YaHei',
                        fill: function () {
                            return color.nodeLabelColor;
                        },
                        visibility: 'hidden',
                        'text-anchor' : 'middle'
                    })
                    .html(function (d, j) {
                        if (optionNumber.nodeLabelOption < 2) {
                            if ((x == 2) || ((x == 1) && d.focused == 'true') || ((x == 1) && (i == 0))) {
                                var keywords = d.keywords;
                                if (keywords[i] && keywords[i].length > 2)return keywords[i].substring(0, 1).toUpperCase() + keywords[i].substring(1);
                            }
                        }
                        else if (optionNumber.nodeLabelOption == 2) {
                            if ((x == 2) || ((x == 1) && d.focused == 'true' && d.id != 0) || ((x == 1) && i == 0 && d.id != 0)) {
                                if (d.id != 0) {
                                    var label = getAuthorVenue(d, i);
                                    return label;
                                }
                            }
                        }
                    })
                    .attr('index', 'nodeFirstLabelTextShift_' + i)
                    .attrs({
                        "x": function (d) {
                            //下面这段if很神奇，虽然没什么实际的作用，但是去掉之后y会出问题，没时间找问题在哪了
                            if (d.keywords[i] && d.keywords[i].length > 2) {
                                var len = d.keywords[i].visualLength(fontFamily, fontSize);
                            }
                            return d.x;
                        },
                        "y": function (d) {
                            if (!d.nodeFirstLabelTextShiftY)d.nodeFirstLabelTextShiftY = [0, 0, 0];
                            d.nodeFirstLabelTextShiftY[i] = sizeScale.sizeScale(d.size) + (i + 1) * 'A'.visualHeight();
                            return d.y + d.nodeFirstLabelTextShiftY[i] / k;
                        },
                        "id": function (d) {
                            return 'label' + d.id
                        },
                        "disable": true,
                        "class": "label TFIDFLevel" + i + ' tfidf'
                    })
                    .on('dblclick', doubleClick)
                    .on('click', function (d) {
                        return nodeClick(d, that);
                    })
                    .on('mouseover', function (d) {
                        return mouseover(d, that);
                    })
                    .on('mouseout', function (d) {
                        return mouseout(d, that);
                    })
                    .each(function (d) {
                        d.that = that;
                    })
                    .call(drag)
                    .style('cursor', 'hand')
                    .each(function (d, i) {
                        if (d.size == 0) {
                            d3.select(this).remove();
                        }
                        if (textElem[d.id] == null) {
                            textElem[d.id] = {
                                textElem: [],
                                id: d.id
                            };
                            textElem[d.id].textElem.push(d3.select(this));
                        }
                        else {
                            textElem[d.id].textElem.push(d3.select(this));
                        }

                    });
                thisLabelG.append('text')
                    .styles({
                        'font-size': function (d) {
                            d.fontSize = fontSize;
                            return fontSize / k + 'px'
                        },
                        'font-family': 'Microsoft YaHei',
                        fill: function () {
                            return color.nodeLabelColor;
                        },
                        'text-anchor' : 'middle'
                    })
                    .attr('index', 'nodeSecondLabelTextShift_' + i)
                    .html(function (d, j) {
                        if (optionNumber.nodeLabelOption == 0) {
                            if ((x == 2) || ((x == 1) && d.focused == 'true') || ((x == 1) && (i == 0))) {
                                var keywords = d.onegram;
                                if (keywords[i] && keywords[i].length > 2)return keywords[i].substring(0, 1).toUpperCase() + keywords[i].substring(1);
                            }
                        }
                        else if (optionNumber.nodeLabelOption == 1) {
                            if ((x == 2) || ((x == 1) && d.focused == 'true' && d.id != 0) || ((x == 1) && i == 0 && d.id != 0)) {
                                if (d.id != 0) {
                                    var label = getAuthorVenue(d, i);
                                    return label;
                                }
                            }
                        }
                    })
                    .attrs({
                        "x": function (d) {

                            return d.x ;
                        },
                        "y": function (d) {
                            if (!d.nodeSecondLabelTextShiftY)d.nodeSecondLabelTextShiftY = [0, 0, 0];
                            d.nodeSecondLabelTextShiftY[i] = sizeScale.sizeScale(d.size) + (i + 1) * 'A'.visualHeight();
                            return d.y + d.nodeSecondLabelTextShiftY[i] / k;
                        },
                        "id": function (d) {
                            return 'label' + d.id
                        },
                        "disable": true,
                        "class": "label FrequencyLevel" + i + ' freq'
                    })
                    .on('dblclick', doubleClick)
                    .on('click', function (d) {
                        return nodeClick(d, that);
                    })
                    .on('mouseover', function (d) {
                        return mouseover(d, that);
                    })
                    .on('mouseout', function (d) {
                        return mouseout(d, that);
                    })
                    .each(function (d) {
                        d.that = that;
                    })
                    .call(drag)
                    .style('cursor', 'hand')
                    .styles({
                        'visibility': function () {
                            if (i <= 1) {
                                return 'visible';
                            }
                            else {
                                return 'hidden';
                            }
                        }
                    })
                    .each(function (d, i) {
                        if (d.size == 0) {
                            d3.select(this).remove();
                        }
                        if (textElem[d.id] == null) {
                            textElem[d.id] = {
                                textElem: [],
                                id: d.id
                            };
                            textElem[d.id].textElem.push(d3.select(this));
                        }
                        else {
                            textElem[d.id].textElem.push(d3.select(this));
                        }

                    });

                //thisLabelG.append('text')
                //    .styles({
                //        'font-size': function (d) {
                //            d.fontSize = fontSize;
                //            return fontSize / k + 'px'
                //        },
                //        'font-family': 'Microsoft YaHei',
                //        fill: function () {
                //            return color.nodeLabelColor;
                //        },
                //        visibility: 'hidden'
                //    })
                //    .html(function (d, j) {
                //        if ((x == 2) || ((x == 1) && d.focused == 'true' && d.id != 0) || ((x == 1) && i == 0 && d.id != 0)) {
                //            if (d.id != 0) {
                //                var label = getAuthorVenue(d, i);
                //                return label;
                //            }
                //        }
                //    })
                //    .attrs({
                //        "x": function (d) {
                //            if (!d.nodeThirdLabelTextShiftX)d.nodeThirdLabelTextShiftX = [0, 0, 0];
                //
                //            if (d.id != 0) {
                //                var label = getAuthorVenue(d, i);
                //                if (label) {
                //                    d.nodeThirdLabelTextShiftX[i] = -label.visualLength(fontFamily, fontSize) / 2;
                //                }
                //            }
                //            return d.x + d.nodeThirdLabelTextShiftX[i] / k;
                //        },
                //        "y": function (d) {
                //            if (!d.nodeThirdLabelTextShiftY)d.nodeThirdLabelTextShiftY = [0, 0, 0];
                //            d.nodeThirdLabelTextShiftY[i] = sizeScale.sizeScale(d.size) + (i + 1) * 'A'.visualHeight();
                //            return d.y + d.nodeThirdLabelTextShiftY[i] / k;
                //        },
                //        "id": function (d) {
                //            return 'label' + d.id
                //        },
                //        "disable": true,
                //        "class": "label venueLabel"
                //    })
                //    .on('dblclick', doubleClick)
                //    .on('click', function (d) {
                //        return nodeClick(d, that);
                //    })
                //    .on('mouseover', function (d) {
                //        return mouseover(d, that);
                //    })
                //    .on('mouseout', function (d) {
                //        return mouseout(d, that);
                //    })
                //    .each(function (d) {
                //        d.that = that;
                //    })
                //    .call(drag)
                //    .style('cursor', 'hand')
                //    .each(function (d, i) {
                //        if (d.size == 0) {
                //            d3.select(this).remove();
                //        }
                //        if (textElem[d.id] == null) {
                //            textElem[d.id] = {
                //                textElem: [],
                //                id: d.id
                //            };
                //            textElem[d.id].textElem.push(d3.select(this));
                //        }
                //        else {
                //            textElem[d.id].textElem.push(d3.select(this));
                //        }
                //
                //    });

            });
    }

    for (var i = 0; i < 3; i++) {
        if (doTransition) {
            setLabelAttributes(nodes);
            g.selectAll('.label')
                .style('fill', 'none')
                .transition()
                .delay(function (d) {
                    return d.delay[0];
                })
                .duration(function (d) {
                    return d.duration;
                })
                .style('fill', function () {
                    return color.nodeLabelColor;
                })
                .on('start', function (d) {
                    console.log('#g'+ d.id + '_' +i);
                    pre.select('#g'+ d.id + '_' +i).remove();
                    console.log(pre.select('#g'+ d.id + '_' +i));
                    var thisNode = d3.select(this);
                    thisNode.attrs({
                        transitionStatus: function (d) {
                            d.transitionStatus = 'start';
                            return d.transitionStatus;
                        }
                    })
                })
                .on('end', function (d) {
                    var thisNode = d3.select(this);
                    thisNode.attrs({
                        transitionStatus: function (d) {
                            d.transitionStatus = 'end';
                            return d.transitionStatus;
                        }
                    })
                });
        }
        else {
            setLabelAttributes(nodes);
            g.selectAll('.label').attr('transitionStatus', 'end');
        }


    }
}