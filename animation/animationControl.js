function drawAnimateControlPanel() {
    var that = this;
    var axisSVG = this.axisSVG;
    axisSVG.selectAll('*').remove();

    var authorDiv = d3.select('.authorDiv_' + this.position);
    var width = authorDiv._groups[0][0].clientWidth;
    var height = authorDiv._groups[0][0].clientHeight;
    axisSVG.attrs({
        width: width,
        height: height
    });


    var nameFunDic = {
        play: play,
        playBack: playBack,
        pause: pause,
        stop: stop,
        temporal: temporalTimeLine,
        general: generalTimeLine
    };
    var buttonControl = function (d, thisNode) {
        var layer = d.layer;
        //var thisNode=d3.select(this);
        var thisID = thisNode.attr('id');
        if (thisID == 'play')nameFunDic.play(thisNode, layer);
        else if (thisID == 'playBack')nameFunDic.playBack(thisNode, layer);
        else if (thisID == 'pause')nameFunDic.pause(thisNode, layer);
        else if (thisID == 'stop')nameFunDic.stop(thisNode, layer);
        else if (thisID == 'temporalTimeLine')nameFunDic.general(thisNode, layer);
        else if (thisID == 'generalTimeLine')nameFunDic.temporal(thisNode, layer);
    };
    var controlPanelButtonsData = [
        {
            name: 'play',
            fun: play,
            fun1: pause
        },
        {
            name: 'playBack',
            fun: playBack,
            fun1: pause
        },
        {
            name: 'pause',
            fun: function () {
            }
        },
        {
            name: 'stop',
            fun: stop
        },
        {
            name: 'moveToLeft',
            fun: function () {
            }
        },
        {
            name: 'moveToRight',
            fun: function () {
            }
        },
        {
            name: 'leftOrRight',
            fun: function () {
            }
        },
        {
            name: 'speedUp',
            fun: function () {
            }
        },
        {
            name: 'speedUp',
            fun: function () {
            }
        },
        {
            name: 'speedDown',
            fun: function () {
            }
        },
        {
            name: 'lock',
            fun: function () {
            }
        },
        {
            name: 'temporalTimeLine',
            fun: generalTimeLine
        },
        {
            name: 'generalTimeLine',
            fun: temporalTimeLine
        }

    ];
    axisSVG.selectAll('filter')
        .data(controlPanelButtonsData)
        .enter()
        .append('filter')
        .attrs({
            class: 'ButtonFilter',
            id: function (d) {
                return d.name + '_filter';
            },
            x: 0,
            y: 0,
            width: 1,
            height: 1
        })
        .each(function (d) {
            var thisFilter = d3.select(this);
            thisFilter.append('feImage')
                .attrs({
                    'xlink:href': 'image/animateControlPanel/' + d.name + '.png'
                })
        });
    var midControlPanelButtonData = [
        //{
        //    name:'playBack',
        //    fun:playBack,
        //    fun1:pause
        //},
        {
            name: 'play',
            fun: play,
            fun1: pause,
            layer: that
        },
        {
            name: 'stop',
            fun: stop,
            layer: that
        }
    ];
    var midNum = midControlPanelButtonData.length;
    var midButtonRadius = 10;
    var midButtonY = 20;
    var midButtonDistance = 10;
    var temporalButtonLength = 60;
    var controlPanelLength = (midNum - 1) * (midButtonRadius * 2 + midButtonDistance) + midButtonDistance + temporalButtonLength;
    var width = parseFloat(axisSVG.style('width'));
    var initX = (width - controlPanelLength) / 2;
//    var initX=35;

    axisSVG.selectAll('controlButton')
        .data(midControlPanelButtonData)
        .enter()
        .append('circle')
        .attrs({
            cx: function (d, i) {
                return initX + i * (2 * midButtonRadius + midButtonDistance);
            },
            cy: midButtonY,
            r: midButtonRadius,
            id: function (d) {
                return d.name;
            },
            name: function (d) {
                return d.name;
            },
            class: function (d) {
                return 'controlButton' + ' ' + 'controlButton_' + d.name + '_' + that.source;
            }
        })
        .on('click', function (d) {
            d3.selectAll('#' + d.name)
                .each(function (e) {
                    if (d3.select(this).attr('class') != 'ButtonFilter') {
                        var thisNode = d3.select(this);
                        buttonControl(e, thisNode);
                    }
                });
        })
        //.on('click',buttonControl)
        .styles({
            'filter': function (d) {
                return 'url(#' + d.name + '_filter)';
            },
            'cursor': 'hand'
        });
    var temporalButtonData = [{
        name: 'generalTimeLine',
        fun: temporalTimeLine,
        x: initX + controlPanelLength - temporalButtonLength + 10,
        y: midButtonRadius,
        height: midButtonRadius * 2,
        width: temporalButtonLength,
        layer: that
    }];
    axisSVG.selectAll('whatever')
        .data(temporalButtonData)
        .enter()
        .append('rect')
        .each(function (d) {
            d3.select(this)
                .attrs({
                    id: d.name,
                    x: d.x,
                    y: d.y,
                    width: d.width,
                    height: d.height
                })
                .style('filter', function (d) {
                    return 'url(#' + d.name + '_filter)';
                })
                .style('cursor', 'hand')
                .on('click', function (d) {
                    d3.selectAll('#' + d.name)
                        .each(function (e) {
                            if (d3.select(this).attr('class') != 'ButtonFilter') {
                                var thisNode = d3.select(this);
                                buttonControl(e, thisNode);
                            }
                        });
                })
        })

}
function updateAnimation(flag, that) {
    var animateMode = that.animateMode;
    var minYear = that.minYear;
    var maxYear = that.maxYear;
    var data = that.data;
    var focusedID = that.focusedID;
    var svg = that.svg;
    if (animateMode == flipBook && !flag) {
        if (that.yearFilter[0] == minYear && that.yearFilter[1] == maxYear) {
            that.yearFilter = [minYear, maxYear];
        }
        else {
            that.yearFilter = [that.yearFilter[1], maxYear];
        }
    }

    var yearFilter = that.yearFilter;
    var graphData = {};
    //clone(data.postData[focusedID],graphData);
    var newD = that.filterDataByYear(data.postData[focusedID], [that.yearFilter[0], that.yearFilter[1]], that);

    that.preYear = yearFilter[0];
    var preYear = that.preYear;
    if (yearFilter[0] != minYear || yearFilter[1] != maxYear) {
        if (animateMode == flipBook && !flag)newD.keepAll = true;
    }

    if (animateMode == flipBook) {
        if (!flag) {
            that.layout(optionNumber, true, 'flowMap', newD);
        }
        else {
            that.layout(optionNumber, false, false, newD);
        }
    }
    if (animateMode == movie) {
//        yearFilter=[minYear,minYear+3];
        that.layout(optionNumber, false, false, newD);
    }
    svg.selectAll('.node')
        .each(function (d) {
            var thisNode = d3.select(this);
            if (thisNode.attr('transitionStatus') == 'start')thisNode.remove();
        });
}
function playBack(thisNode) {
    changeFilter(thisNode, 'pause');
    if (animateMode == flipBook) {
        //updateAnimation();
        //yearAxisTransition(yearFilter[0],yearFilter[1]);
    }
    else {
        var remainYear = yearFilter[0] - minYear;
        var animationNum = remainYear;
        var currentYearDuration = yearFilter[1] - yearFilter[0];
        yearFilters = [];
        for (var i = 0; i < animationNum - 1; i++) {
//            yearFilters.push([yearFilter[0]+(i+1)*currentYearDuration,yearFilter[1]+(i+1)*currentYearDuration])
            yearFilters.push([yearFilter[0] - (i + 1), yearFilter[1] - (i + 1)])
        }
        yearFilters.push([minYear, minYear + currentYearDuration]);
        recurMovieTransition(yearFilters);
    }
}
function play(thisNode, that) {
    changeFilter(thisNode, 'pause');
    var animateMode = that.animateMode;
    var maxYear = that.maxYear;
    var minYear = that.minYear;
    var temporal = that.temporal;
    var requestMethod = that.requestMethod;
    var ifTemporal = that.ifTemporal;
    that.transitionFlag = true;

    if (animateMode == flipBook) {
        that.updateAnimation(false, that);
        var yearFilter = that.yearFilter;
        console.log(yearFilter);
        that.yearAxisTransition(yearFilter[0], yearFilter[1], that);
    }
    else {
        var remainYear = maxYear - that.yearFilter[1];
        var currentYearDuration = that.yearFilter[1] - that.yearFilter[0];
//        var animationNum=Math.ceil(remainYear/currentYearDuration);
        var animationNum = remainYear;
        var division = temporal.maxDivision;

        that.yearFilters = [];
        var yearFilters = that.yearFilters;
        if (ifTemporal) {
            for (var i = 1; i < division.length; i++) {
                var len = division[i].length;
                yearFilters.push([division[i][0].year.toInt(), division[i][len - 1].year.toInt()]);
            }
        }
        else {
            for (var i = 0; i < animationNum - 1; i++) {
//            yearFilters.push([yearFilter[0]+(i+1)*currentYearDuration,yearFilter[1]+(i+1)*currentYearDuration])
                yearFilters.push([that.yearFilter[0] + (i + 1), that.yearFilter[1] + (i + 1)])
            }
            yearFilters.push([maxYear - currentYearDuration, maxYear]);
        }


        //console.log(yearFilters);
        //console.log(yearFilters);
//        var sliderDuration=yearDelay*currentYearDuration;
        recurMovieTransition(yearFilters, that);


    }
}
function recurMovieTransition(yearFilters, that) {
    var yearDelay = that.yearDelay;
    var axisSVG = that.axisSVG;
    var xScale = that.xScale;
    var sliderDuration = yearDelay;
    var yearFilter = that.yearFilter;
    var k = 0

    if (yearFilters.length > 0) {

        axisSVG.select('#leftAxisCircle')
            .transition()
            //                    .delay(k*yearDelay*currentYearDuration)
            .duration(sliderDuration)
            .ease(d3.easeLinear)
            .attrs({
                cx: function (d) {
                    d.x = xScale(yearFilters[0][0]);
                    return d.x;
                }
            })
        axisSVG.select('#rightAxisCircle')
            .transition()
            .duration(sliderDuration)
            //                    .delay(k*yearDelay*currentYearDuration)
            .ease(d3.easeLinear)
            .attrs({
                cx: function (d) {
                    d.x = xScale(yearFilters[0][1]);
                    return d.x;
                }
            })
            .on('end', function (d) {
                that.yearFilter = [yearFilters[0][0], yearFilters[0][1]];
                updateAnimation(false, that);
                yearFilters = yearFilters.splice(1, yearFilters.length - 1);

                recurMovieTransition(yearFilters, that)
            })
        axisSVG.select('.movieSlider')
            .transition()
            .duration(sliderDuration)
            //                    .delay(k*yearDelay*currentYearDuration)
            .ease(d3.easeLinear)
            .attrs({
                d: function (d) {
                    d.p1.x = xScale(yearFilters[0][0]);
                    d.p2.x = xScale(yearFilters[0][1]);
                    k += 1;
                    return yearSliderPathData(d);
                }
            })
    }
    else {
        axisSVG.selectAll('.controlButton')
            .each(function (d) {
                if (d.name == 'pause') {
                    d3.select(this)
                        .attrs({
                            id: function (d) {
                                d.name = 'play';
                                return d.name;
                            }
                        })
                        .styles({
                            filter: function (d) {
                                return 'url(#' + d.name + '_filter)';
                            }
                        })
                }
            });

    }
}
function pause(thisNode, that) {
    var name = thisNode.attr('name');
    changeFilter(thisNode, name);
    var adjustData = adjustSliderPosition(false, that);
    var adjustDirection = adjustData.direction;
    var adjustYear = adjustData.year;
    d3.selectAll('*').interrupt();
    updateAnimation(true, that);

//        addNodes(adjustYear);
//    }
//    that.removeAnimation();
    //console.log(that.yearFilter)
//    console.log('pause');
}
function stop(thisNode, that) {
    var axisSVG = that.axisSVG;
    var svg_g = that.svg_g;
    var animateMode = that.animateMode;
    var drawnodes = that.drawnodes;
    var drawedges = that.drawedges;
    var data = that.data;
    var focusedID = that.focusedID;
    var minYear = that.minYear;
    axisSVG.selectAll('.controlButton')
        .each(function (d) {
            if (d.name == 'pause') {
                d3.select(this)
                    .attrs({
                        id: function (d) {
                            d.name = 'play';
                            return d.name;
                        }
                    })
                    .styles({
                        filter: function (d) {
                            return 'url(#' + d.name + '_filter)';
                        }
                    })
            }
        });
    if (animateMode == flipBook) {
        d3.selectAll('*').interrupt();
        drawnodes.selectAll('*').remove();
        drawedges.selectAll('*').remove();
        that.preLayout(data.postData[focusedID]);
    }
    else {
        d3.selectAll('*').interrupt();
        var adjustData = adjustSliderPosition('stop', that);
        var adjustDirection = adjustData.direction;
        var adjustYear = adjustData.year;
        if (adjustDirection == 'left') {
            that.removeEdges();
        }
        else {
//        addNodes(adjustYear);
        }
        svg_g.select('#nodeG2').remove();
        svg_g.select('#edgeG2').remove();
        svg_g.select('#nodeG4').selectAll('*').remove();
        svg_g.select('#edgeG4').selectAll('*').remove();
        //that.yearFilter=[minYear,minYear+3];
        updateAnimation(false, that);
        //that.preLayout(data.postData[focusedID]);
        //that.changeToMovieMode();
    }

}
function temporalTimeLine(thisNode, that) {
    thisNode
        .attrs({
            id: function (d) {
                d.name = 'temporalTimeLine';
                return d.name;
            }
        })
        .styles({
            filter: function (d) {
                return 'url(#' + d.name + '_filter)'
            }
        });
    that.ifTemporal = true;
    that.changeToMovieMode();
//    updateAnimation();
    var division;
    var temporal = that.temporal;
    //division = temporal.maxDivision;
    var maxDivision = division;
    if(getUrlParam('twitter') == 20) {
        maxDivision = [
            [{year: '1', flow: 1}, {year: '4', flow: 1}],
            [{year: '4', flow: 1}, {year: '8', flow: 1}]
        ];
    }
    else if (getUrlParam('aminerV8_id') == 1182989) {
        maxDivision = [
            [{year: '2007', flow: 1}, {year: '2011', flow: 1}],
            [{year: '2011', flow: 1}, {year: '2013', flow: 1}],
            [{year: '2013', flow: 1}, {year: '2016', flow: 1}]
        ];
    }

    temporal.maxDivision = maxDivision;
    var firstPart = maxDivision[0];
    var yearFilter = that.yearFilter;
    var axisSVG = that.axisSVG;
    var xScale = that.xScale;
    yearFilter = [firstPart[0].year.toInt(), firstPart[firstPart.length - 1].year.toInt()];

    axisSVG.select('.movieSlider')
        .transition()
        .duration(100)
        //                    .delay(k*yearDelay*currentYearDuration)
        .ease(d3.easeLinear)
        .attrs({
            d: function (d) {
                d.p1.x = xScale(yearFilter[0]);
                d.p2.x = xScale(yearFilter[1]);
                return yearSliderPathData(d);
            }
        })
        .on('end', function () {
            updateAnimation(false, that);
        })
    axisSVG.select('#leftAxisCircle')
        .transition()
        //                    .delay(k*yearDelay*currentYearDuration)
        .duration(100)
        .ease(d3.easeLinear)
        .attrs({

            cx: function (d) {
                d.x = xScale(yearFilter[0]);
                return d.x;
            }
        })
        .styles({
            visibility: 'visible'
        });
    axisSVG.select('#rightAxisCircle')
        .transition()
        .duration(100)
        //                    .delay(k*yearDelay*currentYearDuration)
        .ease(d3.easeLinear)
        .attrs({
            cx: function (d) {
                d.x = xScale(yearFilter[1]);
                return d.x;
            }
        });
    axisSVG.select('#leftAxisCircle')
        .attrs({
            'class': 'axisCircle axisController',
            index: function (d) {
                return d.index
            }
        });
    axisSVG.select('#rightAxisCircle')
        .attrs({
            'class': 'axisCircle axisController',
            index: function (d) {
                return d.index
            }
        });
    axisSVG.selectAll('.axisController').sort(function (a, b) {
        return d3.descending(a.index, b.index)
    });


}
function generalTimeLine(thisNode, that) {

    thisNode
        .attrs({
            id: function (d) {
                d.name = 'generalTimeLine';
                return d.name;
            }
        })
        .styles({
            filter: function (d) {
                return 'url(#' + d.name + '_filter)'
            }
        });
    that.ifTemporal = false;
}
function removeEdges() {
    var svg = this.svg;
    svg.selectAll('path')
        .each(function (d) {
            var thisEdge = d3.select(this);
            var status = thisEdge.attr('transitionStatus');
            if (status == 'start') {
                thisEdge.remove();
            }
        })
}
function removeAnimation() {
    var animateMode = this.animateMode;
    var svg = this.svg;
    var yearFilter = this.yearFilter;
    if (animateMode == flipBook) {
        var types = ['.backgroundNode', 'path', '.node', '.size', '.label'];
        for (var i = 0; i < types.length; i++) {
            var type = types[i];
            var selector = svg;
            if (type == 'path')selector = selector.select('.edgeField');
            selector.selectAll(type)
                .each(function (e, i) {
                    var thisObj = d3.select(this);
                    if (thisObj.attr('class') != 'legend') {
                        if (thisObj.attr('transitionStatus') == null) {
                            thisObj.remove();
                        }
                    }

                })
        }
    }
    svg.select('.rightYear')
        .html(yearFilter[1])
        .transition()
        .duration(100)
        .tween("text", function () {
            var i = d3.interpolateRound(yearFilter[1], yearFilter[1]);
            return function (t) {
                this.textContent = i(t);
            };
        })
    svg.selectAll('.backgroundNode').remove()
//        .each(function(d){
//            var thisNode=d3.select(this);
//            var r=thisNode.attr('r').toFloat();
//            thisNode.transition()
//                .duration(100)
//                .attr('r',r)
//        });
    svg.selectAll('.node')
        .each(function (d) {
            var thisNode = d3.select(this);
            thisNode.attrs({
                transitionStatus: 'end'
            });
            if (thisNode.attr('r')) {
                var r = thisNode.attr('r').toFloat();
                thisNode.transition()
                    .duration(100)
                    .attr('r', r)
            }

        });
    svg.selectAll('.size')
        .each(function (d) {
            var thisNode = d3.select(this);
            var size = thisNode.html().toFloat();
            thisNode.attrs({
                transitionStatus: 'end'
            })
            thisNode.transition()
                .duration(100)
                .tween("text", function (d) {
                    var i = d3.interpolateRound(size, size);
                    return function (t) {
                        this.textContent = i(t);
                    };
                })
        });
}
function changeFilter(thisNode, id) {
    thisNode
        .style('filter', 'url(#' + id + '_filter)');
    thisNode
        .attr('id', function (d) {
            d.name = id;
            return d.name
        });

}
