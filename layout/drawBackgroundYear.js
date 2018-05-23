function drawBackgroundYear(transition){
//    var initX=300;
//    var initY=250;
    var dataSourceVisibility=this.dataSourceVisibility;
    var focusedID=this.focusedID;
    var time_g=this.time_g;
    var yearFilter=this.yearFilter;
    var animateMode=this.animateMode;
    var minYear=this.minYear;
    var maxYear=this.maxYear;
    var initX=30;
    var initY=30;
    var family='Arial';
    var size='30';
    var weight='bold';
    var color='grey';
    var textValue;
    if(focusedID.split('_')[0]=='twitter'){
        var july='July';
        var julyLen=july.visualLength(family,size);
        time_g.append('text')
            .attrs({
                class:'july',
                x:initX,
                y:initY
            })
            .styles({
                'font-size':size,
                'font-family': family,
                'font-weight':weight,
                'fill':color
            })
            .html(july)
        initX+=julyLen+20;

//        textValue=['July'+yearFilter[0]+' ',' - ',' July'+yearFilter[1]];
    }
//    else{
        textValue=[String(yearFilter[0]),' - ',String(yearFilter[1]-1)];
//    }
    var textData=[
        {
            type:'leftYear',
            value:textValue[0],
            x:initX,
            y:initY,
            size:size,
            family:family,
            weight:weight,
            color:color
        },
        {
            type:'middleText',
            value:textValue[1],
            x:initX+textValue[0].visualLength(family,size),
            y:initY,
            size:size,
            family:family,
            weight:weight,
            color:color
        },
        {
            type:'rightYear',
            value:textValue[2],
            x:initX+textValue[0].visualLength(family,size)+textValue[1].visualLength(family,size),
            y:initY,
            size:size,
            family:family,
            weight:weight,
            color:color
        }
    ];
    var yearLength='2000-2000'.visualLength(family,size);
    var yearHeight='2000-2000'.visualHeight(family,size);
    var sourceText=this.sourceTextDic[this.source];
    var sourceLength=sourceText.visualLength(family,size);
    var sourceX=initX+yearLength/2-sourceLength/2;
    var sourceY=initY+yearHeight+5;

    if(transition){
        if(animateMode==flipBook){
            time_g.select('.rightYear')
                .html(function(d){

                    if(yearFilter[1]==maxYear&&yearFilter[0]==minYear){
                        d.value=String(minYear);
                    }
                    else{
                        d.value=String(yearFilter[0]-1);
                    }
                    return d.value;
                })
                .transition()
                .ease(d3.easeLinear)
                .delay(1000)
                .duration(function(d){
                    if(yearFilter[1]==maxYear&&yearFilter[0]==minYear){
                        return 2000*(maxYear- minYear)
                    }
                    else{
                        return 2000*(maxYear- yearFilter[0])
                    }

                })
                .tween("text", function() {
                    var that = d3.select(this);
                    if(yearFilter[1]==maxYear&&yearFilter[0]==minYear){
                        var i = d3.interpolateRound(minYear, maxYear);
                        return function(t) {
                            that.text(i(t));
                        };
                    }
                    else{
                        var i = d3.interpolateRound(yearFilter[0]-1, maxYear);
                        return function(t) {
                            that.text(i(t));
                        };
                    }
                })
        }
        else{

        }
    }
    else{
        time_g.selectAll('*')
            .each(function(d){
                if(d3.select(this).attr('class')!='july'){
                    d3.select(this).remove()
                }
            });
        time_g.append('text')
            .styles({
                'font-family':family,
                'font-size':size,
                'font-weight':weight,
                fill:color,
                visibility:dataSourceVisibility
            })
            .attrs({
                class:'dataSource',
                x:sourceX,
                y:sourceY
            })
            .html(sourceText);
        time_g.selectAll('whatever')
            .data(textData)
            .enter()
            .append('text')
            .each(function(d){
                d3.select(this)
                    .attrs({
                        class:d.type,
                        x:d.x,
                        y:d.y
                    })
                    .styles({
                        'font-size':d.size,
                        'font-family': d.family,
                        'font-weight':d.weight,
                        'fill':d.color
                    })
                    .html(d.value)
            })

    }

}