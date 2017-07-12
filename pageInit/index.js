

function getUrlParam(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r!=null) return unescape(r[2]); return null; //返回参数值
}
//    var r=getUrlParam('r');
//    if(!r)window.location='index.html?r='+Math.floor(Math.random()*1000000000+1);
function Submit(e)
{
    if(e ==13)
    {
        jump();
    }
}
function jump(){
    window.location='result.html?searchname='+$('input[name="Text"]').val()+'&r='+Math.floor(Math.random()*1000000000+1);
}
var px='px';
var usefulWidth= window.innerWidth
    ||document.body.clientWidth
    || document.documentElement.clientWidth;
var usefulHeight = document.body.clientHeight
    || document.documentElement.clientHeight
    || window.innerHeight;
initServer();
//var scrollLength=18;
//usefulWidth-=scrollLength;
//console.log(usefulHeight);
var body=d3.select('body');
var bodyDiv=body.append('div').attr('class','bodyDiv')
    //        .attrs({
    //            onkeydown:'keyboardEvent(event.keyCode||event.which);'
    //        })
    .styles({
        'border':'1px solid rgb(50,70,90)',
        width:usefulWidth+px,
        height:usefulHeight+px
    });
body.append('span').attr('id','ruler').attr('class','ruler');

var fontSize=50;
var fontFamily='Arial';
var fontWeight='bold';
var text='E I F F E L';
d3.select('.ruler').styles({
    'font-weight':fontWeight
});
var textWidth=text.visualLength(fontFamily,fontSize);
var textHeight=text.visualHeight(fontFamily,fontSize);
var textMarginInput=usefulHeight*0.03;
var inputWidth=570;
var inputHeight=40;
var buttonWidth=60;
var buttonHeight=40;
var formWidth=634;
var formHeight=inputHeight;

var indexNameDiv=bodyDiv.append('div').attr('class','indexNameDiv')
    .styles({
        'width':textWidth+px,
        'height':textHeight+px,
        'border':'0px solid #000000',
        'margin-left':(usefulWidth-textWidth)/2+px,
        'margin-top':(usefulHeight-40)/2-textMarginInput-textHeight-18+px
//            'margin-top':'100px'
    })
    .append('text').attr('class','indexName')
    .html(text)
    .styles({
        'font-size':fontSize+px,
        'font-family':fontFamily,
        'font-weight':fontWeight,
        'color':'white'
    });
//var indexMainDiv=bodyDiv.append('div').attr('class','indexMain');
//console.log((usefulHeight-inputHeight)/2-textHeight-textMarginInput);
var form=bodyDiv.append('div').attr('class','inputForm').attr('autocomplete','on')
    .styles({
        'width':formWidth+px,
        'height':formHeight+px,
        'margin-left':(usefulWidth-formWidth)/2+px,
        'margin-top':textMarginInput+px
    });

var input=form.append('div').attr('class','inputDiv')
    .styles({
        width:inputWidth+px,
        height:inputHeight+px,
        background:'white'
    })
    .append('input')
    .attrs({
        class:'indexInputBox',
        type:'text',
//            onkeydown:'keyboardEvent(event.keyCode||event.which);',
        id:'echoText',
        name:'Text',
        autocomplete:'on'
    })
    .on('keydown',function(d){
        if(event.keyCode==13)jump();
//            console.log(event)
    })
    .styles({
        border:0+px,
        padding:10+px,
        width:(inputWidth-20)+px,
        height:(inputHeight-20)+px
    });
var button=form.append('div').attr('class','inputButton').append('input')
    .attrs({
//            src:'image/search.png',
        type:'submit',
        class:'indexSubmitButton',
        id:'indexSubmitBtn',
        name:'submitBtn',
        onclick:"jump()",
        target:"view_window",
        value:''
    })
    .styles({
        border:0+px,
        padding:0+px,
        'background':'url(image/search.png)',
        'width':buttonWidth+px,
        'height':buttonHeight+px
//            'margin-top':'100px'
    });
//    var paperTypeHeight=
var paperTypeDiv=bodyDiv.append('div')
    .attrs({
        class:'paperTypeDiv'
    })
    .styles({
        'width':formWidth*2+px,
        'height':formHeight+px,
        'margin-left':(usefulWidth-formWidth*2)/2+px,
        'margin-top':textMarginInput+px
    });
var paperField=[{text:'Visualization',field:'vis'}];
var textFont=18;
var textFontFamily='Arial';
paperTypeDiv.selectAll('whatever')
    .data(paperField)
    .enter()
    .append('div')
    .attr('class','visualization')
    .styles({
        cursor:'pointer',
        'margin-left':function(d){return (formWidth*2- 'Visualization Venues: TVCG, CGF, IEEE VIS, CG&A, InfoVis, ...'.visualLength(textFontFamily,textFont))/2+px;}
    })
    .append('text')
    .styles({
        float:'left',
        color:'white',
        'font-size':textFont+px,
        'font-family':textFontFamily
    })
    .on('click',function(d){
        window.open('venuelist.html?field='+d.field)
    })
    .html(function(d){return d.text+' Venues:&nbsp;'});
var venueList=[
    {text:'TVCG',venue:'IEEE Transactions on Visualization and Computer Graphics',id:1},
    {text:'CG&A',venue:'Computer Graphics and Applications',id:17},
    {text:'IEEE VIS',venue:'IEEE VIS',id:9},
    {text:'VAST',venue:'Visual Analytics Science and Technology',id:0},
    {text:'InfoVis',venue:'InfoVis',id:11}
];
var moreVenueList=[
    {text:'CG&A',venue:'CG&A'},
    {text:'InfoVis',venue:'InfoVis'},
    {text:'IEEE Visualization',venue:'IEEE Visualization'},
    {text:'VAST',venue:'Visual Analytics Science and Technology'},
];
paperTypeDiv.selectAll('whatever')
    .data(venueList)
    .enter()
    .append('div')
    .styles({
        cursor:'pointer',
//                'margin-left':function(d){return (formWidth- d.text.visualLength(textFontFamily,10))/2+px;}

    })
    .each(function(d,i){
        d3.select(this).append('text')
            .styles({
                float:'left',
                color:'white',
                'font-size':18+px,
                'font-family':textFontFamily
            })
            .on('click',function(d){
                window.open('venuepapers.html?venue='+d.venue+'&id='+d.id)
            })
            .html(function(d){return d.text});
        if(i!=4){
            d3.select(this).append('text')
                .styles({
                    float:'left',
                    color:'white',
                    'font-size':18+px,
                    'font-family':textFontFamily
                })
                .html(',&nbsp;')
        }
        else{
            d3.select(this).append('text')
                .attrs({
                    class:'more'
                })
                .styles({
                    cursor:'pointer',
                    float:'left',
                    color:'white',
                    'font-size':18+px,
                    'font-family':textFontFamily
                })
                .html(', ...')
                .on('click',function(){
                    window.open('venuelist.html?field=vis');
                })
        }

    });
