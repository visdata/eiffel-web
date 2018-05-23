function drawSize(optionNumber, doTransition, transitionType, d) {
    var nodes = d.node;
    var edges = d.edge;
//    var nodes= [];
//    var edges=[];
//    clone(d.node,nodes);
//    clone(d.edge,edges);
    var data = this.data;
    var that = this;

    var nodeOpacity = that.nodeOpacity;

    var k=this.zoomK||1;
    var drawnodes = this.drawnodes;
    var nodeClick = this.nodeClick;
    var mouseover = this.mouseover;
    var mouseout = this.mouseout;
    var idElem = this.idElem;
    var focusedID = this.focusedID;
    var svg = this.svg;
    var screenPreNodes = data.screenPreviousData[focusedID].node;
    var fontSize = dMax/2;
    var fontFamily = 'Microsoft YaHei';
    var drag = this.drag;
    var pre;
    var preSizes = {};
    if (this.preSizeLayer) {
        pre = this.preSizeLayer;
        pre.selectAll('.circle')
            .each(function (d) {
                preSizes[d.id] = {size: d.newSize};
            });
        //pre.remove();
    }
    var g = drawnodes.append('g').attr('class', 'sizeLayer');
    this.preSizeLayer = g;
    nodes.forEach(function (node) {
        node.fontSize=fontSize;
    });
    if (doTransition) {
        g.selectAll('node_size')
            .data(nodes)
            .enter()
            .append('text')
            .attrs({
                "x": function (d) {
                    return d.x;
                },
                "y": function (d) {
                    d.nodeSizeTextShiftY=7.5;
                    return d.y + d.nodeSizeTextShiftY/k;
                },
                "id": function (d) {
                    return 'size'+d.id
                },
                "class": 'size'
            })
    }
    else {
        g.selectAll('node_size')
            .data(nodes)
            .enter()
            .append('text')

            .attrs({
                "x": function (d) {
                    return d.x;
                },
                "y": function (d) {
                    d.nodeSizeTextShiftY=7;
                    return d.y + d.nodeSizeTextShiftY/k;
                },
                "id": function (d) {
                    return 'size'+d.id
                },
                'transitionStatus': 'end',
                "class": function (d) {
                    d.class = 'size';
                    return d.class;
                }
            })
    }
    g.selectAll('.size')
        .data(nodes)
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

        .each(function (d) {
            if (d.size == 0 || d.focused == 'true') {
                d3.select(this).remove();
            }
            idElem[d.id] = d3.select(this);
        })
        .style("opacity", function (d) {
            if (nodeOpacityOption == 'citation' || nodeOpacityOption == 'uniform') {
                return nodeOpacity[nodeOpacityOption](d.citation);
            }
            else if (nodeOpacityOption == 'avgCitation') {
                return nodeOpacity[nodeOpacityOption](d.citation/ d.size);
            }
        })
        .style("cursor", "hand")
        .styles({
            'font-size': function (d) {
                return d.fontSize/k;
            },
            'font-family': 'Microsoft YaHei',
            fill: color.sizeLabelColor,
            //'alignment-baseline': 'middle',
            'text-anchor': 'middle'
        });

    if (transitionType == 'flowMap') {
        var sizes = g.selectAll('.size');
        for (var i = 0; i < sizes._groups[0].length; i++) {

            var size = d3.select(sizes._groups[0][i]);
            var nodeData;
            var tmpSizeSeries = [];
            var tmpDelay = [];
            size.attr('id', function (d) {
                nodeData = d;
                return 'size' + d.id;
            });

            clone(nodeData.sizeSeries, tmpSizeSeries);
            clone(nodeData.sizeDelay, tmpDelay);
            setSizeTransition(size, 1 ,tmpDelay , tmpSizeSeries);
            //size.attr('id', function (d) {
            //    d.sizeDelay = tmpDelay;
            //    d.sizeSeries = tmpSizeSeries;
            //    return d.id;
            //});
        }
    }
    else {
        g.selectAll('.size')
            .html(function (d) {
                if(preSizes[d.id]) {
                    return preSizes[d.id].size;
                }
                //return d.id;
                return d.newSize;
                //add old key to help change label
                //return d.newSize+'-'+ d.oldKey;
            });
    }
    function setSizeTransition(size, preSize,sizeDelay, sizeSeries) {
        var nodeData = size.data()[0];
        if (sizeSeries.length > 0) {
            size.transition()
                .duration(function (d) {
                    return d.duration * 4;
                })
                .delay(function (d) {
                    return sizeDelay[0];
                })
                .tween("text", function (d) {
                    var that=d3.select(this);
                    var i = d3.interpolateRound(preSize, sizeSeries[0]);
                    preSize = sizeSeries[0];
                    return function (t) {
                        that.text(i(t));
                    };
                })
                .style("opacity", 1)
                .style("cursor", "hand")
                .styles({
                    'font-size': function (d) {
                        var size = dMax/2;
                        d.fontSize = size;
                        return d.fontSize/k;
                    },
                    'font-family': 'Microsoft YaHei',
                    fill: color.sizeLabelColor
                })
                .on('start', function (d) {
                    pre.select('#size'+ d.id).remove();
                    var thisNode = d3.select(this);
                    thisNode.attrs({
                        transitionStatus: function (d) {
                            d.transitionStatus = 'start';
                            return d.transitionStatus;
                        }
                    })
                })
                .on('end', function (d) {
                    sizeDelay = sizeDelay.splice(1, sizeDelay.length - 1);
                    sizeDelay[0] -= d.duration * 4;
                    sizeSeries = sizeSeries.splice(1, sizeSeries.length - 1);
                    setSizeTransition(size, preSize, sizeDelay, sizeSeries);
                })
        }
        else {
            size.attr('transitionStatus', function (d) {
                d.transitionStatus = 'end';
                return d.transitionStatus;
            })
        }
    }

    svg.selectAll('.node').each(function (d) {
        d.idElem = idElem[d.id];
    })


}