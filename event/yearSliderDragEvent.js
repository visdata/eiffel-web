function yearSliderDragMove(d){
    var that= d.that;
    var data=that.data;
    var animateMode=that.animateMode;
    var xScale=that.xScale;
    var yScale=that.yScale;
    var axisSVG=that.axisSVG;
    var focusedID=that.focusedID;
    var nodeYearData=data.postData[focusedID].nodeYearData;
    var maxYear=nodeYearData.maxYear;
    var minYear=nodeYearData.minYear;
    if(animateMode==flipBook){
        d.x=d3.event.x;
        var thisNode=d3.select(this);
        if(thisNode.attr('id')=='leftAxisCircle'){
            if(d.x>=xScale(minYear)&&d.x<=parseFloat(axisSVG.select('#rightAxisCircle').attr('cx'))){
                thisNode.attr('cx',d.x);
            }
        }
        else{
            if(d.x>=parseFloat(axisSVG.select('#leftAxisCircle').attr('cx'))&& d.x<=xScale(maxYear)){
                thisNode.attr('cx',d.x);
            }
        }
    }
    else if(animateMode='movie'){
        var thisObj=d3.select(this);
        var rightAxisCircle=axisSVG.select('#rightAxisCircle');
        var leftAxisCircle=axisSVG.select('#leftAxisCircle');
        var movieSlider=axisSVG.select('.movieSlider');
        var rx=parseFloat(rightAxisCircle.attr('cx'));
        var lx=parseFloat(leftAxisCircle.attr('cx'));
        var dx=d3.event.dx;
        var id=thisObj.attr('id');
        if((id == 'rightAxisCircle'&& rx<=xScale(maxYear)) && rx>=lx&&lx!=rx||(id == 'leftAxisCircle'&& lx>=xScale(minYear)&&lx<=rx&&lx!=rx)){
            if(thisObj.attr('class')!='movieSlider'){
                thisObj
                    .attrs({
                        cx:function(d){
                            d.x = d.x+dx;
                            return d.x;
                        }
                    });
                if(id == 'leftAxisCircle'){
                    movieSlider.attrs({
                        d:function(d){
                            d.p1.x+=dx;
                            return yearSliderPathData(d);
                        }
                    })
                }
                else{
                    movieSlider.attrs({
                        d:function(d){
                            d.p2.x+=dx;
                            return yearSliderPathData(d);
                        }
                    })
                }

            }
        }
        else if(id =='movieSlider'||lx == rx){
            if(lx>=xScale(minYear)&&rx<=xScale(maxYear)){
            axisSVG.selectAll('.axisCircle')
                .attrs({
                    cx:function(d){
                        d.x = d.x+dx;
                        return d.x;
                    }
                });
                movieSlider.attrs({
                    d:function(d){
                        d.p1.x+=dx;
                        d.p2.x+=dx;
                        return yearSliderPathData(d);
                    }
                })
            }
        }


    }
}
function yearSliderDragStart(d){
//    var thisNode=d3.select(this);
//    thisNode.style('fill',color.yearSliderHighlightColor);
}
function yearSliderDragEnd(d){
    var that= d.that;
//    var thisNode=d3.select(this);
//    thisNode.style('fill',color.yearSliderColor);

    adjustSliderPosition(false, that);
//    if(animateMode=='movie'){
        updateAnimation(true,that);
//    }
//    play()
}
function adjustSliderPosition(measure,that){
    var direction='';
    var endYear;
    var yearFilter=that.yearFilter;
    var axisSVG=that.axisSVG;
    var minYear=that.minYear;
    var maxYear=that.maxYear;
    var duration=yearFilter[1]-yearFilter[0];
    var xScale=that.xScale;
    var yScale=that.yScale;
    var yearPosition=that.yearPosition;
    //var lx,rx;
    axisSVG.selectAll('.axisCircle')
        .each(function(d){
            var thisNode=d3.select(this);
            var id= d.id;
            var x=parseFloat(thisNode.attr('cx'));
            if(measure=='stop'){
                that.yearFilter=[minYear,minYear+duration];
                if(id == 'leftAxisCircle'){
                    thisNode.attrs({
                            cx:function(d){d.x = xScale(that.yearFilter[0]);lx = d.x;return d.x;}
                        })
                }
                else{
                    thisNode.attrs({
                            cx:function(d){d.x = xScale(that.yearFilter[1]);rx = d.x;return d.x;}
                        })
                }

            }
            else{
                for(var year in yearPosition){
                    if(x>=yearPosition[year][0]&&x<yearPosition[year][1]){
                        endYear=year;
                        if(xScale(year)>x){
                            direction='right';
                        }
                        else{
                            direction='left';
                        }
                        if(id == 'leftAxisCircle'){
                            that.yearFilter[0]=year.toInt();
                            lx = xScale(year);
                        }
                        else{
                            that.yearFilter[1]=year.toInt();
                            rx = xScale(year);
                        }
                        d.x=xScale(year);
                        thisNode.attrs({
                                cx:d.x
                            });

                        break;
                    }
                }
            }

        });
    axisSVG.select('.movieSlider')
        .transition()
        .duration(100)
        .attr('d',function(d){
            d.p1.x = lx;
            d.p2.x = rx;
            return yearSliderPathData(d);
        });
    return {year:endYear,direction:direction};
}
function yearSliderPathData(d){
    return 'M' + d.p1.x + ' ' + d.p1.y + 'L' + d.p2.x + ' ' + d.p2.y
}