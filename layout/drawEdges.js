function getEdgeScale(edges, type) {
    var edgeFlowList = [];
    var edgeWeightList = [];
    var edgeCitationList = [];
    for (var i = 0; i < edges.length; i++) {
        edgeFlowList.push(edges[i].flow);
        edgeCitationList.push(edges[i].citation);
        var weightSum = 0;
        for (var key in edges[i].weight) {
            weightSum += edges[i].weight[key];
        }
        edgeWeightList.push(weightSum);
    }
    var range = [eMin[edgeThickNessOption], eMax[edgeThickNessOption]];
    var flowScale = d3.scaleLinear()
        .domain([d3.min(edgeFlowList), d3.max(edgeFlowList)])
        .range(range);
    var weightScale = d3.scaleLinear()
        .domain([d3.min(edgeWeightList), d3.max(edgeWeightList)])
        .range(range);
    var uniformScale = function () {
        return 2;
    };
    var scaleDic = {
        'weight': weightScale,
        'flow': flowScale,
        'citation': weightScale,
        'uniform': uniformScale
    };
    return scaleDic[type];
}
function drawEdges(optionNumber, doTransition, transitionType, d) {
    this.pathElem = [];
    this.tmpEdgeAssistCount = 0;
    var that = this;
    var pathElem = this.pathElem;
    var tmpEdgeAssistCount = this.tmpEdgeAssistCount;
    var data = this.data;
    var focusedID = this.focusedID;
    var drawedges = this.drawedges;
    var nodes = d.node;
    var edges = d.edge;
    var k = this.zoomK || 1;
    var pathData = this.pathData;
    var duration = this.duration;
    var screenPreEdges = data.screenPreviousData[focusedID].edge;
    var edgeFlowList = [];
    var edgeWeightList = [];
    var edgeLabelElem = this.edgeLabelElem;
    var drawEdgeLabel = this.drawEdgeLabel;
    for (var i = 0; i < edges.length; i++) {
        edges[i].transitionCount = 0;
        edgeFlowList.push(edges[i].flow);
        var weightSum = 0;
        for (var key in edges[i].weight) {
            weightSum += edges[i].weight[key];
        }
        edgeWeightList.push(weightSum);
    }
    if (!(that.flowScale) && !(that.flowScale)) {
        that.flowScale = d3.scaleLinear()
            .domain([d3.min(edgeFlowList), d3.max(edgeFlowList)])
            .range([2, 6]);
        that.weightScale = d3.scaleLinear()
            .domain([d3.min(edgeWeightList), d3.max(edgeWeightList)])
            .range([2, 6]);
    }
    var markerSize = 25;
    var g = drawedges.append('g').attr('class', 'edgeField');
    var markerG = drawedges.append('g').attr('class', 'markerField');
    var currentLevel = drawedges.attr('id');
    var svgEdges = g.selectAll('path.curves')
        .data(edges)
        .enter()
        .append('path')
        .attrs({
            class: function (d, i) {
                d.levelIndex = 0;
                d.class = currentLevel + 'path' + i;

                return d.class;
            },
            id: function (d) {
                var yearID = '';
                for (var key in d.weight) {
                    yearID += key + '_';
                }
                return yearID;
            },
            year: function (d) {
                return d.year;
            },
            source: function (d) {
                return d.source;
            },
            target: function (d) {
                return d.target;
            }
        })
        .style("opacity", function (d) {
            if (d.edgeType == 'dash') {
                return 0.2;
            }
        })
        .style("visibility", function (d) {
            if (d.isForegroundSourceEdge || d.isForegroundTargetEdge || d.isNontreeEdge) {
                return 'hidden';
            }
            //if(d.isBackgroundEdge || d.isNontreeEdge) {
            //    return 'hidden';
            //}
            //else if(d.isForegroundSourceEdge){
            //    return 'hidden';
            //    //return 'visible';
            //}
            //else if(d.isForegroundTargetEdge){
            //    //return 'hidden';
            //    return 'visible';
            //}
            else {
                return 'visible';
            }
        })
        .style("stroke", color.edgeColor)
        .style('fill', 'none')
        .style("stroke-width", function (d) {
            d.that = that;
            d.strokeWidth = d.ratio * d[edgeThickNessOption];
            return d.strokeWidth / k;
        })
        .each(function (d, i) {
            d.that = that;
            var stroke = d.ratio * d[edgeThickNessOption] || 1;
            var size = 13 / (stroke);
            var marker = markerG.append("svg:defs").selectAll("marker")
                .data([{marker: 1}])
                .enter().append("svg:marker")
                .attr("id", function (d) {
                    d.id = currentLevel + "markerArrow" + i + '_' + that.focusedID;
                    return d.id;
                })
                .attr('class', 'marker')
                .attr("viewBox", "0 0 10 10")
                .attr("refX", 0)
                .attr("refY", 4)
                .attr("markerWidth", size)
                .attr("markerHeight", size)
                .attr("orient", 'auto')
                .append("svg:path")
                //                .attr("d", "M0,3 L0,8 L8,3 L0,3")
                .attr("d", "M0,0 L0,8 L8,4 L0,0")
                .style("fill", color.markerColor);
            var thisEdge = d3.select(this);
            d.self = thisEdge;
            marker.style("visibility", "hidden");
            d.marker = marker;
            thisEdge.attr("marker-end", function () {
                return "url(#" + currentLevel + "markerArrow" + i + '_' + that.focusedID + ")"
            });
            pathElem.push(d);
        });
    if (doTransition) {
        g.selectAll('path')
            .each(function (d) {
                d.marker.style('fill', 'none')
            });
        g.selectAll('path')
            .attr('d', function (d) {
                return pathData(d, that);
            });
        g.selectAll('path')
            .each(function (d) {
                //if(d.isBackgroundEdge) {
                //    d3.select(this).style('visibility', 'hidden');
                //}
                if(d.isBackgroundEdge){
                    d.transitionCount = that.yearFilter[0] - d.flipBookStartYear;
                    var thisPath=d3.select(this);
                    var pathLength=thisPath.node().getTotalLength();
                    var oldStrokeWidth;
                    var newStrokeWidth=0;
                    pathLength=parseInt(pathLength);
                    thisPath
                        .styles({
                            'stroke-dasharray': function () {
                                return pathLength;
                            },
                            'stroke-dashoffset': function () {
                                return pathLength;
                            },
                            'stroke-width': 0,
                            'fill': 'none'
                        })
                        .transition()
                        .duration(0)
                        .delay(1000)
                        .ease(d3.easeLinear)
                        .on('start', function repeat() {
                            if(d.transitionCount+ d.flipBookStartYear> d.flipBookEndYear){
                                thisPath.style('stroke-width',d[edgeThickNessOption])
                                    .style('stroke-dashoffset',0);
                                d3.selectAll('.transitionPath').remove();
                                currentLayer.svg.select('.edgeField').selectAll('path')
                                    .each(function (d) {
                                        if(d.isBackgroundEdge) {
                                            d3.select(this)
                                                .style('visibility','visible');
                                        }
                                    });
                                return;
                            }
                            var yearKey= d.flipBookStartYear+'_'+(d.flipBookStartYear+ d.transitionCount);
                            oldStrokeWidth=newStrokeWidth;
                            newStrokeWidth= d.flipBookRatio[yearKey]* d[edgeThickNessOption];

                            d.transitionCount+=1;

                            var pathD=thisPath.attr('d');
                            var newPath=g.append('path')
                                .attrs({
                                    d:pathD,
                                    class:'transitionPath'
                                })
                                .styles({
                                    //'stroke-dasharray': function () {
                                    //    return pathLength;
                                    //},
                                    //'stroke-dashoffset': function () {
                                    //    return pathLength;
                                    //},
                                    'stroke-width':oldStrokeWidth,
                                    'fill': 'none',
                                    'stroke': color.edgeColor
                                })
                                .transition()
                                .duration(1000)
                                .ease(d3.easeLinear)
                                //.styleTween('stroke-dashoffset', function () {
                                //    return d3.interpolateRound(pathLength,0)
                                //})
                                .styleTween('stroke-width',function(){
                                    return d3.interpolateNumber(oldStrokeWidth,newStrokeWidth);
                                })
                                //.on('end', function () {
                                //    d3.select(this)
                                //        .style('stroke',color.edgeColor);
                                //})
                                .transition()
                                .duration(1000)
                                .delay(1000)
                                .ease(d3.easeLinear)
                                .on('start', repeat)
                        })
                }
                //if(d.isForegroundTargetEdge){
                if (d.isForegroundSourceEdge) {
                    d.transitionCount = that.yearFilter[0] - d.flipBookStartYear;
                    var thisPath = d3.select(this);
                    var pathLength = thisPath.node().getTotalLength();
                    var oldStrokeWidth;
                    var newStrokeWidth = 0;
                    pathLength = parseInt(pathLength);
                    thisPath.styles({
                            'stroke-dasharray': function () {
                                return pathLength;
                            },
                            'stroke-dashoffset': function () {
                                return pathLength;
                            },
                            'stroke-width': 0,
                            'fill': 'none'
                        })
                        .transition()
                        .duration(0)
                        //.delay(2000)
                        .ease(d3.easeLinear)
                        .on('start', function repeat() {
                            if(d.source == 20 && d.target == 18) {
                                console.log(d.flipBookRatio);
                            }
                            if (d.transitionCount + d.flipBookStartYear > d.flipBookEndYear) {
                                thisPath.style('stroke-width', d[edgeThickNessOption])
                                    .style('stroke-dashoffset', 0);
                                d3.selectAll('.transitionPath').remove();
                                currentLayer.svg.select('.edgeField').selectAll('path')
                                    .each(function (d) {
                                        if (d.isBackgroundEdge) {
                                            d3.select(this)
                                                .style('visibility', 'visible');
                                        }
                                    });
                                return;
                            }
                            var yearKey = d.flipBookStartYear + '_' + (d.flipBookStartYear + d.transitionCount);
                            oldStrokeWidth = newStrokeWidth;
                            newStrokeWidth = d.flipBookRatio[yearKey] * d[edgeThickNessOption];
                            d.transitionCount += 1;

                            var pathD = thisPath.attr('d');
                            var newPath = g.append('path')
                                .attrs({
                                    d: pathD,
                                    class: 'transitionPath'
                                })
                                .styles({
                                    'stroke-dasharray': function () {
                                        return pathLength;
                                    },
                                    'stroke-dashoffset': function () {
                                        return pathLength;
                                    },
                                    'stroke-width': 0,
                                    'fill': 'none',
                                    'stroke': function () {
                                        if (oldStrokeWidth < newStrokeWidth) {
                                            return color.edgeHightLightColor
                                        }
                                        else return color.edgeColor
                                    }
                                })
                                .transition()
                                .duration(1000)
                                .ease(d3.easeLinear)
                                .styleTween('stroke-dashoffset', function () {
                                    return d3.interpolateRound(pathLength, 0)
                                })
                                .styleTween('stroke-width', function () {
                                    return d3.interpolateNumber(newStrokeWidth, newStrokeWidth);
                                })
                                .on('end', function () {
                                    d3.select(this)
                                        .style('stroke', color.edgeColor);
                                })
                                .transition()
                                .duration(1000)
                                .delay(1000)
                                .ease(d3.easeLinear)
                                .on('start', repeat)
                        })
                }
            });

        //.on('start', function (d) {
        //    var thisEdge = d3.select(this);
        //    //var originStrokeWidth = thisEdge.style('stroke-width');
        //    thisEdge.attrs({
        //            transitionStatus: function (d) {
        //                d.transitionStatus = 'start';
        //                return d.transitionStatus;
        //            },
        //            //'originStrokeWidth': originStrokeWidth
        //        })
        //        .styles({
        //            'stroke': 'red',
        //            'stroke-width': '3px'
        //        });
        //    if (d.marker)d.marker.attrs({
        //        transitionStatus: function (d) {
        //            d.transitionStatus = 'start';
        //            return d.transitionStatus;
        //        }
        //    })
        //})
        //.on('end', function (d) {
        //    d.marker.style('fill', color.markerColor);
        //    var thisEdge = d3.select(this);
        //    var originStrokeWidth = thisEdge.attr('originStrokeWidth');
        //
        //    thisEdge.attrs({
        //            transitionStatus: function (d) {
        //                d.transitionStatus = 'end';
        //                return d.transitionStatus;
        //            }
        //        })
        //        .styles({
        //            'stroke': 'yellow',
        //            'stroke-width': originStrokeWidth
        //        });
        //    if (d.marker)d.marker.attrs({
        //        transitionStatus: function (d) {
        //            d.transitionStatus = 'end';
        //            return d.transitionStatus;
        //        }
        //    })
        //})
    }
    else {
        svgEdges.data(edges)
            .attrs({
                d: function (d) {
                    return pathData(d, that);
                },
                transitionStatus: 'end'
            })
            .each(function (d) {
                var thisEdge = d3.select(this);
                var edgeClass = thisEdge.attr('class');
                var pathData = thisEdge.attr('d').split('M')[1].split(' ');
                var textX = (parseFloat(pathData[0]) + parseFloat(pathData[2])) / 2;
                var textY = (parseFloat(pathData[1]) + parseFloat(pathData[3])) / 2;

                var edgeLabel = drawEdgeLabel(optionNumber.edgeLabelOption, d.flow, d.citation, textX, textY, edgeClass, d.dx, d.dy);
                thisEdge.edgeLabel = edgeLabel;
                thisEdge.attrs({
                    dx: d.dx,
                    dy: d.dy
                });
                edgeLabelElem.push(edgeLabel);
            });
    }
    this.getYearEdgeRelation();
}
function drawEdgeLabel(option, flow, citation, textX, textY, edgeClass, dx, dy) {
    var fontSize = 14;
    var drawedges = this.drawedges;
    if (option == 1) {
        var txt = drawedges.append('text').attr('class', 'edgeLabel').attr('id', 'edgeLabel' + edgeClass)
            .attrs({
                dx: dx,
                dy: dy,
                x: textX,
                y: textY
            })
            .html(citation)
            .styles({
                'font-family': 'Microsoft Yahei',
                'font-size': fontSize + px,
                fill: 'yellow'
            });

    }
    else if (option == 2) {
        var txt = drawedges.append('text').attr('class', 'edgeLabel').attr('id', 'edgeLabel' + edgeClass)
            .attrs({
                dx: dx,
                dy: dy,
                x: textX,
                y: textY
            })
            .html(flow)
            .styles({
                'font-family': 'Microsoft Yahei',
                'font-size': fontSize + px,
                fill: 'yellow'
            });
    }
    return txt;
}
function getYearEdgeRelation() {
    var yearEdgeDic = {};
    var edgeClassList = [];
    var edges = d3.selectAll('path')
        .each(function (d) {
            var thisEdge = d3.select(this);
            var id = thisEdge.attr('id');
            var edgeClass = thisEdge.attr('class');
            if (edgeClass)edgeClassList.push(edgeClass);
            if (id) {
                var yearID = id.split('_');
                yearID.pop();
                for (var i = 0, length = yearID.length; i < length; i++) {
                    if (!yearEdgeDic[yearID[i]]) {
                        yearEdgeDic[yearID[i]] = [];
                        yearEdgeDic[yearID[i]].push(thisEdge)
                    }
                    else {
                        yearEdgeDic[yearID[i]].push(thisEdge);
                    }
                }
            }
        });
    return yearEdgeDic;
}
function drawSelfEdgeLabel(option, flow, weight, textX, textY, edgeClass) {
    var fontSize = 14;
    var drawedges = this.drawedges;
    if (option == 1) {
        d3.select('.ruler').style('font-size', fontSize + px);
        var dx = String(weight).visualLength() / 2;
        var txt = drawedges.append('text').attr('class', 'selfEdgeLabel').attr('id', 'selfEdgeLabel' + edgeClass)
            .attrs({

                x: textX - dx,
                y: textY
            })
            .html(weight)
            .styles({
                'font-family': 'Microsoft Yahei',
                'font-size': fontSize + px,
                fill: color.edgeColor
            });

    }
    else if (option == 2) {
        d3.select('.ruler').style('font-size', fontSize + px);

        var dx = String(flow).visualLength() / 2;

        var txt = drawedges.append('text').attr('class', 'selfEdgeLabel').attr('id', 'selfEdgeLabel' + edgeClass)
            .attrs({

                x: textX - dx,
                y: textY
            })
            .html(flow)
            .styles({
                'font-family': 'Microsoft Yahei',
                'font-size': fontSize + px,
                fill: color.edgeColor
            });
    }
    return txt;
}
function drawSelfEdge(optionNumber, doTransition, transitionType, data) {
    var nodes = data.node;
    var edges = data.edge;
    d3.selectAll('.selfEdge').remove();
    d3.selectAll('.selfEdgeLabel').remove();

    getSelfData(nodes);
    drawselfedges.selectAll('selfEdge').data(nodes)
        .enter()
        .append('g')
        .each(function (d) {
            var thisG = d3.select(this);
            if (d.selfEdge > 0) {
                thisG.append('path')
                    .attr('d', function (d) {
                        return d.selfPathStr;
                    })
                    .attr('class', 'selfEdge')
                    .attr('stroke-width', '2px')
                    .style('stroke', color.edgeColor)
                    .attr('fill', 'none')
                    .each(function (d, i) {
                        selfEdgeElem[d.id] = d3.select(this);
                        var selfLabel = drawSelfEdgeLabel(optionNumber.edgeLabelOption, d.selfEdge, parseInt(d.selfEdge * d.size), d.selfEdgeLabelX, d.selfEdgeLabelY, 'selfEdge');
                        selfEdgeLabelElem[d.id] = selfLabel;
                        var stroke = getSelfEdgeStrokeWidth(d);

                        var size = 13 / (stroke);
                        var marker = svg.append("svg:defs")
                            .append("svg:marker")
                            .attr("id", "selfMarkerArrow" + i)
                            .attr('class', 'marker')
                            .attr("viewBox", "0 0 10 10")
                            .attr("refX", 0.2)
                            .attr("refY", 1.1)
                            .attr("markerWidth", size)
                            .attr("markerHeight", size)
                            .attr("orient", 'auto')
                            .append("svg:path")
                            .attr("d", "M0,1 L0,2.666 L2.666,1 L0,1");
                        var thisEdge = d3.select(this);
                        thisEdge.marker = marker;
                    });

            }

        });
    d3.selectAll('.node').each(function (d) {
        if (selfEdgeElem[d.id])d.selfEdgeElem = selfEdgeElem[d.id];
        if (selfEdgeLabelElem[d.id])d.selfEdgeLabelElem = selfEdgeLabelElem[d.id];
    })
}
