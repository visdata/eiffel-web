function axisLayout(d) {
    this.drawAnimateControlPanel();

    this.drawYearAxis(d.nodeYearData);
}
function getMulEdgeSourceTargetDic(edges) {
    var dic = {};
    for (var i = 0; i < edges.length; i++) {
        var edge = edges[i];
        var source = edge.source;
        var target = edge.target;
        var key = source + '_' + target;
        if (dic[key]) {
            dic[key].push(edge);
        }
        else {
            dic[key] = [edge];
        }
    }
    return dic;
}

function adjustLayer(k,t) {
    currentLayer.background.style('cursor', '-webkit-grabbing');
    var svg = currentLayer.svg;
    var layer = svg.select('.svgDrawer');
    t=t||'translate('+0+','+0+')scale('+width/svgWidth+')';
    layer.attr("transform", t);
    currentLayer.zoomK = k;

    //layer.select('.mask0').attr("transform","translate("+ t.x+","+ t.y+"),scale("+ parseFloat(1/t.k)+")");
    //layer.select('.mask1').attr("transform","translate("+ t.x+","+ t.y+"),scale("+ parseFloat(1/t.k)+")");
    layer.selectAll('.node')
        .attr('r', function (d) {
            return d.nodeR / k;
        })
        .style('stroke-width', function (d) {
            return d.strokeWidth / k;
        });
    layer.selectAll('.size')
        .styles({
            'font-size': function (d) {
                return d.fontSize / k;
            }
        })
        .attrs({
            y: function (d) {
                return d.y + d.nodeSizeTextShiftY / t.k;
            }
        });
    layer.selectAll('.label')
        .styles({
            'font-size': function (d) {
                return d.fontSize / k;
            }
        })
        .each(function (d) {
            var thisLabel = d3.select(this);
            var indexStr = thisLabel.attr('index');
            var prefix = indexStr.split('_')[0];
            var index = indexStr.split('_')[1];
            thisLabel.attrs({
                y: d.y + d[prefix + 'Y'][index] / initDMax * (dMax+dMin-8) / k
            });
        });
    layer.selectAll('image')
        .attrs({
            x: function (d) {
                return d.x + d.imageShift / k
            },
            y: function (d) {
                return d.y + d.imageShift / k
            },
            width: function (d) {
                return d.imageSize / k + px
            },
            height: function (d) {
                return d.imageSize / k + px
            }
        });
    layer.select('.edgeField').selectAll('path')
        .attr('d', function (d) {
            return pathData(d, d.that, k);
        })
        .styles({
            'stroke-width': function (d) {
                return d.strokeWidth / k + px
            }
        });
}

function graphZoom() {
    var t = d3.event.transform;
    adjustLayer(t.k,t);
}
function layout(optionNumber, doTransition, transitionType, d) {
    var that = this;
    var zoom = d3.zoom()
        .scaleExtent([-Infinity, +Infinity])
        .on("zoom", graphZoom)
        .on('end', function () {
            leftLayer.background.style('cursor', '-webkit-grab');
        });
    that.svgZoom = zoom;
    var svg = this.svg;
    svg.call(zoom);
    var containers = [svg.svg_g];

    var drawnodes = this.drawnodes;
    var drag = d3.drag()
        .subject(function (d) {
            return d;
        })
        .on('drag', dragmove);
    this.drag = drag;

    this.currentData = d;
    this.currentEdgeSourceTargetDic = getMulEdgeSourceTargetDic(d.edge);
    this.getRelation(d);
    if (!d.keepAll)this.removeSVGElements();
    this.drawBackgroundYear(doTransition);
    this.drawEdges(optionNumber, doTransition, transitionType, d);
    this.drawLabels(optionNumber, doTransition, transitionType, d);
    this.drawNodes(optionNumber, doTransition, transitionType, d);
//    drawSelfEdge(optionNumber,doTransition,doIncremental,d);
    this.drawSize(optionNumber, doTransition, transitionType, d);
//    removeDuplicationLabels(d.node);
    this.drawLegends();
}
function nodePositionToInt(d) {
    var nodes = d.node;
    var edges = d.edge;
    nodes.forEach(function (node) {
        node.x = parseInt(node.x);
        node.y = parseInt(node.y);
    });
    //edges.forEach(function (edge) {
    //    if(edge.pathNodeList){
    //        edge.pathNodeList.forEach(function(node){
    //            node.x = parseInt(node.x);
    //            node.y = parseInt(node.y);
    //        })
    //    }
    //})

}
function pathData(d, that, zoomK) {
    var zoom = zoomK || 1;
    var sizeScale = that.sizeScale;

    var svg = that.svg;
    var focusedID = that.focusedID;
    var p = d.points;
    var data = that.data;
    var nodes = data.postData[focusedID].node;
    var oriEdgeDic = nodes.edgeDic;


    var method = that.method;
    if (d.isNontreeEdge) {
        d.type = 'L';
    }
    else {
        d.type = 'curveMonotoneX';
    }
    var flow = d.flow;
    switch (d.type) {
        case 'L':
        {
            var x1, y1, x2, y2, r1, r2, dis;
            var len = p.length;
            len = len - 1;
            dis = distance(p[0].x, p[0].y, p[len].x, p[len].y);
            r1 = sizeScale.sizeScale(p[0].size);
            r2 = sizeScale.sizeScale(p[len].size);

            x1 = getstart(p[0].x, p[len].x, r1, dis);
            y1 = getstart(p[0].y, p[len].y, r1, dis);
            x2 = getend(p[len].x, p[0].x, r2, dis);
            y2 = getend(p[len].y, p[0].y, r2, dis);
            return [
                'M', p[0].x, ' ', p[0].y,
                //' ', (p[0].x+ p[len].x)/2, ' ', (p[0].y+ p[len].y)/2,
                'L', p[len].x, ' ', p[len].y
            ].join('');
            //return [
            //    'M', x1, ' ', y1,
            //    'L', x2, ' ', y2
            //].join('');
        }
        case 'curveMonotoneX':
        {
            var pathD = 'M';
            var target = nodes[d.target];
            var targetRadius = sizeScale.sizeScale(target.size);
            var newPathNodeList = [];
            var regStr;

            function drawTreeEdge() {
                var nodeSet = d3.set();
                var key = d.source + '_' + d.target + '_background';
                nodeSet.add(d.source);
                nodeSet.add(d.target);
                d.pathNodeList.forEach(function (nodeId) {
                    var node = nodes[nodeId]
                    if (node.id == d.source) {
                        //newPathNodeList.push(node.move(node,0, node.edgeShiftDic[key].shiftIn));
                        newPathNodeList.push(node.move(node, 0, node.edgeShiftDic[key].shift / zoom));
                        if (node.cp1) {
                            var cp = new Point(node.cp1.x, node.cp1.y);
                            newPathNodeList.push(cp.move(0, node.edgeShiftDic[key].shift / zoom));
                            newPathNodeList.push(cp.move(-1 / zoom, node.edgeShiftDic[key].shift / zoom));
                        }
                    }
                    else {
                        newPathNodeList.push(node);
                        if (node.cp1) {
                            var cp = new Point(node.cp1.x, node.cp1.y);
                            newPathNodeList.push(cp);
                            newPathNodeList.push(cp.move(-1 / zoom, 0));
                        }
                    }
                });
                var source = nodes[d.pathNodeDic[d.source]];
                var target = nodes[d.pathNodeDic[d.target]];
                if (nodeSet.has(d.source)) {
                    source = source.move(source, 0, source.edgeShiftDic[key].shift / zoom);
                }
                if (nodeSet.has(d.target)) {
                    target = target.move(target, 0, target.edgeShiftDic[key].shift / zoom);
                }
                return regStr = source.x + "," + source.y + "(.*)" + target.x + "," + target.y;

            }

            function drawRecoveredTreeEdge() {
                var nodeSet = d3.set();
                var key = d.source + '_' + d.target;
                d.pathNodeList.forEach(function (node) {
                    nodeSet.add(node.id);
                });
                d.longPathNodes.forEach(function (node) {
                    if (nodeSet.has(node.id)) {
                        newPathNodeList.push(node.move(node, 0, node.edgeShiftDic[key].shiftOut));
                        if (node.cp1) {
                            var cp = new Point(node.cp1.x, node.cp1.y);
                            newPathNodeList.push(cp.move(0, node.edgeShiftDic[key].shiftOut));
                            newPathNodeList.push(cp.move(-1, node.edgeShiftDic[key].shiftOut));
                        }
                    }
                    else {
                        newPathNodeList.push(node);
                        if (node.cp1) {
                            var cp = new Point(node.cp1.x, node.cp1.y);
                            newPathNodeList.push(cp);
                            newPathNodeList.push(cp.move(-1, 0));
                        }
                    }
                });
                var source = d.pathNodeDic[d.source];
                var target = d.pathNodeDic[d.target];
                if (nodeSet.has(d.source)) {
                    source = source.move(source, 0, source.edgeShiftDic[key].shiftOut);
                }
                if (nodeSet.has(d.target)) {
                    target = target.move(target, 0, target.edgeShiftDic[key].shiftOut);
                }
                return regStr = source.x + "," + source.y + "(.*)" + target.x + "," + target.y;

            }

            function drawForegroundEdges() {
                var shift;
                var sourceShift = 0;
                var targetShift = 0;
                for (var i = 0; i < d.longPathNodes.length; i++) {
                    var p = nodes[d.longPathNodes[i]];
                    if (p.id in d.nodeShiftDic) {
                        shift = d.nodeShiftDic[p.id];
                    }
                    else {
                        shift = 0;
                    }
                    newPathNodeList.push(p.move(p, 0, shift / zoom));
                    if (p.cp1) {
                        var cp = new Point(p.cp1.x, p.cp1.y);
                        newPathNodeList.push(cp.move(0, shift / zoom));
                        newPathNodeList.push(cp.move(-1, shift / zoom));
                    }
                }


                var len = d.pathNodeList.length;
                //var sourcePartKey = d.pathNodeList[0].id + '_' + d.pathNodeList[1].id;
                //var targetPartKey = d.pathNodeList[len - 2].id + '_' + d.pathNodeList[len - 1].id;
                var sourcePartKey = d.pathNodeList[0] + '_' + d.pathNodeList[1];
                var targetPartKey = d.pathNodeList[len - 2] + '_' + d.pathNodeList[len - 1];

                var source = nodes[d.pathNodeDic[d.source]];
                var target = nodes[d.pathNodeDic[d.target]];

                //if (sourcePartKey in d.shiftDic) {
                source = source.move(source, 0, d.nodeShiftDic[d.source] / zoom);
                //}
                //if (targetPartKey in d.shiftDic) {
                target = target.move(target, 0, d.nodeShiftDic[d.target] / zoom);
                //}
                return regStr = source.x + "," + source.y + "(.*)" + target.x + "," + target.y;

            }

            if (d.isBackgroundEdge) {
                regStr = drawTreeEdge();
            }
            else if (d.isForegroundTargetEdge) {
                regStr = drawForegroundEdges();
            }
            else if (d.isForegroundSourceEdge) {
                regStr = drawForegroundEdges();
            }
            //else if(d.isForegroundEdge){
            //    console.log(d);
            //    regStr=drawForegroundEdges();
            //}
            if (newPathNodeList.length > 0) {
                var reg = new RegExp(regStr);
                var res;

                svg.append('path')
                    .attr('class', 'monotoneX')
                    .datum(newPathNodeList)
                    .attr('d', d3.line()
                        .curve(d3.curveMonotoneX)
                        .x(function (d) {
                            return d.x;
                        })
                        .y(function (d) {
                            return d.y;
                        })
                    )
                    .styles({
                        'stroke': 'yellow',
                        'stroke-width': '2px',
                        'fill': 'none'
                    })
                    .each(function () {
                        res = reg.exec(d3.select(this).attr('d'))[0];
                    })
                    .remove();
                pathD += res;
                var tmpPath = svg.append('path')
                    .attr('d', pathD)
                    .style('stroke', 'none')
                    .style('fill', 'none')
                    .each(function () {
                        var thisEdge = d3.select(this);
                        var totalLength = thisEdge.node().getTotalLength();
                        var asspoint = thisEdge.node().getPointAtLength((totalLength * (1 - targetRadius / totalLength) - 11));
                        var point = thisEdge.node().getPointAtLength((totalLength * (1 - targetRadius / totalLength) - 10));
                        pathD += 'M' + asspoint.x + ' ' + asspoint.y + 'M' + point.x + ' ' + point.y
                    });
                tmpPath.remove();
            }
            return pathD;
        }
    }
}
function removeDuplicationLabels(nodes) {
    for (var i = 0; i < nodes.length; i++) {
        var id = '#label' + nodes[i].id;
        svg.selectAll(id)
            .each(function (d, i) {
                var thisLabel = d3.select(this);
                if (thisLabel.attr('isBackground')) {
                    thisLabel.remove();
                }
            });
    }
}
function greyBackground() {
    var svg = this.svg;
    var svg_g = this.svg_g;
//    drawnodes.selectAll('.node')
//        .style('fill','lightgrey');
    svg.select('.rectBackground').remove();
    var width = svg.attr('width');
    var height = svg.attr('height');
    //mask设定这么大是因为设置小了在缩放时可能会把后面的漏出来
    var maskingOutData = [
        {
            class: 'outer mask0',
            index: 1,
            x: -5 * width,
            y: -5 * height,
            width: width * 11,
            height: height * 11,
            'fill': color.svgColor,
            'opacity': 0.6,
            rectClass: 'rect'
        },
        {
            class: 'outer mask1',
            index: 3,
            x: -5 * width,
            y: -5 * height,
            width: width * 11,
            height: height * 11,
            'fill': color.svgColor,
            'opacity': 0.75,
            rectClass: 'rect'
        }
    ];
    svg_g.selectAll('whatever')
        .data(maskingOutData)
        .enter()
        .append('g')
        .attrs({
            class: function (d) {
                return d.class
            },
            index: function (d) {
                return d.index
            }
        })
        .each(function (d) {
            d3.select(this)
                .append('rect')
                .attrs({
                    class: function (d) {
                        return d.rectClass
                    },
                    x: function (d) {
                        return d.x
                    },
                    y: function (d) {
                        return d.y
                    },
                    height: function (d) {
                        return d.height
                    },
                    width: function (d) {
                        return d.width
                    }
                })
                .styles({
                    fill: function (d) {
                        return d.fill
                    },
                    opacity: function (d) {
                        return d.opacity
                    }
                })
        });
//    svg_g.append('rect')
//        .attrs({
//            class:'rectBackground',
//            x:0,
//            y:0,
//            width:width,
//            height:height
//        })
//        .styles({
//            'fill':'rgb(15,40,60)',
//            'opacity':0.85
//        });
    svg.selectAll('path').attr('isBackground', 1);
    svg.selectAll('.node').attr('isBackground', 1);
    svg.selectAll('.size').remove();
    svg.selectAll('.label').attr('isBackground', 1);
    this.initFrameIndex(4)


}
function removeSVGElements() {
    var animateMode = this.animateMode;
    var svg_g = this.svg_g;
    if (animateMode == flipBook) {
        svg_g.selectAll('g')
            .each(function (d) {
                if (d.index > 0)d3.select(this).remove();
            });
        this.drawnodes = svg_g.select('#nodeG0');
        this.drawedges = svg_g.select('#edgeG0');
        this.drawnodes.selectAll('*').remove();
        this.drawedges.selectAll('*').remove();
    }
    else {
        svg_g.select('#nodeG2').remove();
        svg_g.select('#edgeG2').remove();
        this.drawnodes
            .attr('index', function (d) {
                d.index = 2;
                return d.index
            })
            .attr('id', function (d) {
                return 'nodeG' + d.index
            });
        this.drawedges
            .attr('index', function (d) {
                d.index = 2;
                return d.index
            })
            .attr('id', function (d) {
                return 'edgeG' + d.index
            });
        this.drawedges.select('.edgeField').selectAll('path')
            .each(function (d) {
                d3.select(this)
                    .attrs({
                        class: function (d) {
                            d.class = 'edgeG2' + d.class.split('G4')[1]
                            return d.class
                        }
                    })
            });
        this.drawedges.selectAll('.marker')
            .each(function (d) {
                d3.select(this)
                    .attrs({
                        id: function (d) {
                            d.id = 'edgeG2' + d.id.split('G4')[1]
                            return d.id
                        }
                    })
            });
        this.initFrameIndex(4);
        svg_g.selectAll('.outer')
            .sort(function (a, b) {
                return d3.ascending(a.index, b.index);
            });
    }
}


function drawAuthorInfo() {
    var authorDiv = d3.select('.authorDiv');
    authorDiv.selectAll('div').remove();
    if (focusedID.split('_').length == 2)var tmpID = focusedID.split('_')[0];
    if (authorData[tmpID]) {
        var authorInfo = authorData[tmpID];
    }
    else {
        var authorInfo = authorData['default'];
    }
    for (var i = 0; i < 2; i++) {
        var authorDivWidth = authorDiv.style('width').split('px')[0] - 2;
        var authorDivHeight = authorDiv.style('height').split('px')[0];
        var authorInfoDiv = authorDiv.append('div').attr('class', 'authorInfoDiv')
            .styles({
                float: 'left',
                height: authorDivHeight + px,
                width: authorDivWidth / 2 + px
            });
        var lineRatio = 0.75
        if (i == 0) {
            var lineDiv = authorDiv.append('div').styles({
                float: 'left',
                background: 'rgb(35,78,108)',
                width: '2px',
                height: authorDivHeight * lineRatio + px,
                'margin-top': authorDivHeight * (1 - lineRatio) / 2 + px
            });
        }

        var marginRatio = 0.2;
        var imageRatio = 0.6;
        authorInfoDiv.append('div').attr('class', 'imageDiv')
            .styles({
                float: 'left',
                width: authorDivHeight * imageRatio + px,
                height: authorDivHeight * imageRatio + px,
                'margin-left': authorDivHeight * marginRatio + px,
                'margin-top': authorDivHeight * marginRatio + px

            })
            .append('img').attr('class', 'img').attr('src', authorInfo[i].image)
            .styles({
                'border-radius': 5 + px,
                width: authorDivHeight * imageRatio + px,
                height: authorDivHeight * imageRatio + px
            });
        d3.select('.ruler').style('font-size', '14px');
        var authorTextDiv = authorInfoDiv.append('div').attr('class', 'authorTextDiv')
            .styles({
                float: 'left',
                width: authorDivWidth / 2 - authorDivHeight * (marginRatio + 0.05) - authorDivHeight * imageRatio + px,
                height: authorDivHeight * imageRatio + px,
                'margin-top': authorDivHeight * marginRatio + px,
                'margin-left': authorDivHeight * 0.05 + px
            })
        authorTextDiv.append('div').attr('class', 'authorNameDiv').append('text')
            .styles({
                'font-family': 'Microsoft YaHei',
                'font-size': 14 + px
            })
            .html(function (d) {
                return authorInfo[i]['author'] + ':';
            })
        for (var key in authorInfo[i]) {
            if (key != 'author' && key != 'title' && key != 'image')
                authorTextDiv.append('div').attr('class', 'authorNameDiv').append('text')
                    .styles({
                        'font-family': 'Microsoft YaHei',
                        'font-size': function (d) {
                            return 11 + px;
                        }
                    })
                    .html(function (d) {
                        return authorInfo[i][key];
                    })
        }

    }

}
function getstart(origin1, origin2, r, d) {
    if (d != 0) return origin1 + (r / d) * (origin2 - origin1);
    else return origin1;
}
function getend(origin1, origin2, r, d) {
    var ratio = r + 13 / d;
//    if(d!=0) return origin1*ratio+origin2*(1-ratio);
    if (d != 0) return origin1 + ((r + 13) / d) * (origin2 - origin1);
    else return origin1;
}


function findBoxOfPoints(points) {
    var maxX = d3.max(points, function (d) {
        return d.x
    })
    var maxY = d3.max(points, function (d) {
        return d.y
    })
    var minX = d3.min(points, function (d) {
        return d.x
    })
    var minY = d3.min(points, function (d) {
        return d.y
    })
    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
    }
}
function getStrokeWidth(d) {
    var stroke_width;
    var that = d.that;
    var flowScale = that.flowScale;
    var weightScale = that.weightScale;
    if (optionNumber.edgeThicknessOption == 1) {
        stroke_width = flowScale(d.flow);
    }
    else if (optionNumber.edgeThicknessOption == 0) {
        var weightSum = 0;
        for (var key in d.weight) {
            weightSum += d.weight[key];
        }
        stroke_width = weightScale(weightSum);
    }
    return stroke_width;
}
function drawTitle() {
    d3.selectAll('.title').remove();

    drawTitles.selectAll('text').data(['1']).enter()
        .append('text')
        .attrs({
            'x': '95px',
            'y': '50px'
        })
        .text(title);
}

function findFocusedNode() {
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].nodes) {
            for (var j = 0; j < nodes[i].nodes.length; j++) {
                if (nodes[i].nodes[j].focus == 'focused') {
                    nodes[i].focused = true;
                }
            }
        }
    }
}


function SizeScale(maxSize) {
    this.k = 0;
    var max = d3.max([minMax, maxSize]);
    this.sizeScale = function (nodeSize) {
        var r = (dMax - dMin) * (Math.sqrt(nodeSize) / Math.sqrt(max)) + dMin;
        return r;
    };
}
function getSelfData(nodes) {
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].selfEdge) {
            var size = nodes[i].size;
            var r = sizeScale.sizeScale(size);
            var x = nodes[i].x;
            var y = nodes[i].y;
            var d = 2;
            var selfEdgeLabelX = x;
            var selfEdgeLabelY = y - (5 / 3 * r + d);
            nodes[i].selfPathStr = selfPathData(x, y, size);
            nodes[i].selfEdgeLabelX = selfEdgeLabelX;
            nodes[i].selfEdgeLabelY = selfEdgeLabelY;

        }
    }
}
function selfPathData(x, y, size) {
    var r = sizeScale.sizeScale(size);
    var d = 2;
    var pi = Math.PI;
    var degree = 25 / 360 * pi;
    var x1 = x - (r + d) * Math.sin(degree);
    var x2 = x + (r + d) * Math.sin(degree);
    var y1 = y - (r + d);
    var y2 = y - (r + d);
    var rx = r / 3;
    var ry = r / 3;
    return 'M' + x1 + ' ' + y1 + 'A' + rx + ' ' + ry + ' ' + 0 + ' ' + 1 + ' ' + 1 + ' ' + x2 + ' ' + y2;
}
function getSelfEdgeStrokeWidth(d) {
    var stroke_width;
    if (optionNumber.edgeThicknessOption == 1) {
        stroke_width = flowScale(d.selfEdge);
    }
    else if (optionNumber.edgeThicknessOption == 0) {
        var weight = parseInt(d.selfEdge * d.size);
        stroke_width = weightScale(weight);
    }
    return stroke_width;
}

function setTransition(div, location, marginLeft, marginTop, isVertical) {//location should be the final place after transition
    var duration = 500;
    if (isVertical) {
        div.transition()
            .duration(duration)
            .styles({
                height: location + px,
                'margin-left': marginLeft + px,
                'margin-top': marginTop + px
            })
    }
    else {
        div.transition()
            .duration(duration)
            .styles({
                width: location + px,
                'margin-left': marginLeft + px,
                'margin-top': marginTop + px
            })
    }

}
function recoverScreen() {
    var duration = 500;
    var bodyDiv = d3.select('.bodyDiv');
    var hiddenDivList = {
        top: ['titleDiv', 'middleTopBarDiv'],
        bottom: ['authorDiv'],
        left: ['leftAndTransitionDiv'],
        right: ['rightDiv']
    };
    var hiddenElementList = ['div', 'text'];
    for (var key in hiddenDivList) {
        for (var i = 0; i < hiddenDivList[key].length; i++) {
            var thisDiv = bodyDiv.select('.' + hiddenDivList[key][i]);
            var originWidth = thisDiv.attr('oldWidth').split('px')[0];
            var originHeight = thisDiv.attr('oldHeight').split('px')[0];
            if (key == 'top') {
                setTransition(thisDiv, originHeight, 0, 0, true);
            }
            else if (key == 'bottom') {
                setTransition(thisDiv, originHeight, 0, 0, true);
            }
            else if (key = 'left') {
                setTransition(thisDiv, originWidth, 0, 0, false);
            }
            else if (key == 'right') {
                setTransition(thisDiv, originWidth, 0, 0, false);
            }
            for (var j = 0, len1 = hiddenElementList.length; j < len1; j++) {
                thisDiv.selectAll(hiddenElementList[j])

                    .styles({
                        display: 'block'
                    });
            }
        }

    }
    var middleDiv = d3.select('.middleDiv');

    middleDiv.transition()
        .duration(duration)
        .styles({
            width: middleDiv.attr('oldWidth'),
            height: middleDiv.attr('oldWidth')
        });
    var top = middleDiv.select('.topControlDiv');
    top.transition()
        .duration(duration).styles({
        width: top.attr('oldWidth')
    });
//
    var bottom = middleDiv.select('.bottomControlDiv');
    bottom.transition()
        .duration(duration).styles({
        width: bottom.attr('oldWidth')
    });
    var svgHeight = usefulHeight - parseFloat(top.style('height').split('px')[0]) - parseFloat(bottom.style('height').split('px')[0]);
    var graphDiv = middleDiv.select('.graphDiv');
    graphDiv.transition()
        .duration(duration)
        .styles({
            width: graphDiv.attr('oldWidth'),
            height: graphDiv.attr('oldHeight')
        });
    var middleSVG = middleDiv.select('svg');
    middleSVG.transition()
        .duration(duration)
        .attrs({
            width: svg.attr('oldWidth'),
            height: svg.attr('oldHeight')
        })
        .each('end', function () {
            size = {
                width: svg.attr('oldWidth') * 0.85,
                height: svg.attr('oldHeight') * 0.7
            };
            coordinateOffset(data.postData[focusedID]);
            getCurves(data.postData[focusedID]);
//
            layout(optionNumber, true, 'flowMap', data.postData[focusedID]);
        });

}
function getLength(divClass, type) {
    return parseFloat(d3.select('.' + divClass).style(type).split('px')[0]);
}

function fullScreen() {
    var duration = 500
    changeDivList = ['titleDiv', 'middleTopBarDiv', 'authorDiv', 'leftAndTransitionDiv', 'rightDiv', 'middleDiv', 'topControlDiv', 'bottomControlDiv', 'graphDiv'];
    function storeOldDivData(div) {
        div.attr('oldWidth', div.style('width'));
        div.attr('oldHeight', div.style('height'));
    }

    for (var i = 0, len = changeDivList.length; i < len; i++) {
        storeOldDivData(d3.select('.' + changeDivList[i]));
    }
    svg.attr('oldWidth', svg.attr('width'));
    svg.attr('oldHeight', svg.attr('height'));

//    layout(optionNumber);
    var bodyDiv = d3.select('.bodyDiv');
    var hiddenDivList = {
        top: ['titleDiv', 'middleTopBarDiv'],
        bottom: ['authorDiv'],
        left: ['leftAndTransitionDiv'],
        right: ['rightDiv']
    };
    var hiddenElementList = ['div', 'text'];


    var topHeight = getLength('titleDiv', 'height') + getLength('middleTopBarDiv', 'height');
    var bottomHeight = getLength('authorDiv', 'height');
    var leftWidth = getLength('leftAndTransitionDiv', 'width');
    var rightWidth = getLength('rightDiv', 'width');

    for (var key in hiddenDivList) {
        for (var i = 0; i < hiddenDivList[key].length; i++) {
            var thisDiv = bodyDiv.select('.' + hiddenDivList[key][i]);
            if (key == 'top') {
                setTransition(thisDiv, 0, 0, 0, true);
            }
            else if (key == 'bottom') {
                setTransition(thisDiv, 0, leftWidth, topHeight + bottomHeight, true);
            }
            else if (key = 'left') {
                setTransition(thisDiv, 0, 0, 0, false);
            }
            else if (key == 'right') {
                setTransition(thisDiv, 0, leftWidth + rightWidth, 0, false);
            }
            for (var j = 0, len1 = hiddenElementList.length; j < len1; j++) {
                thisDiv.selectAll(hiddenElementList[j])

                    .styles({
                        display: 'none'
                    });
            }
        }


    }
    var middleDiv = d3.select('.middleDiv');

    middleDiv.transition()
        .duration(duration)
        .styles({
            width: usefulWidth + px,
            height: usefulHeight + px
        });
    var top = middleDiv.select('.topControlDiv');
    top.transition()
        .duration(duration).styles({
        width: usefulWidth + px
    });
//
    var bottom = middleDiv.select('.bottomControlDiv');
    bottom.transition()
        .duration(duration).styles({
        width: usefulWidth + px
    });
    var svgHeight = usefulHeight - parseFloat(top.style('height').split('px')[0]) - parseFloat(bottom.style('height').split('px')[0]);
    middleDiv.select('.graphDiv')
        .transition()
        .duration(duration)
        .styles({
            width: usefulWidth + px,
            height: svgHeight + px
        });
    var middleSVG = middleDiv.select('svg');
    middleSVG.transition()
        .duration(duration)
        .attrs({
            width: usefulWidth,
            height: svgHeight
        })
        .each('end', function () {
            size = {
                width: usefulWidth * 0.85,
                height: svgHeight * 0.7
            };
            coordinateOffset(data.postData[focusedID]);
            getCurves(data.postData[focusedID]);
//
            layout(optionNumber, true, 'flowMap', data.postData[focusedID]);
        });

}

