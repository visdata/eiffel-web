function changeAnimateMode() {
    var animateMode = this.animateMode;
    //console.log(this);
    if (animateMode == flipBook) {
        this.changeToMovieMode();

    }
    else if (animateMode == movie) {
        this.changeToFlipBookMode();
    }
}
function changeToMovieMode() {
    this.animateMode = movie;
    var that = this;
    var yearFilter = this.yearFilter;
    var minYear = this.minYear;
    var maxYear = this.maxYear;
    var axisSVG = this.axisSVG;
    var xScale = this.xScale;
    var yScale = this.yScale;
    var yearSliderDrag = this.yearSliderDrag;
    axisSVG.select('.movieSlider').remove();
    d3.select('.movieModeDiv')
        .style('background', color.buttonStyle.on.div);
    d3.select('.movieModeText')
        .style('color', color.buttonStyle.on.text);
    d3.select('.flipBookModeDiv')
        .style('background', color.buttonStyle.off.div);
    d3.select('.flipBookModeText')
        .style('color', color.buttonStyle.off.text);
    if (yearFilter) {
        if (yearFilter[0] == minYear && yearFilter[1] == maxYear) {
            var defaultYearDuration = 3;
            var rYear = defaultYearDuration + minYear;
            axisSVG.select('#rightAxisCircle')
                .attrs({
                    cx: function (d) {
                        d.x = xScale(rYear);
                        return d.x;
                    }
                });
            yearFilter[1] = rYear;
        }
        var left = axisSVG.select('#leftAxisCircle');
        var right = axisSVG.select('#rightAxisCircle');
        var leftX = parseFloat(left.attr('cx'));
        var rightX = parseFloat(right.attr('cx'));
        var y = parseFloat(left.attr('cy'));
        var movieSliderData = [{
            p1: {
                x: leftX,
                y: y
            },
            p2: {
                x: rightX,
                y: y
            },
            index: 1
        }];

        axisSVG.selectAll('whatever')
            .data(movieSliderData)
            .enter()
            .append('path')
            .attr('class', 'movieSlider axisController')
            .attr('index', 1)
            .attr('id', 'movieSlider')
            .styles({
                'stroke-width': 4,
                'stroke': 'white'
            })
            .attr('d', function (d) {
                var e = {};
                clone(d, e);
                var avg = (d.p1.x + d.p2.x) / 2;
                e.p1.x = avg;
                e.p2.x = avg;
                return yearSliderPathData(e);
            })
            .on('mouseover', function (d) {
                d3.select(this)
                    .style('stroke-width', 8)
            })
            .on('mouseout', function (d) {
                d3.select(this)
                    .style('stroke-width', 4)
            })
            .transition()
            .duration(100)
            .attr('d', yearSliderPathData)
            .styles({
                'stroke-width': 4,
                'stroke': 'white',
                'cursor': 'hand'
            })
            .on('end', function () {
                var ids = ['leftAxisCircle', 'rightAxisCircle'];
                axisSVG.select('#leftAxisCircle')
                    .attr('class', 'axisCircle axisController')
                    .style('filter', 'url(#moveToLeft_filter)')
                    .style('visibility', 'visible');
                axisSVG.select('#rightAxisCircle')
                    .attr('class', 'axisCircle axisController')
                    .style('filter', 'url(#moveToRight_filter)');
                axisSVG.selectAll('.axisController').sort(function (a, b) {
                    return d3.descending(a.index, b.index);
                });
            });
        axisSVG.select('.movieSlider')

            .each(function (d) {
                d.that = that;
            })
            .call(yearSliderDrag);
        this.greyBackground();
        updateAnimation(false, that);
    }


}

function changeToFlipBookMode() {
    var drawnodes = this.drawnodes;
    var drawedges = this.drawedges;
    var data = this.data;
    var focusedID = this.focusedID;
    var axisSVG = this.axisSVG;
    this.animateMode = flipBook;
    drawnodes.selectAll('*').remove();
    drawedges.selectAll('*').remove();
    this.preLayout(data.postData[focusedID]);
    d3.select('.movieModeDiv')
        .style('background', color.buttonStyle.off.div);
    d3.select('.movieModeText')
        .style('color', color.buttonStyle.off.text);
    d3.select('.flipBookModeDiv')
        .style('background', color.buttonStyle.on.div);
    d3.select('.flipBookModeText')
        .style('color', color.buttonStyle.on.text);
    axisSVG.select('.movieSlider').remove();
    axisSVG.selectAll('.axisCircle')
        .style('filter', 'url(#leftOrRight_filter)');
}