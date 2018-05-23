function reLayoutFlowMap(){
    var focusedID=this.focusedID;
    var data=this.data;
    var newEdges=[];
    var edges=data.postData[focusedID].edge;
    var treeEdges= data.postData[focusedID].deletedTreeEdges;
    var nonTreeEdges=data.postData[focusedID].deletedNonTreeEdges;


    for(var i=0;i<edges.length;i++){
        if(edges[i].structureType=='originEdge'&&edges[i].ratio==1){
            newEdges.push(edges[i]);
        }
//        else if(edges[i].structureType=='treeEdge'){
//            nonTreeEdges.push(edges[i]);
//        }
//        else if(edges[i].structureType=='nontreeEdge'){
//            nonTreeEdges.push(edges[i]);
//        }
    }
    data.postData[focusedID].edge=newEdges;
    this.calculateFlowMap(data.postData[focusedID],true);
    this.setInitNodeTransition(data.postData[focusedID]);
    this.setInitEdgeTransition(data.postData[focusedID]);
    this.getRelation(data.postData[focusedID]);
    getCurves(data.postData[focusedID]);
    if(data.postData[focusedID].subNodeYearData){
        var subNodeYearData=data.postData[focusedID].subNodeYearData;
        for (var i=0;i<subNodeYearData.length;i++){
            subNodeYearData[i][1]=0;
        }
    }
    this.preLayout(data.postData[focusedID]);
    d3.select('.edgeField').selectAll('path')
        .each(function(){
            var thisEdge=d3.select(this);
            var edgeClass=thisEdge.attr('class');
            if(parseInt(edgeClass.split('path')[1])>151){
                thisEdge.remove()
            }
        });
}