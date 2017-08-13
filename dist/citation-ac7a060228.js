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
initServer();
var body=d3.select('body');
var bodyDiv=body.append('div').attr('class','bodyDiv')
    //            .attrs({
    //                onkeydown:'keyboardEvent(event.keyCode||event.which);'
    //            })
    .styles({
//                'border':'1px solid rgb(50,70,90)',
        width:usefulWidth+px,
        height:usefulHeight+px
    });
body.append('span').attr('id','ruler').attr('class','ruler');

var paperTitle=getUrlParam('title');
var paperID=getUrlParam('id');
var source=getUrlParam('source');
var action=getUrlParam('action');
//    var text='Paper List of '+venue;
var texts;
if(action=='s')texts=['Papers Directly Influenced by: ',paperTitle];
else if(action=='all')texts=['Papers Directly and Indirectly Influenced by: ',paperTitle];
else texts=['Citing List of: ',paperTitle];
var titleData={
    class:'title',
    texts:texts,
    size:'30',
    family:'Arial',
    top:'100',
    color:'white'
};

//    titleData['left']=(usefulWidth-titleData.text.visualLength(titleData.family,titleData.size))/2
titleData['left']=200;
console.log(titleData);
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
            });
        d3.select(this)
            .append('text')
            .attrs({
                class: d.class+'Text'
            })
            .styles({
                'font-size': d.size+px,
                'font-family': d.family,
                'color': d.color
            })
            .html(d.texts[0]);
        d3.select(this)
            .append('text')
            .attrs({
                class: d.class+'Text'
            })
            .styles({
                'font-size': d.size+px,
                'font-family': d.family,
                'color': d.color
            })
            .html(d.texts[1])
            .on('click',function(d){
                var url='graph.html?';
                var source='aminerV8';
                url+=source+'_id='+ d.id+'&';
                url+='selected='+source;
                url+='&r='+Math.floor(Math.random()*1000000000+1);
                window.open(url);
            })
    });
var url='http://'+server+':'+port+'/influencedPapers';
//    var url='http://'+'127.0.0.1'+':'+3000+'/searchPapers';
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
var data={id:paperID,source:source,action:action};
ajax(url,success,data);