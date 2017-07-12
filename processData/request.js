function ajax(url,success,data) {
    console.log(url);
    console.log(data);
    $.ajax({
        url: url,
        data: data,
        async: false,
        success: success
    })
}
function requestData(){
    ids=[];
    var layers=[];
    if('left' in sourceCheckedStatus)layers.push(leftLayer);
    if('right' in sourceCheckedStatus)layers.push(rightLayer);
    layers.forEach(function(layer){
        var source=layer.source;
        var clusterCount=layer.clusterCount;
        layer.focusedID=source+'_'+clusterCount;
        //if(!(layer.focusedID in layer.data.sourceData)){
        if(source in dataID&&layer.ifLayout){
            ids.push({
                id:dataID[source],
                source:source,
                layer:layer,
                clusterCount:clusterCount
            })
        }
        //}
    });
    search(ids);
}
function search(ids){
    var requests=[];
    ids.forEach(function(item){
        var id=item.layer.focusedID;
        var data=item.layer.data;
        if(!(id in data.sourceData)||!data.sourceData[id]){
            requests.push(item);
        }
    });
    if(requests.length==0){
        //data all exist, call layout function
        ids.forEach(function(item){
            if(item.layer.ifLayout) {
                var source = item.source;
                var tmpData = {};
                clone(item.layer.data.sourceData[item.layer.focusedID], tmpData);
                item.layer.processData(tmpData);
                if (item.layer.focusedID && item.layer.preFocusedID) {
                    item.layer.layout(optionNumber, true, 'incremental', item.layer.data.postData[item.layer.focusedID]);
                }
                else {
                    item.layer.preLayout(item.layer.data.postData[item.layer.focusedID]);
                }
            }
        });
    }
    else{
        var url='http://'+server+':'+port+'/InfluenceGraph';
        var reqData=[];
        requests.forEach(function(item){
            reqData.push({
                source:item.source,
                id:item.id,
                clusterCount:item.clusterCount
            });
            item.layer.focusedID=item.source+'_'+item.clusterCount;
        });
        var success=function(d){
            if(d['error']){
                var newUrl='http://'+server+':'+errorPort+'/error';
                var errorData={
                    errorCode:1,
                    source:source,
                    errorID:searchID
                };
                var success=function(){
                    alert('The influence graph is computing in the backend');
                };
                ajax(newUrl,success,errorData);
            }
            else{
                console.log(d);
                function clearCiteseerx(graph){
                    var clusters=graph.cluster;
                    var edges=graph.edge;
                    var newClusters={};
                    var newEdges=[];
                    var yearList=[];
                    var cluster300IDList=clusters['300'].nodeidlist;
                    var mYear=1980;

                    for(var y in cluster300IDList){
                        if(y&&parseInt(y)>mYear)mYear=parseInt(y);
                    }
                    for(var key in clusters){
                        var idYearDic=clusters[key].nodeidlist;
                        var newDic={};
                        for(var year in idYearDic){
                            if(year&&parseInt(year)>=mYear){
                                yearList.push(parseInt(year));
                                newDic[year]=idYearDic[year];
                            }
                        }
                        var flag=false;
                        for(var k in newDic){
                            flag=true;
                            break;
                        }
                        if(flag){
                            newClusters[key]=clusters[key];
                            newClusters[key].nodeidlist=newDic;
                        }
                        else{
                            console.log('cluster '+key+' year is error');
                        }

                    }
                    //console.log(yearList)
                    if(!('300' in newClusters)){
                        var cluster300=clusters[300];
                        var minYear=d3.min(yearList);
                        var id=cluster300.nodeidlist[''][0];
                        var yearKey=String(minYear-1);
                        cluster300.nodeidlist={};
                        cluster300.nodeidlist[yearKey]=[id];
                        newClusters['300']=cluster300;
                    }
                    edges.forEach(function(edge){
                        var source=edge.source;
                        var target=edge.target;
                        if((source in newClusters)&&(target in newClusters)){
                            newEdges.push(edge);
                        }
                    });

                    //fix year data
                    //citeseerx year should <=2014
                    for(var clusterID in graph.cluster){
                        var newIDList={};
                        for(var year in graph.cluster[clusterID].nodeidlist){
                            if(parseInt(year)>2014){
                                //console.log(year);
                                if(!('2014' in newIDList))newIDList[String(2014)]=[];
                                newIDList[String(2014)]=newIDList[String(2014)].concat(graph.cluster[clusterID].nodeidlist[year]);
                            }
                            else{
                                newIDList[year]=graph.cluster[clusterID].nodeidlist[year];
                            }
                        }
                        graph.cluster[clusterID].nodeidlist=newIDList;
                    }
                    graph.edge.forEach(function(edge){
                        var newWeight={};
                        for(var key in edge.weight){
                            var sourceYear=key.split('_')[0];
                            var targetYear=key.split('_')[1];
                            if(parseInt(sourceYear)>=2014)sourceYear=2014;
                            if(parseInt(targetYear)>=2014)targetYear=2014;
                            var newKey=sourceYear+'_'+targetYear;
                            if(!(newKey in newWeight))newWeight[newKey]=0;
                            newWeight[newKey]+=edge.weight[key];
                        }
                        edge.weight=newWeight;
                    });

                    graph.cluster=newClusters;
                    graph.edge=newEdges;
                }
                function addFrequencyKeywords(graph){
                    var clusters=graph.cluster;
                    for(var key in clusters){
                        if(!('frequencyKeywords' in clusters[key])){
                            clusters[key].frequencyKeywords=['none','none','none'];
                        }
                    }
                }
                //console.log(d.citeseerx);
                for(var key in d){
                    if(key.split('_')[0]=='citeseerx'){
                        clearCiteseerx(d[key]);
                    }
                    addFrequencyKeywords(d[key]);
                }
                //if(d.citeseerx){
                //    clearCiteseerx(d.citeseerx);
                //
                //}
                //console.log(d.citeseerx);
                ids.forEach(function(item,i){
                    //if(i==1)return;
                    var source=item.source;
                    if(source=='aminerV8')item.layer.sourceText='AMiner';
                    else if(source=='citeseerx')item.layer.sourceText='CiteseerX';
                    var tmpData={};
                    item.layer.source=item.source;
                    var focused=item.source+'_'+item.clusterCount;
                    item.layer.focusedID=focused;
                    var data=item.layer.data;
                    if(data.sourceData[focused]){
                        clone(data.sourceData[focused],tmpData);
                    }
                    else{
                        clone(d[source+'_'+item.clusterCount],tmpData);
                        item.layer.data.sourceData[item.layer.focusedID]= d[source+'_'+item.clusterCount];
                    }
                    if(item.layer.ifLayout){
                        item.layer.processData(tmpData);
                        if(item.layer.focusedID&&item.layer.preFocusedID){
                            item.layer.layout(optionNumber,true, 'incremental',item.layer.data.postData[item.layer.focusedID]);
                        }
                        else{
                            item.layer.preLayout(item.layer.data.postData[item.layer.focusedID]);
                        }
                    }


                });
            }
        };
        ajax(url,success,{data:reqData});
    }
}
function FSubmit(e){
    if(e ==13){
        search();
    }
}
function getUrlParam(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r!=null) return unescape(r[2]); return null; //返回参数值
}

