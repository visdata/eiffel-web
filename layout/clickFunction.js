function nodeClick(d,that){
    console.log(d);
    var axisSVG=that.axisSVG;
    var svg=that.svg;
    var data=that.data;
    var nodeClass=d.self.attr('class');
    var focusedID=that.focusedID;
    if(nodeClass=='node') {
        d.self.attr('class','node clicked');
        d.self.style('stroke',color.nodeHighlightStroke);
        d.self.style('stroke-width', function (d) {
            d.strokeWidth=2;
            return d.strokeWidth;
        });
        d.self.style('fill',color.nodeHighlightColor);

        if(d.textElem)for(var i=0;i<d.textElem.textElem.length;i++){
            d.textElem.textElem[i]
                .styles({
                    'fill':color.nodeLabelHighlightColor
                });
        }
//
    }
    else if(nodeClass=='node clicked'){
//                d.self.style('stroke','rgb(0,220,225)');
        d.self.style('fill',function(d){return "url(#linearGradient"+ d.id+")"});
        d.self.style('stroke',color.nodeHighlightStroke);
        d.self.style('stroke-width', function (d) {
            d.strokeWidth=0;
            return d.strokeWidth;
        });
        d.self.attr('class','node');
        if(d.textElem)for(var i=0;i<d.textElem.textElem.length;i++){
            d.textElem.textElem[i].styles({
                'fill':color.nodeLabelColor,
//                'stroke':'none',
//                'stroke-width':0+px
            });
        }
//
    }
    svg.selectAll('.linearGradient')
        .each(function(){
            d3.select(this).selectAll('stop')
                .each(function(d,i){
                    var thisStop=d3.select(this);
                    if(i == 1||i == 2)thisStop.attr('offset',0);
                })
        })
    axisSVG.selectAll('.yearPath')
        .each(function(){
            d3.select(this).style('fill',color.yearPathColor);
//                    d3.select(this).style('stroke',color.);
            d3.select(this).attr('class','yearPath');
        })
    var clusterID=d.oldKey;
    var yearPath=d3.selectAll('.yearPath');

    var yearDic=d.newNodeYearInfo;
    var subNodeYearData=[];
    if(data.postData[focusedID].subNodeYearData){
        subNodeYearData=data.postData[focusedID].subNodeYearData;
    }
    else{
        clone(data.postData[focusedID].nodeYearData.data,subNodeYearData)
        for (var i=0;i<subNodeYearData.length;i++){
            subNodeYearData[i][1]=0;
        }
    }
    var subNodeYearDic={};
    for(var i=0;i<subNodeYearData.length;i++){
        var key=subNodeYearData[i][0];
        var value=subNodeYearData[i][1];
        subNodeYearDic[key]=value;
    }
    axisSVG.selectAll('.subYearPath').remove();
    if(d.clicked){
        for(var key in yearDic){
            subNodeYearDic[key]-=yearDic[key];
        }
        var tmpData=[]
        for(var key in subNodeYearDic){
            tmp=[key, subNodeYearDic[key]]
            tmpData.push(tmp);
        }
        data.postData[focusedID].subNodeYearData=tmpData;
        d.clicked=false;
        that.drawNodeYearDataSet(data.postData[focusedID].subNodeYearData,'subYearPath')
        that.recoveryPath(d);
    }
    else{
        for(var key in yearDic){
            subNodeYearDic[key]+=yearDic[key];
        }
        var tmpData=[]
        for(var key in subNodeYearDic){
            tmp=[key, subNodeYearDic[key]]
            tmpData.push(tmp);
        }
        data.postData[focusedID].subNodeYearData=tmpData;
        d.clicked=true;
        that.drawNodeYearDataSet(data.postData[focusedID].subNodeYearData,'subYearPath')
        that.highlightPath(d);
    }

//            console.log(d);

    that.requestTitleList(d, clusterID);

}
function ifObjectHasProperty(obj){
    var flag=false;
    for(var key in obj){
        flag=true;
        break
    }
    return flag
}
function recoveryPath(d){
    var directedGraph=this.directedGraph;
    var currentEdgeSourceTargetDic=this.currentEdgeSourceTargetDic;
    var thisID=parseInt(d.id)
    var rootID=directedGraph.root.id.toInt();
    var backPath=directedGraph.findMaxPathBetween(rootID,thisID);
    if(backPath.length>0){
        for(var i=0;i<backPath[0].edges.length;i++){
            var edge=backPath[0].edges[i];
            var source=edge.source;
            var target=edge.target;
            var key=source+'_'+target;
            var currentEdges=[];
            if(currentEdgeSourceTargetDic[key]){
                currentEdges=currentEdgeSourceTargetDic[key];
                for(var j=0;j<currentEdges.length;j++){
                    if(currentEdges[j].highlightedByNodeDic[thisID]){
                        delete currentEdges[j].highlightedByNodeDic[thisID];
                    }
                    if(!ifObjectHasProperty(currentEdges[j].highlightedByNodeDic)){
                        var pathClass='.'+currentEdges[j].class;
                        var path=d3.select(pathClass)
                            .each(function(d){
                                d.levelIndex=0
                            })
                            .styles({
                                stroke:color.edgeColor
                            });
                        var pathMarker=path.data()[0].marker;
                        pathMarker.styles({
                            fill:color.markerColor
                        });
                    }


                }
            }
        }
    }
}
function highlightPath(d){
    var that=this;
    var directedGraph=this.directedGraph;
    var currentEdgeSourceTargetDic=this.currentEdgeSourceTargetDic;
    var thisID=parseInt(d.id);
    var rootID=directedGraph.root.id.toInt();
    var backPath=directedGraph.findMaxPathBetween(rootID,thisID);
    if(backPath.length>0){
        for(var i=0;i<backPath[0].edges.length;i++){
            var edge=backPath[0].edges[i];
            var source=edge.source;
            var target=edge.target;
            var key=source+'_'+target;
            var currentEdges=[];
            if(currentEdgeSourceTargetDic[key]){
                currentEdges=currentEdgeSourceTargetDic[key];
                for(var j=0;j<currentEdges.length;j++){
                    if(currentEdges[j].highlightedByNodeDic){
                        currentEdges[j].highlightedByNodeDic[thisID]=1;
                    }
                    else{
                        currentEdges[j].highlightedByNodeDic={};
                        currentEdges[j].highlightedByNodeDic[thisID]=1;
                    }
                    var pathClass='.'+currentEdges[j].class;
                    var path=d3.select(pathClass)
                        .each(function(d){
                            d.levelIndex=1
                        })
                        .styles({
                            stroke:color.edgeHightLightColor
                        });
                    if(path.data()[0].marker){
                        var pathMarker=path.data()[0].marker;
                        pathMarker.styles({
                            fill:color.edgeHightLightColor
                        });
                    }
                }
            }
        }
        that.drawedges.select('.edgeField').selectAll('path')
            .sort(function(a,b){
                return d3.ascending(a.levelIndex,b.levelIndex);
            });
    }

}
function mouseover(d,that){
    var k=leftLayer.zoomK||1;
    var transitionFlag=that.transitionFlag;
    if(transitionFlag==false){
        function changeNode(d,that,changePath){
            if(d&&d.self){
                d.self.style('stroke',color.nodeHighlightStroke);
                d.self.style('stroke-width', function (d) {
                    d.strokeWidth=2;
                    return d.strokeWidth/k;
                });
            }
            if(d&&d.textElem){
                for(var i=0;i<d.textElem.textElem.length;i++){
                    d.textElem.textElem[i]
                        .styles({
                            'fill':color.nodeLabelHighlightColor
                            //visibility: function () {
                            //    if(d.textElem.textElem[i]._groups[0][0].classList[2]=='tfidf'){
                            //        return 'hidden';
                            //    }
                            //    else return null;
                            //}
//                'stroke':color.nodeLabelHighlightStroke,
//                'stroke-width':1+px
                        });

                    //.attr('x',function(e){return e.x+ e.fullLabelDeltaX/k;})
                    //.html(function(e){return e.nodeFullName;});
                }
            }
            if(d&&d.pathElem&&changePath){
                for(var i=0;i<d.pathElem.length;i++){
                    d.pathElem[i].each(function (p) {
                        if(!p.isBackgroundEdge){
                            var self=d3.select(this);
                            self.style('stroke',color.edgeHightLightColor);
                            self.style('visibility','visible');
                            p.levelIndex=1;
                            if(p.marker){
                                p.marker.style('fill',color.edgeHightLightColor);
                                p.marker.style('visibility','visible');
                            }
                        }
                    })
                }
                that.drawedges.select('.edgeField').selectAll('path')
                    .sort(function(a,b){
                        return d3.ascending(a.levelIndex,b.levelIndex);
                    });
            }
            if(d&&d.idElem)d.idElem.style('fill',color.sizeLabelColor);
        }
        changeNode(d,that,true);
        d.sourceNodes.forEach(function (node) {
            changeNode(node,that);
        });
        d.targetNodes.forEach(function(node){
            changeNode(node,that);
        });


    }

}
function mouseout(d,that){
    var k=leftLayer.zoomK||1;
    var transitionFlag=that.transitionFlag;
    if(transitionFlag==false){
        function changeNode(d,that,changePath){
            var thisnode=d3.select(this);
            if(d&&d.self&&d.self.attr('class')=='node'){
                d.self.style('stroke','none');
                d.self.style('stroke-width', function (d) {
                    d.strokeWidth=0;
                    return d.strokeWidth;
                });
                if(d.idElem)d.idElem.style('fill',color.sizeLabelColor);
                if(d.textElem)for(var i=0;i<d.textElem.textElem.length;i++){
                    d.textElem.textElem[i]
                        .styles({
                            'fill':color.nodeLabelColor
                            //visibility: function () {
                            //    if(d.textElem.textElem[i]._groups[0][0].classList[2]=='tfidf'){
                            //        return null;
                            //    }
                            //    else return 'hidden';
                            //}
                        })
                        //.attr('x',function(e){return e.x+ e.labelDeltaX/k;})
                        //.html(function(e){return e.nodeName;});
                }
            }
            else{
                if(d&&d.textElem)for(var i=0;i<d.textElem.textElem.length;i++){
                    //d.textElem.textElem[i]
                    //    .attr('x',function(e){return e.x+ e.labelDeltaX/k;})
                    //    .html(function(e){return e.nodeName;});
                }
            }
            if(d&&d.pathElem&&changePath){
                for(var i=0;i<d.pathElem.length;i++){

                    d.pathElem[i].each(function (p) {
                        if(!p.isBackgroundEdge){
                            var self=d3.select(this);
                            if (p.marker) {
                                p.marker.style('fill', color.markerColor);
                                p.marker.style('visibility', 'hidden');
                            }
                            if (!ifObjectHasProperty(self.data()[0].highlightedByNodeDic)) {
                                self.style('stroke', color.edgeColor);
                                self.style('visibility','hidden');
                            }
                        }

                    });

                }
            }
            that.drawedges.select('.edgeField').selectAll('path')
                .each(function(d){
                    d.levelIndex=0
                });
        }
        changeNode(d,that,true);
        d.sourceNodes.forEach(function (node) {
            changeNode(node,that);
        });
        d.targetNodes.forEach(function(node){
            changeNode(node,that);
        });
    }


}
