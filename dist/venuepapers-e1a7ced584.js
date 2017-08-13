//import {server,port,errorPort} from '../setting/server';
//import {layoutPapers} from '../searchInteraction/layout';
//import {ajax} from '../processData/request';
function getUrlParam(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r!=null) return unescape(r[2]); return null; //返回参数值
}
var px='px';
var usefulWidth= window.innerWidth
    ||document.body.clientWidth
    || document.documentElement.clientWidth;
var usefulHeight = document.body.clientHeight
    || document.documentElement.clientHeight
    || window.innerHeight;
var body=d3.select('body');
var bodyDiv=body.append('div').attr('class','bodyDiv')
    .styles({
        width:usefulWidth+px,
        height:usefulHeight+px
    });
body.append('span').attr('id','ruler').attr('class','ruler');
var venue=getUrlParam('venue');
var venueID=getUrlParam('id');
var text='Paper List of '+venue;
initServer();
var titleData={
    class:'title',
    text:text,
    size:'30',
    family:'Arial',
    top:'100',
    color:'white'
};
titleData['left']=200
console.log(titleData)
bodyDiv.append('div')
    .datum(titleData)
    .each(function(d){
        d3.select(this)
            .attrs({
                class: d.class+'Div'
            })
            .styles({
                'margin-left': d.left+px,
                'margin-top': d.top+px
            })
            .append('text')
            .attrs({
                class: d.class+'Text'
            })
            .styles({
                'font-size': d.size+px,
                'font-family': d.family,
                'color': d.color
            })
            .html(d.text)
    });
var url='http://'+server+':'+port+'/searchPapers/';
var paperListDiv=bodyDiv.append('div')
    .attrs({
        'class':'paperListDiv'
    })
    .styles({
        'margin-left':titleData.left+px,

        'width':'70%',
        'height':'auto'
    });
var success=function(data){
    var list=data;
    list=list.sort(function(a,b){return b.citation- a.citation});
    console.log(list);
    paperListDiv.selectAll('whatever')
        .data(list)
        .enter()
        .append('div')
        .styles({
            'margin-top':'15px'
        })
        .each(layoutPapers);
};
var data={venueID:venueID,source:'aminerV8'};
ajax(url,success,data);
