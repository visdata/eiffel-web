
function jump(){
    var inputText=$('input[name="Text"]').val();
    inputText = inputText.replace(/[\-|\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,"");
    inputText=inputText.toLowerCase();
    window.location="result.html?searchname="+inputText;
}
function getUrlParam(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r!=null) return unescape(r[2]); return null; //返回参数值
}
function init(){
    px='px';
    var usefulWidth= window.innerWidth
        ||document.body.clientWidth
        || document.documentElement.clientWidth;
    var usefulHeight = document.body.clientHeight
        || document.documentElement.clientHeight
        || window.innerHeight;
    var body=d3.select('body');
    var bodyDiv=body.append('div').attr('class','bodyDiv')
        .styles({
            'border':'1px solid rgb(50,70,90)',
            width:usefulWidth+px,
            height:usefulHeight+px
        });
    body.append('span').attr('id','ruler').attr('class','ruler');
    initServer();
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
            'margin-top':50+px
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
//                    onkeydown:'keyboardEvent(event.keyCode||event.which);',
            id:'echoText',
            name:'Text'
//                    AUTOCOMPLETE:'on'
        })
        .styles({
            border:0+px,
            padding:10+px,
            width:(inputWidth-20)+px,
            height:(inputHeight-20)+px
        })
        .on('keydown',function(d){
            if(event.keyCode==13)jump();
//            console.log(event)
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
    var searchName=getUrlParam('searchname');
    var input=$('input[name="Text"]');
    input.val(searchName);
    if(searchName!=''){
        var url='http://'+server+':'+port+'/searchWords/';
//            var url='http://'+'127.0.0.1'+':'+3000+'/searchWords';
        var success=function(d){
            console.log(d);
//
            pageLayout(d.list);
        };
        var searchData={searchStr:searchName,source:'aminerV8'};
        console.log(searchName);
        console.log(searchData);
        ajax(url,success,searchData);
    }
    function pageLayout(list){
        var paperList=list;
        list.forEach(function(paper,i){
            if(paper.id==1182989){
                var t=list[0];
                list[0]=list[i];
                list[i]=list[0];
            }
        });
        var paperListDiv=bodyDiv.append('div')
            .attrs({
                class:'paperListDiv'
            })
            .styles({
                height:'auto',
                width:'50%',
                'margin-top':20+px,
                'margin-left':(usefulWidth-formWidth)/2+px
            });
        paperListDiv.selectAll('whatever')
            .data(paperList)
            .enter()
            .append('div')
            .styles({
                'margin-top':'15px'
            })
            .each(layoutPapers);
    }

}
function paperClick(d){
    d3.select(this)
        .style('color','red')
    var id= d.id;
    var link='graph.html?aminerV8_id='+ id+'&selected=aminerV8'+'&r='+Math.floor(Math.random()*1000000000+1);
    window.open(link);
}
init();