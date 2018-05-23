function Graph(edges,assistEdges){

            this.edges=edges;
            var dotBeginning='digraph{';
            var dotEnding='}';
            var arrow='->';
            var edgeEnding=';';
            var dot='';
            var invis='[style=invis]';
            dot+=dotBeginning;
            for(var i= 0,len=edges.length;i<len;i++){
                var edge=edges[i];
                var source=String(edge.source);
                var target=String(edge.target);
                var edgeString=source+arrow+target+edgeEnding;
                dot+=edgeString;
            }
            if(assistEdges) {
                for (var i = 0, len = assistEdges.length; i < len; i++) {
                    var edge = assistEdges[i];
                    var source = String(edge.source);
                    var target = String(edge.target);
                    var edgeString = source + arrow + target + invis + edgeEnding;
                    dot += edgeString;
                }
            }
            dot+=dotEnding;
            this.dotString=dot;
            this.svgGraph=function(){
//        console.log(Viz(this.dotString));
                var div=d3.select('body').append('tmpDiv').attr('class','tmpDiv');
                div.html(Viz(this.dotString));

//            .html(Viz(this.dotString));
//        document.body.innerHTML +=Viz(this.dotString);
    }
}
function reCalculateLayout(graph,graphData){
    var nodes=graphData.node;
    var edges=graphData.edge;
    if(this.method=='mst'||this.method=='filterFlow'){
        maximalSpanningTree(graphData);
    }
//    var newGraph=new Graph(graphData.edge, []);
    graph.svgGraph();
    var newSVG=d3.select('.tmpDiv').select('svg');
    var svgData=getSVGData(newSVG);
    newSVG.remove();
    d3.select('.tmpDiv').remove();
    mergeData(svgData,nodes, edges);
//    reverseXY(nodes,edges);

}

function maximalSpanningTree(d){
    //find root;
    var nodes=d.node;
    var edges= d.edge;
    d.originEdge=[];
    clone(edges,d.originEdge);
    var root;
    var newNodes=[];
    var newEdges=[];
    clone(nodes, newNodes);
    for(var i=0;i<nodes.length;i++){
        if(nodes[i].focused=='true'){
            root = nodes[i];
            break;
        }
    }

    //remove all the edges to the root node
    for(var i=0;i<edges.length;i++){
        if(edges[i].target!=parseInt(root.id))newEdges.push(edges[i]);
    }


    //select top flow of every node
    var tmpEdge=[];
    for(var i=0;i<nodes.length;i++){
        if(!(nodes[i].focused=='true')){
            var id=parseInt(nodes[i].id);
            var nodeEdge=[];
            var maxEdge={flow:0};
            for(var j=0;j<newEdges.length;j++){
                if(newEdges[j].target==id){
                    if(newEdges[j].flow>maxEdge.flow)maxEdge=newEdges[j];
                }
            }
            tmpEdge.push(maxEdge);
        }
    }
    d.edge = tmpEdge;
    var edgeDic=getEdgeSourceTargetDic(d.edge);
    var originEdgeDic=getEdgeSourceTargetDic(d.originEdge);
    var otherEdge=[];
    for(var key in originEdgeDic){
        if(!(key in edgeDic)){
            otherEdge.push(originEdgeDic[key])
        }
    }
    d.otherEdge=otherEdge;

}

function mergeData(data,nodes,edges){
    var svgNodes=data.svgNodes;
    var svgEdges=data.svgEdges;
    for(var i= 0,len=svgEdges.length;i<len;i++){
        var source=svgEdges[i].source;
        var target=svgEdges[i].target;
        for(var j= 0,len1=edges.length;j<len;j++){
            if(source ==edges[j].source&&target==edges[j].target){
                edges[j].assists=svgEdges[i].assists;
                break;
            }
        }
    }
    for(var key in svgNodes){
        if(nodes[key]){
            nodes[key].x = svgNodes[key].x;
            nodes[key].y = svgNodes[key].y;
        }

    }
}
function getSVGData(svg){
    var svgNodes={};
    var svgEdges=[];
    svg.selectAll('g')
        .each(function(){
            var thisElem=d3.select(this);
            var thisClass=thisElem.attr('class');
            if(thisClass=='edge'){
                var edge={};
                var edgeValue=thisElem.select('title').text();
                edge.source=parseInt(edgeValue.split('->')[0]);
                edge.target=parseInt(edgeValue.split('->')[1]);
                edge.assists=[];
                var d=thisElem.select('path').attr('d').split('M')[1];
                var firstPoint=d.split('C')[0];
                var point=[];
                point[0]=parseFloat(firstPoint.split(',')[0]);
                point[1]=parseFloat(firstPoint.split(',')[1]);
                edge.assists.push(point);
                var otherPoints=d.split('C')[1].split(' ');
                for(var i= 0,len=otherPoints.length;i<len;i++){
                    var tmpPoint=[];
                    tmpPoint[0]=parseFloat(otherPoints[i].split(',')[0]);
                    tmpPoint[1]=parseFloat(otherPoints[i].split(',')[1]);
                    edge.assists.push(tmpPoint);
                }
                svgEdges.push(edge);

            }
            else if(thisClass=='node'){
                var node={};
                var nodeValue=thisElem.select('title').text();
                node.id=nodeValue;
                node.x=parseFloat(thisElem.select('ellipse').attr('cx'));
                node.y=parseFloat(thisElem.select('ellipse').attr('cy'));
                svgNodes[nodeValue]=node;
            }
        })
    return {svgNodes:svgNodes,svgEdges:svgEdges};
}