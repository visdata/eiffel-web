var px='px';
String.prototype.visualLength = function(fontFamily,fontSize){
    var ruler = d3.select('#ruler');
    ruler.styles({
        'font-family':fontFamily,
        'font-size':fontSize+px
    });
    ruler.text(this);
    if(ruler._groups[0][0]){
        var width=ruler._groups[0][0].offsetWidth;
        ruler.text('');
        return width;
    }
};
String.prototype.visualHeight = function(fontFamily,fontSize){
    var ruler = d3.select('#ruler');
    ruler.styles({
        'font-family':fontFamily,
        'font-size':fontSize+px
    });
    ruler.text(this);
    if(ruler._groups[0][0]){
        var height=ruler._groups[0][0].offsetHeight;
        ruler.text('');
        return height;
    }
};
String.prototype.textVisualHeight = function (fontFamily,fontSize) {
    var text = d3.select('svg')
        .append('text')
        .styles({
            visibility:'hidden',
            'font-size': fontSize,
            'font-family': fontFamily,
            'dominant-baseline': 'hanging'
        })
        .html(this);
    var height= text._groups[0][0].getBBox().height;
    text.remove();
    return height;
};
String.prototype.toFloat=function(){
    return parseFloat(this);
};
String.prototype.toInt=function(){
    return parseInt(this);
};
