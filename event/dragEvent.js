function dragmove(d) {
    var that = d.that;
    that.ifDrag = true;
    that.markerAdjust = false;
    var pathData = that.pathData;
    var relation = that.relation;
    var currentData = that.currentData;
    var ralation = that.relation;
    var focusedID = that.focusedID;
    var data = that.data;
    var nodes = data.postData[focusedID].node;
    var edges = data.postData[focusedID].edge;

    var oldX = d.x;
    var oldY = d.y;
    d.x = d3.event.x;
    d.y = d3.event.y;
    var x = d.x;
    var y = d.y;
    var x1 = x - oldX;
    var y1 = y - oldY;
    var delta_x;
    var delta_y;

    var k = that.zoomK || 1;
    for (var i = 0; i < relation[d.id].edges.length; i++) {
        for (var j = 0; j < edges[relation[d.id].edges[i]].nodes.length; j++) {
            if (d.id == edges[relation[d.id].edges[i]].nodes[j]) {
                break;
            }
        }
        var dx = 0;
        var dy = 0;
        if (edges[i].dx)dx = edges[i].dx;
        if (edges[i].dy)dy = edges[i].dy;
        var points = edges[relation[d.id].edges[i]].points;
        var length = edges[relation[d.id].edges[i]].points.length;

        if (j == 1) {
            points[length - 1].x += d3.event.dx + dx;
            points[length - 1].y += d3.event.dy + dy;
        }
        else {
            points[j].x += d3.event.dx + dx;
            points[j].y += d3.event.dy + dy;

        }
        var edgeLabelX = (points[0].x + points[length - 1].x) / 2;
        var edgeLabelY = (points[0].y + points[length - 1].y) / 2;
        if (d.edgeLabelElem[i]) {
            d.edgeLabelElem[i].attrs({
                x: edgeLabelX,
                y: edgeLabelY
            })
        }

    }

    if (d.focused == 'true')d.self.attrs({x: d.x + d.imageShift / k, y: d.y + d.imageShift / k});
    else d.self.attrs({cx: d.x, cy: d.y});
    function updatePaths(paths) {
        paths.forEach(function (path) {
            path.attr('d', function (d) {
                    return pathData(d, that, k);
                })
                .style("stroke-dasharray", function (d) {
                    var thisEdge = d3.select(this);
                    var edgeLength = thisEdge.node().getTotalLength();
                    return edgeLength;
                });
        })
    }

    if (d.pathElem) {
        updatePaths(d.pathElem);
    }
    if (d.backgroundPathElem) {
        updatePaths(d.backgroundPathElem);
    }
    if (d.relatedEdges) {
        updatePaths(d.relatedEdges);
    }
    if (d.textElem)for (var i = 0; i < d.textElem.textElem.length; i++) {
//        console.log(d.textElem.textElem[i].attr("delta_x"),d.textElem.textElem[i].attr("delta_y"));

        var thisLabel = d.textElem.textElem[i];
        var indexStr = thisLabel.attr('index');
        var prefix = indexStr.split('_')[0];
        var index = indexStr.split('_')[1];
        thisLabel.attrs({
            x: x,
            y: y + d[prefix + 'Y'][index] / initDMax * (dMax+dMin-8) / k
        });
        //d.textElem.textElem[i].attrs({
        //    x:function(d){return x-delta_x;},
        //    y:function(d){return y-delta_y;}
        //})
    }
    if (d.idElem) {
        //delta_x= d.idElem.attr("delta_x");
        //delta_y= d.idElem.attr("delta_y");
        d.idElem.attrs({
            x: x,
            y: function (d) {
                return y + d.nodeSizeTextShiftY / k;
            }
        });
        //d.idElem.attrs({
        //    x:function(d){return x-delta_x;},
        //    y:function(d){return y-delta_y;}
        //})
    }
    //if(d.selfEdgeElem){
    //    var selfPath=selfPathData(x, y, d.size);
    //    d.selfEdgeElem.attrs({
    //        d:selfPath
    //    });
    //}
    //if(d.selfEdgeLabelElem){
    //    var oriX=parseInt(d.selfEdgeLabelElem.attr('x'));
    //    var oriY=parseInt(d.selfEdgeLabelElem.attr('y'));
    //    d.selfEdgeLabelElem.attrs({
    //        x:oriX+x1,
    //        y:oriY+y1
    //    })
    //}

    //var str_size= d.size.toString();
//    console.log(d.size, str_size.length);
//    console.log(d.idElem);
//    console.log(d.textElem.textElem[0].attr("x"));
    ifDrag = false;

}
