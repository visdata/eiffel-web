function drawNodes(optionNumber, doTransition, transitionType, dd) {
    var sizeScale = this.sizeScale;
    var k = this.zoomK || 1;

    function dataBundling(d, i, thisNode) {
        if (d.focused == 'true') {
            d.imageShift = -10;
            d.imageSize = 20;
            thisNode.append('image')
                .attrs({
                    type: 'image',
                    class: 'node',
                    x: d.x + d.imageShift / k,
                    y: d.y + d.imageShift / k,
                    cluster: d.oldKey,
                    width: d.imageSize / k + px,
                    height: d.imageSize / k + px,
                    'xlink:href': function (d) {
                        if (pageStyle == 'dark')
                            return 'image/star.png';
                        else
                            return 'image/lightStar.png'
                    }
                })
        }
        else thisNode.append('circle')
            .attrs({
                type: 'circle',
                class: 'node',
                cluster: d.oldKey,
                cx: d.x,
                cy: d.y,
                r: function (d) {
                    var size = sizeScale.sizeScale(d.newSize);
                    d.nodeR = size;
                    return d.nodeR / k;
                }
            })
    }

    var focusedNodeData;
    var that = this;

    var nodes = dd.node;
    var edges = dd.edge;
    var focusedID = this.focusedID;
    var drag = this.drag;
//    var nodes= [];
//    var edges=[];
//    clone(dd.node,nodes);
//    clone(dd.edge,edges);
    dd.subNodeYearData = [];

    var nonRootNodes = [];
    nodes.forEach(function (node) {
        if(getUrlParam('twitter') == '20') {
            if(node.focused == 'false') {
                nonRootNodes.push(node);
            }
        }
        else {
            if(!node.focused) {
                nonRootNodes.push(node);
            }
        }

    });

    var citationDomain = [d3.min(nonRootNodes, function (d) {
        return d.citation;
    }), d3.max(nonRootNodes, function (d) {
        return d.citation;
    })];
    var avgCitationDomain = [d3.min(nonRootNodes, function (d) {
        return d.citation / d.size;
    }), d3.max(nonRootNodes, function (d) {
        return d.citation / d.size;
    })];
    if(parseFloat(getUrlParam('nodeOpacityMin')) >= 0 && parseFloat(getUrlParam('nodeOpacityMin')) <= 1) {
        nodeOpacityMin = parseFloat(getUrlParam('nodeOpacityMin'));
    }
    if(parseFloat(getUrlParam('nodeOpacityMax')) >= 0 && parseFloat(getUrlParam('nodeOpacityMax')) <= 1) {
        nodeOpacityMax = parseFloat(getUrlParam('nodeOpacityMax'));
    }
    var nodeOpacity = {
        uniform: function (citation) {
            //do something with citation
            return 0.8;
        },
        citation: function (citation) {
            var scale = d3.scaleLinear()
                .domain(citationDomain)
                .range([nodeOpacityMin, nodeOpacityMax]);
            return scale(citation);
        },
        avgCitation: function (avgCitation) {
            var scale = d3.scaleLinear()
                .domain(avgCitationDomain)
                .range([nodeOpacityMin, nodeOpacityMax]);
            return scale(avgCitation);
        }

    };
    console.log(avgCitationDomain);
    that.nodeOpacity = nodeOpacity;
    clone(dd.nodeYearData.data, dd.subNodeYearData);
    for (var i = 0; i < dd.subNodeYearData.length; i++) {
        dd.subNodeYearData[i][1] = 0;
    }
    var textElem = this.textElem;
    var relation = this.relation;
    var edgeLabelElem = this.edgeLabelElem;
    var pathElem = this.pathElem;
    var data = this.data;
    var drawnodes = this.drawnodes;
    var duration = this.duration;
    var preYearNode = this.preYearNode;
    var nodeClick = this.nodeClick;
    var mouseover = this.mouseover;
    var mouseout = this.mouseout;
    var screenPreNodes = data.screenPreviousData[focusedID].node;
    var g;
    var pre;
    var preNodes = {};
    if (this.preNodeLayer) {
        pre = this.preNodeLayer;
        pre.selectAll('.circle')
            .each(function (d) {
                preNodes[d.id] = {nodeR: d.nodeR};
            });
        //pre.remove();
    }
    g = drawnodes.append('g')
        .attr('class', 'circleLayer');
    this.preNodeLayer = g;
    var edgeSet = {};
    var nodesDic = {};
    nodes.forEach(function (node) {
        node.sourceNodes = [];
        node.targetNodes = [];
        nodesDic[node.id] = node;
    });
    edges.forEach(function (edge) {
        var source = edge.source;
        var target = edge.target;
        var key = source + '-' + target;
        if (!edgeSet[key] && !edge.isNontreeEdge) {
            edgeSet[key] = 1;
            var sn = nodesDic[source];
            var tn = nodesDic[target];

            if (source in nodesDic) {
                sn.targetNodes.push(tn);
            }
            if (target in nodesDic) {
                tn.sourceNodes.push(sn);
            }
        }
    });

//    svg.select('.linearGradientDefs').remove();
    if (doTransition) {
        g.selectAll('node').data(nodes)
            .enter()
            .append('g')
            .attr('id', function (d) {
                return 'g' + d.id;
            })
            .each(function (d, i) {
                var thisNode = d3.select(this);
                if (d.focused == 'true')thisNode.append('image')
                    .attrs({
                        type: 'image',
                        class: 'node',
                        x: d.x - 10,
                        y: d.y - 10,
                        width: 20 + px,
                        height: 20 + px,
                        'xlink:href': function (d) {
                            if (pageStyle == 'dark')
                                return 'image/star.png';
                            else
                                return 'image/lightStar.png'
                        }
                    });
                else thisNode.append('circle')
                    .attrs({
                        type: 'circle',
                        class: 'node',
                        cx: d.x,
                        cy: d.y,
                        r: sizeScale.sizeScale(d.size * d.ratio[0])
                    });
                d.index = 3;
                var backgroundData = [
                    {
                        class: 'backgroundNode',
                        delay: d.delay,
                        id: d.id,
                        isBackground: 1,
                        index: 2,
                        x: d.x,
                        y: d.y,
                        //opacity:0.7* d.sizeIncreaseRatio[0],
                        opacity: 0.7,
                        r: sizeScale.sizeScale(d.size * d.ratio[0]) * 0.133 + sizeScale.sizeScale(d.size * d.ratio[0]),
                        fill: color.nodeColor,
                        highlightFill: color.nodeHighlightColor,
                        highlightOpacity: 1 * d.sizeIncreaseRatio[0],
                        duration: d.duration
                    },
                    {
                        class: 'backgroundNode',
                        delay: d.delay,
                        id: d.id,
                        isBackground: 1,
                        index: 1,
                        x: d.x,
                        y: d.y,
                        //opacity:0.5*d.sizeIncreaseRatio[0],
                        opacity: 0.5,
                        r: sizeScale.sizeScale(d.size * d.ratio[0]) * 0.133 * 2 + sizeScale.sizeScale(d.size * d.ratio[0]),
                        fill: color.nodeColor,
                        highlightFill: color.nodeHighlightColor,
                        highlightOpacity: 1 * d.sizeIncreaseRatio[0],
                        duration: d.duration
                    }
                ];
                thisNode.selectAll('whatever')
                    .data(backgroundData)
                    .enter()
                    .append('circle')
                    .each(function (d) {
                        d3.select(this)
                            .attrs({
                                id: 'node' + d.id,
                                isBackground: d.isBackground,
                                class: d.class,
                                cx: d.x,
                                cy: d.y,
                                r: d.r,
                                index: d.index
                            })
                            .styles({
                                opacity: d.opacity,
                                fill: 'none'
                            })
                    });
            });

    }
    else {
        g.selectAll('node').data(nodes)
            .enter()
            .append('g')
            .attr('id', function (d) {
                return 'g' + d.id;
            })
            .attr('cluster', function (d) {
                return d.oldKey
            })
            .each(function (d, i) {
                var thisNode = d3.select(this);

                dataBundling(d, i, thisNode);
                thisNode.selectAll('*')
                    .attrs({
                        transitionStatus: 'end'
                    })
            });

    }

    preYearNode = false;
    var defs = g.append('defs').attr('class', 'linearGradientDefs');
    defs.selectAll('linearGradient').data(nodes).enter()
        .append('linearGradient')
        .attr('class', 'linearGradient')
        .attr('id', function (d) {
            return 'linearGradient' + d.id;
        })
        .attrs({
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
        })
        .each(function (e) {
            var thisLG = d3.select(this);
            var data = [{offset: 0, color: color.nodeGreyColor, opacity: 1}, {
                offset: 0,
                color: color.nodeGreyColor,
                opacity: 1
            }, {offset: 0, color: color.nodeColor, opacity: 1}, {offset: 1, color: color.nodeColor, opacity: 1}];
            var citation = e.citation;
            var size = e.size;
            console.log(citation)
            console.log(size)
            console.log(citation/size);
            console.log(nodeOpacity[nodeOpacityOption](citation/size));
            thisLG.selectAll('stop').data(data).enter()
                .append('stop')
                .attrs({
                    offset: function (d) {
                        return d.offset
                    },
                    'stop-color': function (d) {
                        return d.color
                    },
                    'stop-opacity': function () {
                        if (nodeOpacityOption == 'citation' || nodeOpacityOption == 'uniform') {

                            return nodeOpacity[nodeOpacityOption](citation);
                        }
                        else if (nodeOpacityOption == 'avgCitation') {


                            return nodeOpacity[nodeOpacityOption](citation/size);
                        }
                    }
                })
        });
    //from line 274 to line 412
    //is aim to resolve movie mode pause won't update node fill style
    //the method is not very well,should be fixed in the future
    //shit!!!
    if (transitionType == 'flowMap') {
        g.selectAll('.node')
            .data(nodes)
            .attr('year', function (d) {
                var dic = d.newNodeYearInfo;
                var yearString = ''
                for (var key in d.newNodeYearInfo) {

                    yearString += key + '-' + d.newNodeYearInfo[key] + '_';
                }
                return yearString;
            })
            .attr('id', function (d) {
                return 'node' + d.id;
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
            .styles({
                "fill": 'none'
            })
            .transition()
            .duration(function (d) {
                return d.duration;
            })
            .delay(function (d) {
                return d.delay[0];
            })
            .styles({
                "fill": function (d) {
                    return color.nodeColor;
                },
//            'fill':'rgb(0,220,225)',
                "opacity": 1,
                "cursor": "hand"
            })
            .each(function (d, i) {
                if (d.size == 0) {
                    d3.select(this).remove();
                }
                d.clicked = false;
                if (d.focused == 'true') {

//                d3.select(this).attr('stroke','red');
//                d3.select(this).attr('stroke-width','2px');
//                d3.select(this).attr('class','node clicked');
                    focusedNodeData = d;

                }

                d.edgeLabelElem = [];
                d.pathElem = [];
                d.backgroundPathElem = [];
                d.relatedEdges = [];
                d.textElem = {
                    textElem: [],
                    id: d.id
                };

                d.self = d3.select(this);
                if (textElem[d.id])d.textElem.textElem = textElem[d.id].textElem;
                for (var j = 0; j < relation[d.id].edges.length; j++) {
                    d.edgeLabelElem.push(edgeLabelElem[relation[d.id].edges[j]]);
                    //d.pathElem.push(pathElem[relation[d.id].edges[j]]);
                }
                pathElem.forEach(function (e) {
                    //if(!e.isNontreeEdge) {
                    if (e.fatherNode == d.id) {
                        d.pathElem.push(e.self);
                    }
                    if (e.isBackgroundEdge && (e.source == d.id || e.target == d.id)) {
                        d.backgroundPathElem.push(e.self);
                    }
                    if (e.routerClusters) {
                        if (e.routerClusters.indexOf(parseInt(d.id)) != -1) {
                            d.relatedEdges.push(e.self);
                        }
                    }
                    else {
                        if (e.source == d.id || e.target == d.id) {
                            d.relatedEdges.push(e.self);
                        }
                    }
                    //}

                })
            });
    }
    else {
        g.selectAll('.node')
            .data(nodes)
            .attr('year', function (d) {
                var dic = d.newNodeYearInfo;
                var yearString = '';
                for (var key in d.newNodeYearInfo) {

                    yearString += key + '-' + d.newNodeYearInfo[key] + '_';
                }
                return yearString;
            })
            .attr('id', function (d) {
                return 'node' + d.id;
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
            .styles({
                "fill": function (d) {
                    return "url(#linearGradient" + d.id + ")"
                },
//            'fill':'rgb(0,220,225)',
                "opacity": 1,
                "cursor": "hand"
            })
            .transition()
            .duration(function (d) {
                if (transitionType == 'flowMap') {
                    return d.duration;
                }
                else {
                    return 1;
                }
            })
            .delay(function (d) {
                if (transitionType == 'flowMap') {
                    return d.delay[0];
                }
                else {
                    return 1;
                }
            })
            .styles({
                "fill": function (d) {
                    return "url(#linearGradient" + d.id + ")"
                },
//            'fill':'rgb(0,220,225)',
                "opacity": 1,
                "cursor": "hand"
            })
            .each(function (d, i) {
                if (d.size == 0) {
                    d3.select(this).remove();
                }
                d.clicked = false;
                if (d.focused == 'true') {

//                d3.select(this).attr('stroke','red');
//                d3.select(this).attr('stroke-width','2px');
//                d3.select(this).attr('class','node clicked');
                    focusedNodeData = d;

                }

                d.edgeLabelElem = [];
                d.pathElem = [];
                d.backgroundPathElem = [];
                d.relatedEdges = [];
                d.textElem = {
                    textElem: [],
                    id: d.id
                };

                d.self = d3.select(this);
                if (textElem[d.id])d.textElem.textElem = textElem[d.id].textElem;
                for (var j = 0; j < relation[d.id].edges.length; j++) {
                    d.edgeLabelElem.push(edgeLabelElem[relation[d.id].edges[j]]);
                    //d.pathElem.push(pathElem[relation[d.id].edges[j]]);
                }
                pathElem.forEach(function (e) {
                    if (e.fatherNode == d.id) {
                        d.pathElem.push(e.self);
                    }
                    if (e.isBackgroundEdge && (e.source == d.id || e.target == d.id)) {
                        d.backgroundPathElem.push(e.self);
                    }
                    if (e.routerClusters) {
                        if (e.routerClusters.indexOf(parseInt(d.id)) != -1) {
                            d.relatedEdges.push(e.self);
                        }
                    }
                    else {
                        if (e.source == d.id || e.target == d.id) {
                            d.relatedEdges.push(e.self);
                        }
                    }
                })
            });
    }


    if (transitionType == 'flowMap') {
        var svgNodes = g.selectAll('.node');
        console.log(nodes.length);
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].id == 18) {
                console.log(1);
            }
            var node = d3.select(svgNodes._groups[0][i]);
            var tmpDelay = [];
            var tmpRatio = [];
            var nodeData;
            node.attr('cx', function (d) {
                nodeData = d;
                return d.x;
            });
            clone(nodeData.delay, tmpDelay);
            clone(nodeData.ratio, tmpRatio);
            setTransition(node, tmpDelay, tmpRatio);
        }
    }
    else {
        g.selectAll('.node')
            .data(nodes)
            .transition()
            .duration(function (d) {
                if (transitionType == 'flowMap') {
                    return d.duration;
                }
                else {
                    return 0;
                }
            })
            .delay(function (d) {
                if (transitionType == 'flowMap') {
                    return d.delay[0];
                }
                else {
                    return 0;
                }
            })
            .styles({
                "fill": function (d) {
                    return "url(#linearGradient" + d.id + ")"
                },
                'cursor': 'hand'
            })
    }
    function setTransition(node, delay, ratio) {
        var nodeData = node.data()[0];
        var nodeID = node.attr('id');
        var r;
        if (ratio.length > 0) {
            node.transition()
                .duration(function (d) {
                    return d.duration * 4;
                })
                .delay(function (d) {
                    return delay[0];
                })
                .ease(d3.easeLinear)
                .attrs({
                    'r': function (d) {
                        if (preNodes[d.id]) {
                            return preNodes[d.id].nodeR / k;
                        }
                        r = sizeScale.sizeScale(d.size * ratio[0]);
                        d.nodeR = r;
                        return d.nodeR / k;
                    }
                })
                .styles({
//                    "fill":function(d){return 'white'},
                    "fill": function (d) {
                        return "url(#linearGradient" + d.id + ")"
                    },
                    'cursor': 'hand'
                })
                .on('start', function (d) {
                    pre.select('#g' + d.id).remove();
                    var thisNode = d3.select(this);
                    thisNode.attrs({
                        transitionStatus: function (d) {
                            d.transitionStatus = 'start';
                            return d.transitionStatus;
                        }
                    });
                    d.index = 3;

                    g.select('#g' + nodeID.split('e')[1])
                        .selectAll('.backgroundNode')
                        .each(function (e, i) {
                            if (e.isBackground) {
                                d3.select(this)


                                    .transition()
                                    .duration(e.duration * 4)
                                    .ease(d3.easeLinear)
                                    .attrs({
                                        r: function (e) {
                                            var bigR;
                                            if (e.index == 2) {
                                                bigR = r + 4;
                                            }
                                            else if (e.index == 1) {
                                                bigR = r + 8;
                                            }
                                            e.bigR = bigR;
                                            return e.bigR;
                                        }
                                    })
                                    .styles({
                                        fill: e.highlightFill,
                                        //fill:color.svgColor,
                                        'fill-opacity': function () {
                                            var tempOpacity = e.highlightOpacity;
                                            e.highlightOpacity /= d.sizeIncreaseRatio[0];
                                            d.sizeIncreaseRatio = d.sizeIncreaseRatio.splice(1, d.ratio.length - 1);
                                            e.highlightOpacity *= d.sizeIncreaseRatio[0];
                                            return tempOpacity;
                                        }
                                    })
                                    .on('start', function (d) {
                                        d3.select(this)
                                            .attrs({
                                                transitionStatus: 'start'
                                            })
                                    })
                                    .on('end', function (d) {
                                        d3.select(this)
                                            .attrs({
                                                transitionStatus: 'end'
                                            });
                                        d3.select(this)
                                            .transition()
                                            .duration(e.duration * 8)
                                            .ease(d3.easeLinear)
                                            .style('fill', color.svgColor)
                                            .on('end', function (d) {
                                                d3.select(this).style('fill', 'none')
                                            })
                                    })
                            }

                        });
                    g.selectAll('#' + nodeID).sort(function (a, b) {
                        return d3.ascending(a.index, b.index);
                    })
                })
                .on('end', function (d) {
                    delay = delay.splice(1, delay.length - 1);
                    delay[0] -= d.duration * 4;
                    ratio = ratio.splice(1, ratio.length - 1);

                    setTransition(node, delay, ratio);

                });
        }
        else {
            node.attr('transitionStatus', function (d) {
                d.transitionStatus = 'end';
                return d.transitionStatus;
            });
        }


    }

    this.focusedNodeData = focusedNodeData;
}
