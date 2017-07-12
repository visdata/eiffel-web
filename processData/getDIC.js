//function getEdgeSourceTargetDic(edges){
//    var dic={};
//    for (var i= 0,len=edges.length;i<len;i++){
//        var source=edges[i].source;
//        var target=edges[i].target;
//        if(dic[source]){
//            dic[source][target]=edges[i];
//        }
//        else{
//            dic[source]={}
//            dic[source][target]=edges[i];
//        }
//    }
//    return dic;
//}
function getNodeDic(nodes){
    var dic={};
    for(var i= 0,len=nodes.length;i<len;i++){
        var key=nodes[i].oldKey
        dic[key]=nodes[i];
    }
    return dic;
}