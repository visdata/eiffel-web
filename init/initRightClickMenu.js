function initRightClickMenu(){
    var clear=function(){
        d3.select('.rightClickMenu')
            .styles({
                visibility:'hidden'
            });
        d3.selectAll('.clicked')
            .each(function(d){
                if(d.self){
                    d.self.style('fill',function(d){return "url(#linearGradient"+ d.id+")"});
                    d.self.style('stroke',color.nodeHighlightStroke);
                    d.self.style('stroke-width','0px');
                    d.self.attr('class','node');
                    d.clicked=false;
                }

            })
        d3.selectAll('.subYearPath').remove();
        if(data.postData[focusedID].subNodeYearData){
            var subNodeYearData=data.postData[focusedID].subNodeYearData;
            for (var i=0;i<subNodeYearData.length;i++){
                subNodeYearData[i][1]=0;
            }
        }
    }
    var commonMenuList=[
        {
            text:'clear all highlight effects',
            id:0,
            click:clear
        }

    ];
    var menuDiv=d3.select('body')
        .append('div')
        .attr('class','rightClickMenu')
        .styles({
            position:'fixed',
            visibility:'hidden',
            width:'auto',
            height:'auto'
//            left:'500px',
//            top:'500px'
        });
    menuDiv.selectAll('whatever')
        .data(commonMenuList)
        .enter()
        .append('div')
        .on('mouseover',function(d){
            d3.select(this)
                .styles({
                    background:'blue'
                })
            d3.select(this)
                .select('text')
                .styles({
                    color:'white'
                })
        })
        .on('mouseout',function(d){
            d3.select(this)
                .styles({
                    background:'white'
                })
            d3.select(this)
                .select('text')
                .styles({
                    color:'black'
                })
        })
        .attr('style','cursor: pointer; fill: rgb(0, 0, 0);')
        .styles({
            background:'white'
        })
        .attrs({
            class:'menuOption'
        })
        .append('text')
        .styles({
            'font-family':'Arial',
            'color':'black'
        })
        .html(function(d){
            return d.text;
        })
        .on('click',function(d){
            return d.click();
        })

    document.oncontextmenu = function(e){
        if(window.event) e = window.event;
        console.log(e.clientX,e.clientY);
        d3.select('.rightClickMenu')
            .styles({
                visibility:'visible',
                top:e.clientY+px,
                left:e.clientX+2+px
            });
        return false;
    }
}