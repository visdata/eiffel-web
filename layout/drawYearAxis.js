function drawYearAxis(d){
    var axisSVG=this.axisSVG;
    var that=this;
    var svg=this.svg;
    var width=parseFloat(axisSVG.style('width'));
    var height=parseFloat(axisSVG.style('height'));
    var nodeYearData=d;
    var padding=30;

    var dataSet=d.data;
    var maxYear=d.maxYear;
    var minYear=d.minYear;
    var maxCount=d.maxCount;
    var minCount=d.minCount;
    var animateMode=this.animateMode;
    this.xScale = d3.scaleLinear()
        .domain([minYear,maxYear])
        .range([padding,width-padding]);

    this.yScale = d3.scaleLinear()
        .domain([0,maxCount])
        .range([(height-padding),padding]);
    var xScale=this.xScale;
    var yScale=this.yScale;
    this.xAxis=d3.axisBottom(xScale);
    this.yAxis=d3.axisLeft(yScale).ticks(3);

    var xAxis=this.xAxis;
    var yAxis=this.yAxis;
    var axisG=axisSVG.append("g")
        .attr("class","axis")
        .call(xAxis)
        .attr("transform","translate(0,"+(height-padding)+")")
        .append("text")
        .attr("transform","translate("+(height-padding)+",0)");//指定坐标轴说明的坐标
    var yearSliderDuration=(maxYear-minYear)*2000;

    var timeCircleData=[
        {
            x:xScale(minYear),
            y:yScale(0),
            r:7,
            minYear:minYear,
            maxYear:maxYear,
            id:'leftAxisCircle',
            transitionX:xScale(minYear),
            duration:yearSliderDuration,
            rBig:12,
            filter:'url(#leftOrRight_filter)',
            index:0
        },
        {
            x:xScale(maxYear),
            y:yScale(0),
            r:7,
            minYear:minYear,
            maxYear:maxYear,
            id:'rightAxisCircle',
            transitionX:xScale(maxYear),
            duration:yearSliderDuration,
            rBig:12,
            filter:'url(#leftOrRight_filter)',
            index:0
        }];


    this.preYearPath=false;
    this.drawNodeYearDataSet(dataSet,'yearPath');
    axisSVG.selectAll('text')
        .styles({
            'fill':color.axisTickColor,
            'font-family':'Arial',
            'font-weight':'bold'
        })
    axisSVG.selectAll('line')
        .styles({
            stroke:color.axisColor
        });
    axisSVG.select('.axis').select('path')
        .styles({
            fill:'none',
            stroke:color.axisColor
        });

    this.yearSliderDrag = d3.drag()
        .subject(function(d) { return d; })
        .on('drag', yearSliderDragMove)
        .on('start', yearSliderDragStart)
        .on('end', yearSliderDragEnd);
    axisSVG.selectAll('axisCircle').data(timeCircleData).enter()
        .append('circle')
        .attrs({
            id:function(d){return d.id;},
            class:'axisCircle',
            cx:function(d){return d.x},
            cy:function(d){return d.y},
            r:function(d){return d.r}
        })
            .style('filter',function(d,i){

            return d.filter
        })
        .style('visibility',function(d,i){
            if(animateMode==flipBook){
                if(i == 0){
                    return 'hidden'
                }
                else{
                    return 'visible';
                }
            }
        })
        .style('cursor','hand')
        .each(function(d){
            d.that=that;
        })
        .call(this.yearSliderDrag)
        .on('click',function(){
            console.log('clicked')
//            var thisNode=d3.select(this)
//                .duration(100)
//                .ease('linear')
//                .attr('fill',)
        })
        .on('dblclick',function(d){
            var left=axisSVG.select('')
        })

        .on('mouseover',function(){
            var thisNode=d3.select(this);
            thisNode.transition()
                .duration(100)
                .ease(d3.easeLinear)
                .attr('r',function(d){return d.rBig})
//                .style('filter','url(#leftOrRight');
        })
        .on('mouseout',function(){
            var thisNode=d3.select(this);
            var t=d3.transition().duration(100).ease(d3.easeLinear);
            thisNode.transition(t)
                .attr('r',function(d){return d.r})
//                .style('filter','url(#pause');
        })



    this.yearPosition={};
    for(var year=minYear;year<=maxYear;year++){
        this.yearPosition[year]=[xScale(year-0.5),xScale(year+0.5)]
    }

}

function yearAxisTransition(start,end,that){

    var axisSVG=that.axisSVG;
    var animateMode=that.animateMode;
    var xScale=that.xScale;
    var yScale=that.yScale;
    var minYear=that.minYear;
    var maxYear=that.maxYear;
    var transitionFlag=that.transitionFlag;
    var yearFilter=that.yearFilter;
//  var len=arguments.length;
    axisSVG.select('#leftAxisCircle')
        .attrs({
            cx:function(d){
                if(animateMode==flipBook){
//                    if(len>0){
                    d.x=xScale(minYear)
                    return xScale(minYear);
//                    }
//                    else return d.x;
                }
                else{
                    d.x=xScale(start)
                    return xScale(start)
                }
            }
        })
        .transition()
        .ease(d3.easeLinear)
        .duration(function(d){
            if(animateMode==flipBook){
//                if(len>0){
                    return (end-start)*2000;
//                }
//                else return d.duration;
            }
            else{
                return (end-start)*2000;
            }

        })
        .attrs({
            cx:function(d){
                if(animateMode==flipBook){
                    d.x=xScale(minYear)
                    return xScale(minYear);
                }
                else{
                    d.x=xScale(start)
                    return xScale(start)
                }
            }
        });
    axisSVG.select('#rightAxisCircle')
        .attrs({
            cx:function(d){
                if(animateMode==flipBook){
                    d.x = xScale(start);
                    return xScale(start);
                }
                else{
                    d.x = xScale(end);
                    return xScale(end)
                }
            }
        })
        .transition()
        .ease(d3.easeLinear)
        .duration(function(d){
            return (end-start)*2000;
        })
        .attrs({
            cx:function(d){
                d.x = xScale(end);
                return xScale(end)
            }
        })
        .on('end',function(){
            console.log(1);
            transitionFlag=false;
            yearFilter=[minYear,maxYear];
            var button=axisSVG.select('.controlButton');
            if(button.attr('id')=='pause'){
                var name=button.attr('name');
                changeFilter(button,name);
            }
        });

}
function drawNodeYearDataSet(dataSet,pathClass){
    var axisSVG=this.axisSVG;
    var svg=this.svg;
    var xScale=this.xScale;
    var yScale=this.yScale;
    function yearPathClick(d){
        axisSVG.selectAll('.subYearPath').remove();
        var thisPath=d3.select(this);
        var thisClass=thisPath.attr('class');
        var year=thisPath.attr('year');
        var nodes=d3.selectAll('.node');

        if(thisClass=='yearPath clicked'){

            nodes.each(function(){
                var thisNode=d3.select(this);
                var years=thisNode.attr('year').split('_');
                var yearsDic={};
                var sum=0
                for(var i=0;i<years.length;i++){
                    var nodeYear = years[i].split('-')[0];
                    var num= parseInt(years[i].split('-')[1]);
                    yearsDic[nodeYear]=num;
                    if(num)sum+=num
                }
                if(year in yearsDic){
                    var ratio=yearsDic[year]/sum;
                    var id=thisNode.attr('id').split('e')[1];
                    thisNode.style('fill',function(d){return "url(#linearGradient"+ d.id+")"});
                    var linearGradient=svg.select('#linearGradient'+id)
                    linearGradient.selectAll('stop')
                        .each(function(d,i){
                            var thisStop=d3.select(this);
                            var curOffset=parseFloat(thisStop.attr('offset'));
                            curOffset-=ratio;
                            if(i==1){
                                thisStop.attr('offset',curOffset);
                            }
                            else if(i==2){
                                thisStop.attr('offset',curOffset);
                            }
                        })


                }


            });
            thisPath.attr('class','yearPath');
            thisPath.style('fill',color.yearPathColor);
//                    thisPath.style('stroke','none');


        }
        else if(thisClass=='yearPath'){
            nodes.each(function(){
                var thisNode=d3.select(this);
                var years=thisNode.attr('year').split('_');
                var yearsDic={};
                var sum=0
                for(var i=0;i<years.length;i++){
                    var nodeYear = years[i].split('-')[0];
                    var num= parseInt(years[i].split('-')[1]);
                    yearsDic[nodeYear]=num;
                    if(num)sum+=num
                }
                if(year in yearsDic){
                    var ratio=yearsDic[year]/sum;
                    var id=thisNode.attr('id').split('e')[1];
                    var linearGradient=svg.select('#linearGradient'+id)
                    linearGradient.selectAll('stop')
                        .each(function(d,i){
                            var thisStop=d3.select(this);
                            var curOffset=parseFloat(thisStop.attr('offset'));
                            curOffset+=ratio;
                            if(i==1){
                                thisStop.attr('offset',curOffset);
                            }
                            else if(i==2){
                                thisStop.attr('offset',curOffset);
                            }
                        })


                }


            });
            thisPath.attr('class','yearPath clicked');
            thisPath.style('fill',color.yearPathHighlightColor);
//                    thisPath.style('stroke',color.yearPathHighLightStroke);
        }
    }
    var subYearPathDataList=[[]];
    var yearPathDataList=[];
    var k=0;
    for(var i=0;i<dataSet.length-1;i++){
        var yearPathData={};
        var p1=[xScale(dataSet[i][0])-1,yScale(0)];
        var p2=[xScale(dataSet[i][0])-1,yScale(dataSet[i][1])];
        var p3=[xScale(dataSet[i+1][0]),yScale(dataSet[i][1])];
        var p4=[xScale(dataSet[i+1][0]),yScale(0)];

        if(pathClass=='subYearPath'){
            if(dataSet[i][1]!=0){
                subYearPathDataList[k].push({i:i, data:dataSet[i]});
            }
            else{
                k+=1;
                subYearPathDataList[k]=[];
            }
        }
        else{
            yearPathData.d='M'+p1[0]+','+p1[1]+' L'+p2[0]+','+p2[1] +' '+p3[0]+','+p3[1]+' '+p4[0]+','+p4[1];
            yearPathData.year = dataSet[i][0];
            yearPathData.class = pathClass;
            yearPathData.fill = color.yearPathColor;
            yearPathData.stroke = 'none';
            yearPathDataList.push(yearPathData);

        }
        var d;

    }
//    console.log(subYearPathDataList);
    var finalSubYearPathDataList=[];
    for(var i=0;i<subYearPathDataList.length;i++){
        var len=subYearPathDataList[i].length
        if(len>0) {
            var start = subYearPathDataList[i][0].i - 1;
            var end = subYearPathDataList[i][len - 1].i + 1;
            if (dataSet[start])subYearPathDataList[i] = [{data:dataSet[start],i:start}].concat(subYearPathDataList[i]);
            if (dataSet[end])subYearPathDataList[i] = subYearPathDataList[i].concat([{data:dataSet[end],i:end}]);
            finalSubYearPathDataList.push(subYearPathDataList[i]);
        }
    }
    for(var i=0;i<finalSubYearPathDataList.length;i++){
        if(finalSubYearPathDataList[i][0].i==0){
            finalSubYearPathDataList[i]=[{i:0,data:[finalSubYearPathDataList[i][0].data[0],0]}].concat(finalSubYearPathDataList[i])
        }
        if(finalSubYearPathDataList[i][finalSubYearPathDataList[i].length-1].i==dataSet.length-1){
            finalSubYearPathDataList[i]=finalSubYearPathDataList[i].concat([{i:dataSet.length-1,data:[finalSubYearPathDataList[i][finalSubYearPathDataList[i].length-1].data[0],0]}])
        }
    }
    for(var i=0;i<finalSubYearPathDataList.length;i++){
        for(var j=0;j<finalSubYearPathDataList[i].length;j++){
            var p=[xScale(finalSubYearPathDataList[i][j].data[0].toInt()),yScale(finalSubYearPathDataList[i][j].data[1])]
            finalSubYearPathDataList[i][j]=p;
        }
    }
    for(var i=0;i<finalSubYearPathDataList.length;i++){
        var subYear={};
        subYear.class = 'subYearPath';
        subYear.fill = color.yearPathHighlightColor;
        subYear.stroke = color.yearPathHighLightStroke;
        subYear.strokeWidth=2+px;
        subYear.d = '';
        if(finalSubYearPathDataList[i].length>=3){
            var tmp=finalSubYearPathDataList[i];
            subYear.d+='M'+tmp[0][0]+','+tmp[0][1]+'L'+tmp[1][0]+','+tmp[0][1]+','+tmp[1][0]+','+tmp[1][1];
            for(var j=1;j<tmp.length-1;j++){
                subYear.d+=','+tmp[j][0]+','+tmp[j][1]+','+tmp[j+1][0]+','+tmp[j][1]+','+tmp[j+1][0]+','+tmp[j+1][1];
            }
        }
        finalSubYearPathDataList[i]=subYear;
    }
//    console.log(finalSubYearPathDataList)

    if(pathClass == 'subYearPath'){
        axisSVG.selectAll('whatever')
            .data(finalSubYearPathDataList)
            .enter()
            .append('path')
            .each(function(d){
                d3.select(this)
                    .attrs({
                        d: d.d,
                        class: d.class
                    })
                    .styles({
                        fill:d.fill,
                        stroke:d.stroke,
                        'stroke-width': d.strokeWidth
                    })
            })
    }
    else{
        axisSVG.selectAll('whatever')
            .data(yearPathDataList)
            .enter()
            .append('path')
            .each(function(d){
                d3.select(this)
                    .attrs({
                        d:d.d,
                        year:d.year,
                        class:d.class
                    })
                    .styles({
                        fill: d.fill
                    })
                    .on('click',yearPathClick)
            })
    }
//    axisSVG.append('path')
//        .attr('d',d)
//        .attr('year',dataSet[i][0])
//        .attr('class',pathClass)
//        .style('fill',function(d){
//            if(pathClass=='yearPath'){
//                return color.yearPathColor;
//            }
//            else if(pathClass=='subYearPath'){
//                return color.yearPathHighlightColor;
//            }
//        })
//        .style('stroke',function(d){
//            if(pathClass=='yearPath'){
//                return 'none';
//            }
//            else if(pathClass=='subYearPath'){
//                return color.yearPathHighLightStroke;
//            }
//        })
//        .style('stroke-width','3px')
//        .on('click',yearPathClick)
    for(var i=0;i<dataSet.length;i++){
        if(pathClass!='subYearPath'){
            axisSVG.append('text')
                .attrs({
                    x:(xScale(dataSet[i][0])+xScale(dataSet[i][0]+1))/2-String(dataSet[i][1]).visualLength()/2+3,
                    y:yScale(dataSet[i][1])-2
                })
                .styles({
                    'font-size':9+px,
                    'font-family':'Arial',
                    'color':color.yearPathHighlightColor
                })
                .html(dataSet[i][1]);
        }


    }
}
