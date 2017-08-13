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
    //            .attrs({
    //                onkeydown:'keyboardEvent(event.keyCode||event.which);'
    //            })
    .styles({
//                'border':'1px solid rgb(50,70,90)',
        width:usefulWidth+px,
        height:usefulHeight+px
    });
body.append('span').attr('id','ruler').attr('class','ruler');

var field=getUrlParam('field');
var text='the Venue List of '+field;
var titleData={
    class:'title',
    text:text,
    size:'30',
    family:'Arial',
    top:'100',
    color:'white'
};
initServer();
titleData['left']=(usefulWidth-titleData.text.visualLength(titleData.family,titleData.size))/2
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

var url='http://'+server+':'+port+'/venueList/';
var venueListDiv=bodyDiv.append('div')
    .attrs({
        'class':'venueListDiv'
    })
    .styles({
        'width':usefulWidth+px,
        'height':'auto'
    });
var success=function(data){
    var list=data;
    list=list.sort(function(a,b){return b.count- a.count});
    console.log(list);
    var size='16';
    var family='Arial';
    var color='white';
    venueListDiv.selectAll('whatever')
        .data(list)
        .enter()
        .append('div')
        .style('cursor','pointer')
        .each(function(d){
            var totalText= d.venue;
//                var totalText= d.venue+'( ';
//                for(var i=0;i< 2;i++){
//                    totalText+= d.source[i].source+':'+ d.source[i].count+' ';
//                }
//                totalText+=')';
            console.log(totalText)
            d3.select(this)
                .styles({
                    'margin-left': (usefulWidth- totalText.visualLength(family,size))/2+px,
                    'margin-top': 20+px
                })
                .append('text')
                .styles({
                    'font-size':size+px,
                    'font-family':family,
                    'color':color
                })
                .on('click',function(d){
                    window.open('venuepapers.html?venue='+ d.venue+'&id='+ d.id+'&r='+Math.floor(Math.random()*1000000000+1))
                })
                //                    .html(d.venue+'(#'+ d.count+')')
                .html(totalText);
//                for (var source in d.source){
//                    console.log(source);
//                    d3.select(this)
//                            .selectAll('whatever')
//                            .data(d.source)
//                            .enter()
//                        .append('text')
//                        .styles({
//                            'font-size':size+px,
//                            'font-family':family,
//                            'color':color
//                        })
//                        .on('click',function(e){
//                            window.open('venuepapers.html?venue='+ d.venue+'&source='+ e.source)
//                        })
//                        .html(function(e){
//                            return e.source+':'+ e.count+' ';
//                        });
////                }
//                d3.select(this)
//                    .append('text')
//                    .styles({
//                        'font-size':size+px,
//                        'font-family':family,
//                        'color':color
//                    })
//                    .html(')')

        })

};
var data={field:field,source:'aminerV8'};
ajax(url,success,data);
