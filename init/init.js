function LayoutSetting() {
    //    this.resolutionRatioList=[{'4:3':1024/643},{'16:10':1440/775},{'16:9':1600/775}];
    this.resolutionRatioList = [{
            'resolution': '4:3',
            'realRatio': 1024 / 643
        },
        {
            'resolution': '16:10',
            'realRatio': 1440 / 775
        },
        {
            'resolution': '16:9',
            'realRatio': 1600 / 775
        }
    ];
    this.totalWidth = window.innerWidth ||
        document.body.clientWidth ||
        document.documentElement.clientWidth;
    this.totalHeight = document.body.clientHeight ||
        document.documentElement.clientHeight ||
        window.innerHeight;
    this.settings = {
        '4:3': {},
        '16:10': {},
        '16:9': {}
    };
    this.setting = {}
    this.selectSetting = function () {
        //        console.log(this);
        var ratio = this.totalWidth / this.totalHeight;
        var min = d3.min(this.resolutionRatioList, function (d) {
            return [Math.abs(ratio - d.realRatio), d];
        });
        var key = min[1].resolution;
        this.setting = this.settings[key];
    };

}

function bodyEvent(e) {
    if (e == 38 || 40) {
        return false;
    }

}

function transitionBackground(transitionMethod, transitionDirection, ratio, darkTransition, lightTransition) {
    return transitionMethod + '(' + transitionDirection + ',' + darkTransition + ' 0%,' + lightTransition + ' ' + ratio + '%,' + lightTransition + ' ' + ratio + '%,' + lightTransition + ' 100%'
}


// L51-L1500
function initSetting(colorStyle) {

    usefulWidth = window.innerWidth ||
        document.body.clientWidth ||
        document.documentElement.clientWidth;
    usefulHeight = document.documentElement.clientHeight ||
        document.body.clientHeight ||
        window.innerHeight;

    pageStyle = colorStyle;
    color = initColor(colorStyle);
    //setServer();
    layoutSetting();
    //    var scrollLength=18;
    //    usefulWidth-=scrollLength;
    var body = d3.select('body');
    body.attr('onkeydown', 'bodyEvent(event.keyCode||event.which);');
    body.selectAll('*').remove();

    //define the ratio of body part in Y-direction
    var titleRatio_Y = 0.1;
    var mainRatio_Y = 1 - titleRatio_Y;
    var bodyDiv = body.append('div').attr('class', 'bodyDiv')
        .styles({
            //            border:'1px solid rgb(50,70,90)',
        });
    // draw title Div
    var titleDiv = bodyDiv.append('div').attr('class', 'titleDiv')
        .styles({
            'width': usefulWidth + px,
            'height': usefulHeight * titleRatio_Y + px,
            'line-height': usefulHeight * titleRatio_Y + px,
            background: color.titleDivColor
        });
    //    console.log(usefulWidth);
    //    console.log(usefulHeight);

    titleDiv.append('text').html('Eiffel: Evolutionary Flow Map for Influence Graph Visualization')
        .styles({
            'font-family': 'Arial Black',
            'font-size': '20px',
            'color': color.titleTextColor
        });

    //define the ration of body part in X-direction
    var leftRatio_X = 0.16;
    var rightRatio_X = leftRatio_X;
    var leftTransitionRatio_X = 0.025;
    var rightTransitionRatio_X = leftTransitionRatio_X;
    var middleRatio_X = 1 - leftRatio_X - leftTransitionRatio_X - rightTransitionRatio_X - rightRatio_X;

    // draw main Div
    var mainHeight = usefulHeight * mainRatio_Y;

    var leftWidth = usefulWidth * leftRatio_X;
    var leftTransitionWidth = usefulWidth * leftTransitionRatio_X;
    var middleWidth = usefulWidth * middleRatio_X;
    var rightTransitionWidth = usefulWidth * rightTransitionRatio_X;
    var rightWidth = usefulWidth * rightRatio_X;
    var rightTransitionRatio = 100 * rightTransitionWidth / (rightTransitionWidth + rightWidth);
    rightMarginLeft = rightTransitionWidth;
    var transitionMethod = '-webkit-linear-gradient';
    var ratio = rightTransitionRatio;
    var leftBackground = transitionBackground(transitionMethod, 'right', ratio, color.mainTransition1, color.mainTransition2);
    //    var rightWhiteBackground='-webkit-linear-gradient(left,rgb(127,127,127) 0%,rgb(255,255,255) '+rightTransitionRatio+'%,rgb(255,255,255) '+rightTransitionRatio+'%,rgb(255,255,255) 100%)';
    var rightWhiteBackground = transitionBackground(transitionMethod, 'left', ratio, color.whiteBarTransition1, color.whiteBarTransition2);
    var leftWhiteBackground = transitionBackground(transitionMethod, 'right', ratio, color.whiteBarTransition1, color.whiteBarTransition2);
    //    var rightBodyBackground='-webkit-linear-gradient(left,rgb(25,35,45) 0%,rgb(50,70,90) '+rightTransitionRatio+'%,rgb(50,70,90) '+rightTransitionRatio+'%,rgb(50,70,90) 100%)';
    var rightBodyBackground = transitionBackground(transitionMethod, 'left', ratio, color.mainTransition1, color.mainTransition2);
    var leftBodyBackground = transitionBackground(transitionMethod, 'right', ratio, color.mainTransition1, color.mainTransition2);

    //var rightBottomBackground='-webkit-linear-gradient(left,rgb(74, 90, 103) 0%,rgb(142, 162, 167) '+rightTransitionRatio+'%,rgb(142, 162, 167) '+rightTransitionRatio+'%,rgb(142, 162, 167) 100%)';
    var rightBottomBackground = transitionBackground(transitionMethod, 'left', ratio, color.greyBarTransition1, color.greyBarTransition2);
    var leftBottomBackground = transitionBackground(transitionMethod, 'right', ratio, color.greyBarTransition1, color.greyBarTransition2);

    var mainDiv = bodyDiv.append('div').attr('class', 'mainDiv')
        .styles({
            width: usefulWidth + px
        });

    //    var leftDiv=mainDiv.append('div').attr('class','leftDiv')
    //        .styles({
    //            float:'left',
    //            width:leftWidth+px,
    //            height:mainHeight+px
    //        });
    //    var leftTransitionDiv=mainDiv.append('div').attr('class','leftTransitionDiv')
    //        .styles({
    ////            background:'rgb(42,55,71)',
    //            float:'left',
    //            width:leftTransitionWidth+px,
    //            height:mainHeight+px
    //        });
    var middleDiv = mainDiv.append('div').attr('class', 'middleDiv')
        .styles({
            float: 'left',
            //width:middleWidth+px,
            width: 'auto',
            //height:mainHeight+px
            height: mainHeight + px
        });
    //    var rightTransitionDiv=mainDiv.append('div').attr('class','rightTransitionDiv')
    //        .styles({
    ////            background:'rgb(42,55,71)',
    //            float:'left',
    //            width:rightTransitionWidth+px,
    //            height:mainHeight+px
    //        });
    var paperDiv = mainDiv
        .append('div')
        .styles({
            //            background:'rgb(50,70,90)',
            overflow: 'hidden',
            float: 'left',
            width: 'auto',
            height: mainHeight + px,
            background: rightBodyBackground
        })
        .append('div')
        .attr('class', 'paperDiv')
        .styles({
            //            background:'rgb(50,70,90)',
            overflow: 'hidden',
            float: 'left',
            width: (rightWidth + rightTransitionWidth + leftWidth + leftTransitionWidth) + px,
            height: mainHeight + px,
            background: rightBodyBackground
        });
    var rightDiv = paperDiv.append('div').attr('class', 'rightDiv')
        .styles({
            //            background:'rgb(50,70,90)',
            float: 'left',
            width: rightWidth + rightTransitionWidth + px,
            height: mainHeight + px,
            background: rightBodyBackground
        });
    var leftAndTransitionDiv = paperDiv.append('div').attr('class', 'leftAndTransitionDiv')
        .styles({
            float: 'left',
            width: leftWidth + leftTransitionWidth + px,
            height: mainHeight + px
        });
    // define the ratio of three parts in left, right and transition div
    // the variable name of the total height of these parts is mainHeight
    var topBarHeight = 0.003 * mainHeight;
    var secondBarHeight = 0.04 * mainHeight;
    var contentHeight = 0.925 * mainHeight;
    var middleBarHeight = 0.006 * mainHeight;
    var bottomBarHeight = mainHeight - contentHeight - middleBarHeight - topBarHeight - secondBarHeight;

    var leftAndTransitionTopBarDiv = leftAndTransitionDiv.append('div')
        .styles({
            background: leftWhiteBackground,
            width: leftWidth + leftTransitionWidth + px,
            height: topBarHeight + px
        });

    var leftTopBarDiv = leftAndTransitionTopBarDiv.append('div')
        .attr('class', 'leftTopBarDiv')
        .styles({
            float: 'left',
            width: leftWidth + px,
            height: topBarHeight + px
        });
    var leftTransitionTopBarDiv = leftAndTransitionTopBarDiv.append('div')
        .attr('class', 'leftTransitionTopBarDiv')
        .styles({
            float: 'left',
            //            'background-image':'linear-gradient(left, rgb(255,255,255),rgb(127,127,127))',
            width: leftTransitionWidth + px,
            height: topBarHeight + px
        });


    var leftAndTransitionSecondBarDiv = leftAndTransitionDiv.append('div')
        .styles({
            background: leftBodyBackground,
            width: leftWidth + leftTransitionWidth + px,
            height: secondBarHeight + px
        });
    var leftSecondBarDiv = leftAndTransitionSecondBarDiv.append('div')
        .styles({
            float: 'left',
            //background:'rgb(50,70,90)',
            width: leftWidth + px,
            height: secondBarHeight + px
        });
    var leftTransitionSecondBarDiv = leftAndTransitionSecondBarDiv.append('div')
        .styles({
            float: 'left',
            //'background-image':'-webkit-linear-gradient(left, rgb(50,70,90),rgb(25,35,45))',
            //            'background-image':'linear-gradient(left, rgb(255,255,255),rgb(127,127,127))',
            width: leftTransitionWidth + px,
            height: secondBarHeight + px
        });


    var leftAndTransitionContentDiv = leftAndTransitionDiv.append('div')
        .attr('class', 'leftAndTransitionContentDiv')
        .styles({
            background: leftBackground,
            width: leftWidth + leftTransitionWidth + px,
            height: contentHeight + px
        });

    var leftAndTransitionMiddleBarDiv = leftAndTransitionDiv.append('div')
        .styles({
            background: leftWhiteBackground,
            width: leftWidth + leftTransitionWidth + px,
            height: middleBarHeight + px
        });
    var leftMiddleBarDiv = leftAndTransitionMiddleBarDiv.append('div')
        .styles({
            float: 'left',
            width: leftWidth + px,
            height: middleBarHeight + px
        });
    var leftTransitionMiddleBarDiv = leftAndTransitionMiddleBarDiv.append('div')
        .styles({
            float: 'left',
            //'background-image':'-webkit-linear-gradient(left, rgb(255,255,255),rgb(127,127,127))',
            //            'background-image':'linear-gradient(left, rgb(255,255,255),rgb(127,127,127))',
            width: leftTransitionWidth + px,
            height: middleBarHeight + px
        });


    var leftAndTransitionBottomBarDiv = leftAndTransitionDiv.append('div')
        .styles({
            background: leftBottomBackground,
            width: leftWidth + leftTransitionWidth + px,
            height: bottomBarHeight + px
        });
    var leftBottomBarDiv = leftAndTransitionBottomBarDiv.append('div')
        .styles({
            float: 'left',
            //background:'rgb(141,162,167)',
            width: leftWidth + px,
            height: bottomBarHeight + px
        });
    var leftTransitionBottomBarDiv = leftAndTransitionBottomBarDiv.append('div')
        .styles({
            float: 'left',
            //'background-image':'-webkit-linear-gradient(left, rgb(141,162,167),rgb(70,81,83))',
            //            'background-image':'linear-gradient(left, rgb(141,162,167),rgb(70,81,83))',
            width: leftTransitionWidth + px,
            height: bottomBarHeight + px
        });


    var rightTopBarDiv = rightDiv.append('div')
        .styles({
            background: rightWhiteBackground,
            width: rightTransitionWidth + rightWidth + px,
            height: topBarHeight + px
        });
    var rightContentDiv = rightDiv.append('div').attr('class', 'rightContentDiv')
        .styles({
            position: 'relative',
            background: rightBodyBackground,
            width: rightTransitionWidth + rightWidth + px,
            height: contentHeight + secondBarHeight + px
        });
    //console.log('init rightContentDiv height'+(contentHeight+secondBarHeight));
    //console.log('init rightContentDiv width'+(rightTransitionWidth+rightWidth));
    var rightMiddleBarDiv = rightDiv.append('div')
        .styles({
            background: rightWhiteBackground,
            width: rightTransitionWidth + rightWidth + px,
            height: middleBarHeight + px
        });
    var rightBottomBarDiv = rightDiv.append('div')
        .styles({
            background: rightBottomBackground,
            width: rightTransitionWidth + rightWidth + px,
            height: bottomBarHeight + px
        });
    // define the ratio of central part
    //topBarHeight=0.003*mainHeight;
    var topControlHeight = 0.05 * mainHeight;
    var graphDivHeight = 0.70 * mainHeight;
    var bottomControlHeight = 0.05 * mainHeight;
    middleBarHeight = 0.006 * mainHeight;
    var bottomMiddleBarHeight = 0.006 * mainHeight;
    var authorDivHeight = mainHeight - topBarHeight - topControlHeight - graphDivHeight - bottomControlHeight - bottomMiddleBarHeight;
    //    var topControlHeight=0.05*mainHeight;
    //    var graphDivHeight=0.95*mainHeight;
    //    var bottomControlHeight=0.05*mainHeight;
    //    middleBarHeight=0;
    //    var bottomMiddleBarHeight=0;
    //    var authorDivHeight=mainHeight-topBarHeight-topControlHeight-graphDivHeight-bottomControlHeight-bottomMiddleBarHeight;
    graphDivHeight += bottomControlHeight;
    var animationPanelTop = usefulHeight * titleRatio_Y + topBarHeight + topControlHeight + graphDivHeight;
    var middleTopBarDiv = middleDiv.append('div')
        .attr('class', 'middleTopBarDiv')
        .styles({
            width: middleWidth + px,
            height: topBarHeight + px
        });
    var topControlDiv = middleDiv.append('div').attr('class', 'topControlDiv')
        .styles({
            background: color.svgColor,
            width: middleWidth + px,
            height: topControlHeight + px
        });
    var graphDiv = middleDiv.append('div')
        .attr('class', 'graph')
        .styles({
            //float:'left',
            background: color.svgColor,
            width: 'auto',
            height: graphDivHeight + px
        })

    // 左图绘制容器
    var graphDiv_left = graphDiv.append('div')
        .attr('class', 'graphDiv graphDiv_left')
        .styles({
            float: 'left',
            overflow: 'hidden',
            background: color.svgColor,
            width: middleWidth + px,
            height: graphDivHeight + px
        });
    var graphDiv_right = graphDiv.append('div')
        .attr('class', 'graphDiv graphDiv_right')
        .styles({
            overflow: 'hidden',
            background: color.svgColor,
            width: 0 + px,
            height: graphDivHeight + px
        });
    var bottomControlDiv = middleDiv.append('div').attr('class', 'bottomControlDiv')
        .styles({
            background: 'none',
            width: middleWidth * 0.2 + px,
            height: bottomControlHeight + px,
            position: 'absolute',
            left: middleWidth * 0.4 + px,
            top: animationPanelTop - bottomControlHeight + px
        });
    var middleMiddleBarDiv = middleDiv.append('div').attr('class', 'middleMiddleBarDiv')
        .styles({
            width: middleWidth + px,
            height: bottomMiddleBarHeight + px
        });
    var bottomGraphDiv = middleDiv.append('div').attr('class', 'bottomGraphDiv')
        .styles({
            background: color.authorDivColor,
            width: 'auto',
            height: authorDivHeight + px
        });
    var authorDiv_left = bottomGraphDiv.append('div')
        .attr('class', 'authorDiv authorDiv_left')
        .styles({
            float: 'left',
            overflow: 'hidden',
            background: color.authorDivColor,
            width: middleWidth + px,
            height: authorDivHeight + px
        });
    var authorDiv_right = bottomGraphDiv.append('div')
        .attr('class', 'authorDiv authorDiv_right')
        .styles({
            overflow: 'hidden',
            background: color.authorDivColor,
            width: 0 + px,
            height: authorDivHeight + px
        });
    bodyDiv.append('span').attr('id', 'ruler').attr('class', 'ruler')
        .styles({
            height: 0 + px,
            width: 0 + px,
            visibility: 'hidden',
            'font-family': 'Microsoft YaHei',
            'font-size': '12px'
        });

    // sy（此行向上）对界面做初始化布局
    // sy option下拉菜单功能[开始]

    //draw top control div three options and search box on topControlDiv

    var checkBoxDiv = topControlDiv.append('div').attr('class', 'checkBoxDiv').styles({
        float: 'left',
        'margin-top': 8 + px,
        'margin-left': 20 + px,
        height: 24 + px,
        'line-height': 24 + px,
        visibility: 'hidden',
        display: 'none'
    });

    var optionDiv = topControlDiv.append('div').attr('class', 'optionDiv').styles({
        float: 'left',
        'margin-top': 8 + px
    });

    var databaseData = [{
            type: 'source',
            source: 'aminerV8',
            checked: true,
            disabled: true,
            'name': 'AMiner',
            position: 'left'
        },
        {
            type: 'source',
            source: 'citeseerx',
            'name': 'CiteseerX',
            position: 'right'
        }
    ];

    fontFamily = 'Microsoft YaHei';
    fontSize = 12;
    checkBoxDiv
        .append('div')
        .styles({
            float: 'left'
        })
        .append('text')
        .styles({
            'font-family': fontFamily,
            'font-size': fontSize + px,
            color: color.optionTextColor
        })
        .html('Database: ');

    var dbData = [{
            type: 'source',
            source: 'aminerV8',
            name: 'AMiner',
            class: 'dbOption',
            sourceList: [{
                    selectId: 0,
                    'source': 'aminerV8',
                    text: 'AMiner',
                    data: [{
                        cluster: '10'
                    }, {
                        cluster: '20'
                    }, {
                        cluster: '40'
                    }, {
                        cluster: '80'
                    }]
                },
                {
                    selectId: 1,
                    'source': 'citeseerx',
                    text: 'CiteseerX',
                    data: [{
                        cluster: '10'
                    }, {
                        cluster: '20'
                    }, {
                        cluster: '40'
                    }, {
                        cluster: '80'
                    }]
                }
            ],
            checked: true,
            disabled: true,
            position: 'left',
            index: 5,
            layer: leftLayer
        },
        {
            type: 'source',
            source: 'citeseerx',
            name: 'CiteseerX',
            class: 'dbOption',
            sourceList: [{
                    selectId: 0,
                    'source': 'aminerV8',
                    text: 'AMiner',
                    data: [{
                        cluster: '10'
                    }, {
                        cluster: '20'
                    }, {
                        cluster: '40'
                    }, {
                        cluster: '80'
                    }]
                },
                {
                    selectId: 1,
                    'source': 'citeseerx',
                    text: 'CiteseerX',
                    data: [{
                        cluster: '10'
                    }, {
                        cluster: '20'
                    }, {
                        cluster: '40'
                    }, {
                        cluster: '80'
                    }]
                }
            ],
            position: 'right',
            index: 6,
            layer: rightLayer
        }
    ];
    checkBoxDiv.selectAll('whatever')
        .data([dbData[0]])
        .enter()
        .append('g')
        .attr('class', function (d) {
            return d.class;
        })
        .each(function (d, i) {
            var maxLabel = d3.max(d.sourceList, function (e) {
                return (e.text + '-' + '20').visualLength(fontFamily, fontSize);
            });
            d3.select(this)
                .append('div')
                .styles({
                    float: 'left'
                })
                .append('input')
                .on('change', function (e) {
                    var checked = d3.select(this).property("checked");
                    sourceCheckedStatus[d.position] = checked;
                    updateCheckBox(e);
                    updateSvgBySourceCheckBox();
                })
                .attrs({
                    type: 'checkbox',
                    checked: function () {
                        if (i == 0) return d.checked;
                    },
                    disabled: function () {
                        if (i == 0) return d.disabled;
                    },
                    class: d.type + 'CheckBox ' + d.type + 'CheckBox_' + d.position,
                    id: d.source
                });
            var selectDatabaseDiv = d3.select(this)
                .append('div')
                .attrs({
                    class: 'selectDiv',
                    id: 'selectDiv' + d.index
                })
                .styles({
                    float: 'left'
                });
            selectDatabaseDiv
                .append('cite')
                .attrs({
                    class: 'cite',
                    id: 'cite' + d.index
                })
                .on('click', function () {
                    var thisCite = d3.select(this);
                    var id = thisCite.attr('id').split('cite')[1];
                    var ul = old$("#ul" + id);
                    var ul_display = d3.select('#ul' + id).style('display');
                    if (ul.css("display") == "none") {
                        ul.slideDown("fast");
                    } else {
                        ul.slideUp("fast");
                    }
                })
                .styles({
                    width: maxLabel + 12 + px,
                    height: '24px',
                    'line-height': '24px',
                    'font-family': 'Microsoft YaHei',
                    'font-size': 12 + px,
                    color: color.optionTextColor
                })
                .append('a')
                .styles({
                    //'margin-left':10+px
                })
                .html(d.name + '-20');
            var databaseUL = selectDatabaseDiv
                .append('ul')
                .attrs({
                    class: 'ul',
                    id: 'ul' + d.index
                })
                .styles({
                    width: maxLabel + 20 + px
                });
            databaseUL.selectAll('whatever')
                .data(d.sourceList)
                .enter()
                .append('li')
                .append('a')
                .styles({
                    width: maxLabel + px,
                    height: '24px',
                    'line-height': '24px',
                    'font-family': 'Microsoft YaHei',
                    'font-size': 12 + px
                })
                .attrs({
                    selectId: function (e, i) {
                        return i;
                    },
                    father: d.index,
                    class: 'hasSub'
                })
                .on('mouseover', function (e, i) {
                    var father = parseInt(d3.select(this).attr('father'));
                    var selectid = parseInt(d3.select(this).attr('selectid'));
                    var ul = old$("#subUL" + father + "_" + selectid);
                    ul.slideDown("fast");
                    var thatUl = old$("#subUL" + father + "_" + (1 - selectid));
                    thatUl.hide();
                })
                .on('mouseout', function (e, i) {
                    var father = parseInt(d3.select(this).attr('father'));
                    var fatherLength = d3.select('#ul' + father).style('width').split('px')[0];
                    var selectid = parseInt(d3.select(this).attr('selectid'));
                    if (d3.event.layerX < parseFloat(fatherLength) - 2) {
                        var ul = old$("#subUL" + father + "_" + selectid);
                        var ul_display = d3.select("#subUL" + father + "_" + selectid).style('display');
                        //ul.hide();
                    }
                })
                .on('click', function (e, i) {
                    var father = parseInt(d3.select(this).attr('father'));
                    var selectid = parseInt(d3.select(this).attr('selectid'));
                    var ul = old$("#subUL" + father + "_" + selectid);
                    var ul_display = d3.select("#subUL" + father + "_" + selectid).style('display');
                    if (ul.css("display") == "none") {
                        ul.slideDown("fast");
                    } else {
                        ul.slideUp("fast");
                    }
                })
                .html(function (d) {
                    return d.text
                });
            selectDatabaseDiv.selectAll('whatever')
                .data(d.sourceList)
                .enter()
                .append('ul')
                .attrs({
                    class: 'subUL',
                    id: function (e) {
                        return 'subUL' + d.index + '_' + e.selectId
                    }
                })
                .styles({
                    'margin-left': maxLabel + 20 + px,
                    width: 10 + px,
                    'display': 'none'
                })
                .each(function (e) {
                    var layer = d.layer;
                    var subUL = d3.select(this);
                    subUL.selectAll('whatever')
                        .data(e.data)
                        .enter()
                        .append('li')
                        .append('a')
                        .styles({
                            width: 10 + px,
                            height: '24px',
                            'line-height': '24px',
                            'font-family': 'Microsoft YaHei',
                            'font-size': 12 + px
                        })
                        .attrs({
                            selectId: e.selectId,
                            father: d.index + '_' + e.selectId,
                            cluster: function (f, i) {
                                return f.cluster;
                            }
                        })
                        .each(function (f) {
                            f.selectId = e.selectId;
                        })
                        .on('click', function (f) {
                            var thisE = d3.select(this);
                            var id = thisE.attr('father').split('_')[0];
                            var clusterCount = thisE.attr('cluster');
                            var sourceID = thisE.attr('selectId');
                            //var txt = old$(this).text();
                            d3.select("#cite" + id).html(function () {
                                if (sourceID == 0) return 'AMiner' + '-' + clusterCount;
                                else return 'CiteseerX' + '-' + clusterCount;
                            });

                            console.log(layer.position);
                            layer.clusterCount = f.cluster;
                            if (f.selectId == 0) layer.source = db1;
                            else if (f.selectId == 1) layer.source = db2;
                            layer.ifLayout = true;
                            layer.thatLayer.ifLayout = false;
                            requestData();

                        })

                        .html(function (f) {
                            return f.cluster
                        });
                })

        });
    //    var searchDiv=topControlDiv.append('div').attr('class','searchDiv').styles({
    //        float:'left',
    //        'margin-left':80+px
    //    });
    var optionData = [{
            index: 2,
            text: 'Style : ',
            class: 'style',
            values: ['dark', 'light']
        },
        {
            index: 3,
            text: 'Node Label : ',
            class: 'nodeLabel',
            values: ['Bigram keywords', 'TF-IDF keywords']
        },
        {
            index: 4,
            text: 'Node Color : ',
            class: 'nodeColor',
            values: ['uniform', 'citation', 'average citation']
        },
        {
            index: 7,
            text: 'Link Thickness : ',
            class: 'edgeThickness',
            values: ['flow rate', '#citation']
        },

        {
            index: 1,
            text: '#Cluster : ',
            class: 'cluster',
            values: [clusterCount]
        },
        {
            index: 0,
            text: 'Database : ',
            ',class:': 'database',
            values: ['aminerV8', 'citeseerx']
        }
    ].sort(function (a, b) {
        return a.index - b.index
    });
    var fontFamily = 'Microsoft YaHei';
    var fontSize = 12;
    optionDiv.selectAll('whatever').data(optionData)
        .enter()
        .append('g')
        .each(function (d, i) {
            var thisG = d3.select(this);
            var maxLabel = d3.max(d.values, function (e) {
                return e.visualLength(fontFamily, fontSize);
            });
            thisG
                .append('div')
                .attrs({
                    class: 'selectTextDiv'
                })
                .styles({
                    'margin-left': 20 + px,
                    height: 24 + px,
                    'line-height': 24 + px,
                    float: 'left'
                })
                .append('text')
                .html(function (d) {
                    return d.text;
                })
                .styles({
                    'font-size': 12 + px,
                    'font-family': 'Microsoft YaHei',
                    'color': color.optionTextColor
                });
            var newLabelDiv = thisG
                .append('div')
                .attrs({
                    id: 'selectDiv' + d.index,
                    class: 'selectDiv'
                })
                .styles({
                    float: 'left'
                });
            newLabelDiv.append('cite')
                .attrs({
                    class: 'cite',
                    id: 'cite' + d.index
                })
                .on('click', function () {
                    var thisCite = d3.select(this);
                    var id = thisCite.attr('id').split('cite')[1];
                    var ul = old$("#ul" + id);
                    var ul_display = d3.select('#ul' + id).style('display');
                    if (ul.css("display") == "none") {
                        ul.slideDown("fast");
                    } else {
                        ul.slideUp("fast");
                    }
                })
                .styles({
                    width: maxLabel + 30 + px,
                    height: '24px',
                    'line-height': '24px',
                    'font-family': 'Microsoft YaHei',
                    'font-size': 12 + px,
                    color: color.optionTextColor
                })
                .append('a')
                .styles({
                    'margin-left': 10 + px
                })
                .html(function () {
                    //console.log(colorStyle)
                    if (d.class == 'style') return colorStyle;
                    if (d.class != 'database') return d.values[0];
                    else return getUrlParam('selected');
                });
            var newUL = newLabelDiv.append('ul')
                .attrs({
                    class: 'ul',
                    id: 'ul' + d.index
                })
                .styles({
                    width: maxLabel + 20 + px
                });

            for (var j = 0; j < d.values.length; j++) {
                newUL.append('li')
                    .styles({})
                    .append('a')
                    .styles({
                        width: maxLabel + 1 + px,
                        height: '24px',
                        'line-height': '24px',
                        'font-family': 'Microsoft YaHei',
                        'font-size': 12 + px
                    })
                    .attrs({
                        selectId: j,
                        father: d.index,
                        class: function (e, i) {
                            if (e.index == 3) return 'hasSub';
                        }
                    })
                    .on('mouseover', function (e, i) {
                        var father = parseInt(d3.select(this).attr('father'));
                        var selectid = parseInt(d3.select(this).attr('selectid'));
                        if (father == 3 && selectid in [0, 1]) {
                            var ul = old$("#subUL3_" + selectid);
                            var ul_display = d3.select('#subUL3_' + selectid).style('display');
                            ul.slideDown("fast");

                        }
                    })
                    .on('mouseout', function (e, i) {
                        var father = parseInt(d3.select(this).attr('father'));
                        var fatherLength = d3.select('#ul' + father).style('width').split('px')[0];
                        var selectid = parseInt(d3.select(this).attr('selectid'));
                        if (father == 3 && selectid in [0, 1] && d3.event.layerX < parseFloat(fatherLength) - 2) {
                            var ul = old$("#subUL3_" + selectid);
                            var ul_display = d3.select('#subUL3_' + selectid).style('display');
                            ul.hide();
                        }
                    })
                    .on('click', function (e, i) {
                        var father = parseInt(d3.select(this).attr('father'));
                        var selectid = parseInt(d3.select(this).attr('selectid'));
                        if (father == 3 && selectid in [0, 1]) {
                            var ul = old$("#subUL3_" + selectid);
                            var ul_display = d3.select('#subUL3_' + selectid).style('display');
                            if (ul.css("display") == "none") {
                                ul.slideDown("fast");
                            } else {
                                ul.slideUp("fast");
                            }
                        } else {
                            var id = d3.select(this).attr('father');
                            var txt = old$(this).text();
                            old$("#cite" + id + ' a').html(txt);
                            var value = old$(this).attr("selectId");
                            //                    inputselect.val(value);
                            old$("#ul" + id).hide();
                            var d = {
                                fatherID: id,
                                selectID: value
                            };
                            changeOption(d);
                        }

                    })

                    .html(d.values[j]);
            }

            if (d.index == 3) {
                var subData = [{
                    'value': 1,
                    index: d.index,
                    text: '1 keyword'
                }, {
                    'value': 2,
                    index: d.index,
                    text: '2 keywords'
                }, {
                    'value': 3,
                    index: d.index,
                    text: '3 keywords'
                }];
                var textLength = '3 keywords'.visualLength(fontFamily, fontSize)
                var subUL = newLabelDiv.append('ul')
                    .attrs({
                        class: 'subUL',
                        id: 'subUL' + d.index + '_0'
                    })
                    .styles({
                        'margin-left': maxLabel + 20 + px,
                        width: textLength + 5 + px,
                        'display': 'none'
                    });
                var subDataF = [{
                    'value': 1,
                    index: d.index,
                    text: '1 keyword'
                }, {
                    'value': 2,
                    index: d.index,
                    text: '2 keywords'
                }, {
                    'value': 3,
                    index: d.index,
                    text: '3 keywords'
                }];
                var subULF = newLabelDiv.append('ul')
                    .attrs({
                        class: 'subUL',
                        id: 'subUL' + d.index + '_1'
                    })
                    .styles({
                        'margin-left': maxLabel + 20 + px,
                        width: textLength + 5 + px,
                        'display': 'none'
                    });
                subUL.selectAll('whatever').data(subData)
                    .enter()
                    .append('li')
                    .append('a')
                    .styles({
                        width: textLength + 5 + px,
                        height: '24px',
                        'line-height': '24px',
                        'font-family': 'Microsoft YaHei',
                        'font-size': 12 + px
                    })
                    .attrs({
                        selectId: 0,
                        father: function (e) {
                            return e.index;
                        },
                        labelLevel: function (e, i) {
                            return i;
                        }
                    })
                    .on('click', function (e, i) {
                        var id = d3.select(this).attr('father');
                        //var txt = old$(this).text();
                        old$("#cite" + id + ' a').html('Bigram keywords');
                        var value = old$(this).attr("selectId");
                        var level = parseInt(d3.select(this).attr('labelLevel'));
                        //                    inputselect.val(value);
                        old$("#subUL" + id + '_0').hide();
                        old$(".ul").hide();
                        var d = {
                            fatherID: id,
                            selectID: value
                        };
                        d3.selectAll('.labelLayer').selectAll('.tfidf').styles({
                            'visibility': 'hidden'
                        });
                        d3.selectAll('.labelLayer').selectAll('.freq').styles({
                            'visibility': null
                        });
                        d3.select('.tfidfSummary').style('display', 'none');
                        d3.select('.freqSummary').style('display', 'block');
                        tfidfStatus = 'none';
                        freqStatus = 'block';
                        if (level == 0) {
                            d3.selectAll('.labelLayer').selectAll('.FrequencyLevel1').styles({
                                'visibility': 'hidden'
                            });
                            d3.selectAll('.labelLayer').selectAll('.FrequencyLevel2').styles({
                                'visibility': 'hidden'
                            });
                        } else if (level == 1) {
                            d3.selectAll('.labelLayer').selectAll('.FrequencyLevel1').styles({
                                'visibility': null
                            });
                            d3.selectAll('.labelLayer').selectAll('.FrequencyLevel2').styles({
                                'visibility': 'hidden'
                            });
                        } else if (level == 2) {
                            d3.selectAll('.labelLayer').selectAll('.FrequencyLevel2  ').styles({
                                'visibility': null
                            });

                        }

                        changeOption(d);
                    })
                    //.on('mouseout',function(){
                    //    var id=d3.select(this).attr('father');
                    //    old$("#subUL"+id+'_0').hide();
                    //})
                    .html(function (e) {
                        return e.text
                    });
                subULF.selectAll('whatever').data(subDataF)
                    .enter()
                    .append('li')
                    .append('a')
                    .styles({
                        width: textLength + 5 + px,
                        height: '24px',
                        'line-height': '24px',
                        'font-family': 'Microsoft YaHei',
                        'font-size': 12 + px
                    })
                    .attrs({
                        selectId: 1,
                        father: function (e) {
                            return e.index;
                        },
                        labelLevel: function (e, i) {
                            return i;
                        }
                    })
                    .on('click', function (e, i) {
                        var id = d3.select(this).attr('father');
                        //var txt = old$(this).text();
                        old$("#cite" + id + ' a').html('TF-IDF keywords');
                        var value = old$(this).attr("selectId");
                        var level = parseInt(d3.select(this).attr('labelLevel'));
                        //                    inputselect.val(value);
                        old$("#subUL" + id + '_1').hide();
                        old$(".ul").hide();
                        var d = {
                            fatherID: id,
                            selectID: value
                        };

                        d3.selectAll('.labelLayer').selectAll('.freq').styles({
                            'visibility': 'hidden'
                        });
                        d3.selectAll('.labelLayer').selectAll('.tfidf').styles({
                            'visibility': null
                        });
                        d3.select('.tfidfSummary').style('display', 'block');
                        d3.select('.freqSummary').style('display', 'none');
                        tfidfStatus = 'block';
                        freqStatus = 'none';
                        if (level == 0) {
                            d3.selectAll('.labelLayer').selectAll('.TFIDFLevel1').styles({
                                'visibility': 'hidden'
                            });
                            d3.selectAll('.labelLayer').selectAll('.TFIDFLevel2').styles({
                                'visibility': 'hidden'
                            });
                        } else if (level == 1) {
                            d3.selectAll('.labelLayer').selectAll('.TFIDFLevel1').styles({
                                'visibility': null
                            });
                            d3.selectAll('.labelLayer').selectAll('.TFIDFLevel2').styles({
                                'visibility': 'hidden'
                            });
                        } else if (level == 2) {
                            d3.selectAll('.labelLayer').selectAll('.TFIDFLevel2').styles({
                                'visibility': null
                            });

                        }


                        changeOption(d);
                    })
                    //.on('mouseout',function(){
                    //    var id=d3.select(this).attr('father');
                    //    old$("#subUL"+id+'_1').hide();
                    //})
                    .html(function (e) {
                        return e.text
                    });
            }

            old$(document).click(function (d) {
                var target = d3.select(d.target);

                if (target.attr('class') != 'hasSub') {
                    old$(".ul").hide();
                    old$(".subUL").hide();
                }
            });
        });

    // sy option下拉菜单功能[结束]


    //draw searchDiv
    var buttonWidth = 20;
    var buttonHeight = 20;
    var inputWidth = 120;
    var inputHeight = 20;
    var searchDivWidth = inputWidth + buttonWidth;

    var clusterSizeList = ['5', '10', '15', '20', '25', '30', '35', '40'];
    var ruler = d3.select('.ruler')
        .styles({
            'font-family': 'Microsoft YaHei',
            'font-size': '12px',
            'color': 'white'
        });
    fontFamily = 'Microsoft YaHei';
    fontSize = 12;
    var radioLength = 13;
    var filterWidth = (radioLength + 0.01 * middleWidth + 0.04 * middleWidth) * 4 + '10204080'.visualLength(fontFamily, fontSize) + 3;
    fontFamily = 'Microsoft YaHei';
    fontSize = 12;
    var directionText = ['Flip-book', 'Movie'];
    currentDirection = 'horizontal';
    //    var directionHeight=d3.max([directionText[0].visualHeight(fontFamily,fontSize),directionText[1].visualHeight(fontFamily,fontSize)]);
    var directionHeight = bottomControlHeight * 0.7;
    var directionDivMiddleLineWidth = 1;
    //    var directionDivWidth=directionText[0].visualLength(fontFamily,fontSize)+0.04*middleWidth+directionText[1].visualLength(fontFamily,fontSize)+directionDivMiddleLineWidth+3;
    var directionDivWidth = middleWidth * 0.20;
    var bottomOptionDiv = bottomControlDiv.append('div').attr('class', 'bottomOptionDiv');
    var directionDiv = bottomOptionDiv.append('div')
        .attrs({
            class: 'directionDiv'
        })
        .styles({
            float: 'left',
            width: directionDivWidth + px,
            height: directionHeight + px,
            //'margin-left': 0.5 * (middleWidth - directionDivWidth) + px,
            'margin-top': 0.15 * bottomControlHeight + px
        });

    var horizontalDiv = directionDiv.append('div')
        .attrs({
            cursor: "hand",
            class: 'flipBookModeDiv'
        })
        .styles({
            float: 'left',
            //            width:directionText[0].visualLength(fontFamily,fontSize)+px,
            width: directionDivWidth / 2 + px,
            height: directionHeight + px,
            background: color.buttonStyle.on.div,

            'line-height': directionHeight + px
        })
        .on('click', function () {
            leftLayer.changeAnimateMode();
            rightLayer.changeAnimateMode();
        })
        .append('text')
        .attr('class', 'flipBookModeText')
        .attr('style', 'cursor: pointer; fill: rgb(0, 0, 0);')
        .styles({
            'margin-left': (directionDivWidth / 2 - directionText[0].visualLength(fontFamily, fontSize)) / 2 + px,
            'font-family': 'Microsoft YaHei',
            'font-size': '12px',
            'color': color.buttonStyle.on.text

        })
        .html(directionText[0]);

    // movie效果按钮
    var verticalDiv = directionDiv.append('div')
        .attrs({
            class: 'movieModeDiv'
        })
        .styles({
            float: 'left',
            height: directionHeight + px,
            //            width:directionText[1].visualLength(fontFamily,fontSize)+px,
            width: directionDivWidth / 2 + px,
            background: color.buttonStyle.off.div,
            'line-height': directionHeight + px
        })
        .on('click', function () {
            leftLayer.changeAnimateMode();
            rightLayer.changeAnimateMode();
        })
        .append('text')
        .attr('class', 'movieModeText')
        .attr('style', 'cursor: pointer; fill: rgb(0, 0, 0);')
        .styles({
            'margin-left': (directionDivWidth / 2 - directionText[1].visualLength(fontFamily, fontSize)) / 2 + px,
            'font-family': 'Microsoft YaHei',
            'font-size': '12px',
            'color': color.buttonStyle.off.text
        })
        .html(directionText[1]);

    //var screenDiv = bottomOptionDiv.append('div').attr('class', 'screenDiv')
    //    .attr('style', 'cursor: pointer; fill: rgb(0, 0, 0);')
    //    .styles({
    //        height: bottomControlHeight + px,
    //        'line-height': bottomControlHeight + px,
    //        float: 'right',
    //        'margin-right': 15 + px
    //    });
    //screenDiv.append('text')
    //    .attr('class', 'relayoutButton')
    //    .styles({
    //        'color': color.screenTextColor,
    //        'font-family': 'Microsoft YaHei',
    //        'font-size': 12 + px,
    //        'margin-right': 15 + px
    //    })
    //    .html('reLayout')
    //
    //    .on('click', function () {
    //        leftLayer.reLayoutFlowMap();
    //        rightLayer.reLayoutFlowMap();
    //    });
    //screenDiv.append('text')
    //    .attr('isFullScreen', 0)
    //    .styles({
    //        'color': color.screenTextColor,
    //        'font-family': 'Microsoft YaHei',
    //        'font-size': 12 + px
    //    })
    //    .html('fullScreen')
    //    .on('click', function (d) {
    //        var thisText = d3.select(this);
    //        var isFullScreen = parseInt(thisText.attr('isFullScreen'));
    //        if (isFullScreen) {
    //            thisText.attr('isFullScreen', 0);
    //            thisText.html('fullScreen');
    //            recoverScreen();
    //        }
    //        else {
    //            thisText.attr('isFullScreen', 1);
    //            thisText.html('recover');
    //            fullScreen();
    //        }
    //    });


    leftLayer.axisSVG = authorDiv_left.append('svg').attr('class', 'axisSVG axisSVG_left')
    rightLayer.axisSVG = authorDiv_right.append('svg').attr('class', 'axisSVG axisSVG_right')

    //axisSVG_left=authorDiv_left.append('svg').attr('class','axisSVG axisSVG_left')
    //axisSVG_right=authorDiv_right.append('svg').attr('class','axisSVG axisSVG_right')
    optionNumber = {
        "nodeLabelOption": 0,
        "edgeLabelOption": 0,
        "edgeThicknessOption": 0,
        "style": 'dark',
        "clusterNum": 20,
        "edgeFilter": 0
    };

    // 左图画布添加部分
    leftLayer.svg = graphDiv_left.append('svg')
        .attr('class', 'svg svg_left')
        .on('click', function () {
            if (d3.select(d3.event.target).attr('class') && d3.select(d3.event.target).attr('class').split(' ')[0] == 'svg') {
                //                alert('svg')
                var data = leftLayer.data;
                var currentEdgeSourceTargetDic = leftLayer.currentEdgeSourceTargetDic;
                var focusedID = leftLayer.focusedID;
                d3.selectAll('.clicked')
                    .each(function (d) {
                        if (d.self) {
                            d.self.style('fill', function (d) {
                                return "url(#linearGradient" + d.id + ")"
                            });
                            d.self.style('stroke', color.nodeHighlightStroke);
                            d.self.style('stroke-width', '0px');
                            d.self.attr('class', 'node');
                            d.clicked = false;
                        }

                    });
                d3.selectAll('.subYearPath').remove();
                d3.select('.edgeField').selectAll('path')
                    .style('stroke', color.edgeColor)
                    .each(function (d) {
                        if (d.marker) d.marker.style('fill', color.markerColor);
                        if (d.highlightedByNodeDic) delete d.highlightedByNodeDic;
                    });

                d3.selectAll('.label').style('fill', color.nodeLabelColor);
                if (data.postData[focusedID].subNodeYearData) {
                    var subNodeYearData = data.postData[focusedID].subNodeYearData;
                    for (var i = 0; i < subNodeYearData.length; i++) {
                        subNodeYearData[i][1] = 0;
                    }
                }
                for (var key in currentEdgeSourceTargetDic) {
                    if (currentEdgeSourceTargetDic[key].highlightedByNodeDic) {
                        delete currentEdgeSourceTargetDic[key].highlightedByNodeDic;
                    }
                }
            }
        });

    rightLayer.svg = graphDiv_right.append('svg')
        .attr('class', 'svg svg_right')
        .on('click', function () {
            var data = rightLayer.data;
            var currentEdgeSourceTargetDic = rightLayer.currentEdgeSourceTargetDic;
            var focusedID = rightLayer.focusedID;
            if (d3.select(d3.event.target).attr('class') && d3.select(d3.event.target).attr('class').split(' ')[0] == 'svg') {
                //                alert('svg')
                d3.selectAll('.clicked')
                    .each(function (d) {
                        if (d.self) {
                            d.self.style('fill', function (d) {
                                return "url(#linearGradient" + d.id + ")"
                            });
                            d.self.style('stroke', color.nodeHighlightStroke);
                            d.self.style('stroke-width', '0px');
                            d.self.attr('class', 'node');
                            d.clicked = false;
                        }

                    });
                d3.selectAll('.subYearPath').remove();
                d3.select('.edgeField').selectAll('path')
                    .style('stroke', color.edgeColor)
                    .each(function (d) {
                        if (d.marker) d.marker.style('fill', color.markerColor);
                        if (d.highlightedByNodeDic) delete d.highlightedByNodeDic;
                    });

                d3.selectAll('.label').style('fill', color.nodeLabelColor);
                if (data.postData[focusedID].subNodeYearData) {
                    var subNodeYearData = data.postData[focusedID].subNodeYearData;
                    for (var i = 0; i < subNodeYearData.length; i++) {
                        subNodeYearData[i][1] = 0;
                    }
                }
                for (var key in currentEdgeSourceTargetDic) {
                    if (currentEdgeSourceTargetDic[key].highlightedByNodeDic) {
                        delete currentEdgeSourceTargetDic[key].highlightedByNodeDic;
                    }
                }
            }
        });

    leftLayer.svgLayer = leftLayer.svg.append('g');
    rightLayer.svgLayer = rightLayer.svg.append('g');
    leftLayer.svg.attrs({
        width: middleWidth,
        height: graphDivHeight
    });
    rightLayer.svgLayer.attrs({
        width: middleWidth,
        height: graphDivHeight
    });

    [leftLayer, rightLayer].forEach(function (layer) {
        var svgLayer = layer.svgLayer;
        var gBackground = svgLayer.append('g');
        var svgBackground = gBackground
            .attr('class', 'background')
            .append('rect')
            .attrs({
                width: middleWidth,
                height: graphDivHeight
            })
            .styles({
                fill: 'transparent',
                cursor: '-webkit-grab'
            })
            .on('click', function () {
                var data = layer.data;
                var currentEdgeSourceTargetDic = layer.currentEdgeSourceTargetDic;
                var focusedID = layer.focusedID;
                d3.selectAll('.clicked')
                    .each(function (d) {
                        if (d.self) {
                            d.self.style('fill', function (d) {
                                return "url(#linearGradient" + d.id + ")"
                            });
                            d.self.style('stroke', color.nodeHighlightStroke);
                            d.self.style('stroke-width', '0px');
                            d.self.attr('class', 'node');
                            d.clicked = false;
                        }

                    });
                d3.selectAll('.subYearPath').remove();
                d3.select('.edgeField').selectAll('path')
                    .style('stroke', color.edgeColor)
                    .each(function (d) {
                        if (d.marker) d.marker.style('fill', color.edgeColor);
                        if (d.highlightedByNodeDic) delete d.highlightedByNodeDic;
                    });

                d3.selectAll('.label').style('fill', color.nodeLabelColor);

                for (var key in currentEdgeSourceTargetDic) {
                    if (currentEdgeSourceTargetDic[key].highlightedByNodeDic) {
                        delete currentEdgeSourceTargetDic[key].highlightedByNodeDic;
                    }
                }

            });
        layer.background = svgBackground;
        layer.gBackground = gBackground;
    });
    leftLayer.legend_g = leftLayer.svgLayer.append('g')
        .attrs({
            class: 'legendDrawer legendDrawer_left'
        });
    rightLayer.legend_g = rightLayer.svgLayer.append('g')
        .attrs({
            class: 'legendDrawer legendDrawer_right'
        });
    leftLayer.svg_g = leftLayer.svgLayer.append('g')
        .attrs({
            class: 'svgDrawer svgDrawer_left'
        });
    rightLayer.svg_g = rightLayer.svgLayer.append('g')
        .attrs({
            class: 'svgDrawer svgDrawer_right'
        });
    leftLayer.time_g = leftLayer.svgLayer.append('g')
        .attrs({
            class: 'yearBackground yearBackground_left'
        });
    rightLayer.time_g = rightLayer.svgLayer.append('g')
        .attrs({
            class: 'yearBackground yearBackground_right'
        });



    leftLayer.size = {
        width: leftLayer.svg.attr("width") * 0.9,
        height: leftLayer.svg.attr("height") * 1
    };
    rightLayer.size = {
        width: rightLayer.svg.attr("width") * 0.9,
        height: rightLayer.svg.attr("height") * 1
    };


    var clusterSummaryDiv = rightContentDiv.append('div').attr('class', 'clusterSummaryDiv');
    var nodeListDiv = rightContentDiv.append('div').attr('class', 'nodeListDiv');

    var nodeValueDiv = leftAndTransitionContentDiv.append('div').attr('class', 'nodeValueDiv');

    CSDTitleDiv = clusterSummaryDiv.append('div').attr('class', 'CSDTitleDiv');
    CSDBodyDiv = clusterSummaryDiv.append('div').attr('class', 'CSDBodyDiv');

    //    CSDTitleDiv.append('text').html('<b>Selected Group</b>'+'<br>');

    var nodeList = d3.select('.nodeListDiv');
    NLDTitleDiv = nodeList.append('div').attr('class', 'NLDTitleDiv');
    NLDBodyDiv = nodeList.append('div').attr('class', 'NLDBodyDiv');

    //    NLDTitleDiv.append('text').html('<b>Selected Papers</b>'+'<br>');
    var nodeValue = d3.select('.nodeValueDiv');
    var NVDTitleDiv = nodeValue.append('div').attr('class', 'NVDTitleDiv');
    var NVDBodyDiv = nodeValue.append('div').attr('class', 'NVDBodyDiv');

    //    NVDTitleDiv.append('text').html('<b>Details</b>');


    leftLayer.initFrameIndex(0);
    rightLayer.initFrameIndex(0);
    //    drawselfedges=svg_g.append('g').attr('class','selfEdgeG');


    initAuthorData();

}

function nodeSizeBrushed() {

}

function initFullScreenAndSizeBar() {
    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;
    svgWidth = leftLayer.svg.style('width').toFloat();
    svgHeight = leftLayer.svg.style('height').toFloat();
    svgLayer = leftLayer.svgLayer;
    tranShiftHeight = 40;
    tranShiftWidth = 150;
    fullShiftHeight = 30;
    fullShiftWidth = 30;
    //legendShiftWidth=0;
    nodeOpacityOption = 'uniform';
    legendShiftHeight = 120;

    legendTranWidth = 40;
    legendTranHeight = svgHeight - legendShiftHeight;

    tranHeight = svgHeight - tranShiftHeight;
    tranWidth = svgWidth - tranShiftWidth;
    fullScreenButtonTranWidth = svgWidth - fullShiftWidth;
    fullScreenButtonTranHeight = svgHeight - fullShiftHeight;
    gFullScreen = svgLayer.append('g').attr('class', 'gFullScreen');
    gSizeBar = svgLayer
        .append('g')
        .attrs({
            class: 'gSizeBar'
        });
    gEdgeSizeBar = svgLayer.append('g')
        .attrs({
            class: 'gEdgeSizeBar'
        });
    gSizeBarBrush = svgLayer.append("g")
        .attr("class", "gSizeBarBrush");
    gEdgeSizeBarBrush = svgLayer.append("g")
        .attr("class", "gEdgeSizeBarBrush");
    var x = d3.scaleLinear()
        .domain([0, 50])
        .range([0, 100]);
    var x1 = d3.scaleLinear()
        .domain(eDomain[edgeThickNessOption])
        .range([0, 100]);

    var xAxis = d3.axisBottom(x).ticks(0);
    var xAxis1 = d3.axisBottom(x1).ticks(0);
    currentLayer.edgeAxisX = x1;
    currentLayer.edgeAxis = xAxis1;
    currentLayer.edgeBrush = edgeBrush;
    var edgeBrushed = function () {
        var s = d3.event.selection;
        var t = s.map(currentLayer.edgeAxisX.invert);
        eMin[edgeThickNessOption] = t[0];
        eMax[edgeThickNessOption] = t[1];
        requestData();

    };
    currentLayer.edgeBrushed = edgeBrushed;
    var brushed = function () {
        var s = d3.event.selection;
        var t = s.map(x.invert);
        dMin = t[0];
        dMax = t[1];
        currentLayer.sizeScale = new SizeScale(currentLayer.maxSize);
        var svg = currentLayer.svg;
        var layer = svg.select('.svgDrawer');
        var k = currentLayer.zoomK || 1;
        var sizeScale = currentLayer.sizeScale.sizeScale;
        if (sizeScale) {
            layer.selectAll('.node')
                .attr('r', function (d) {
                    d.nodeR = sizeScale(d.newSize);
                    return d.nodeR / k;
                });
            layer.selectAll('.size')
                .style('font-size', function (d) {
                    d.fontSize = (dMax + dMin - 8) / 2;
                    return d.fontSize / k;
                })
                .attrs({
                    y: function (d) {
                        d.nodeSizeTextShiftY = (dMax + dMin - 8) / 4;
                        return d.y + d.nodeSizeTextShiftY / k;
                    }
                });
            layer.selectAll('.label')
                .styles({
                    'font-size': function (d) {
                        d.fontSize = (dMax + dMin - 8) / 2;
                        return d.fontSize / k;
                    }
                })
                .each(function (d) {
                    var thisLabel = d3.select(this);
                    var indexStr = thisLabel.attr('index');
                    var prefix = indexStr.split('_')[0];
                    var index = indexStr.split('_')[1];
                    thisLabel.attrs({
                        y: d.y + d[prefix + 'Y'][index] / initDMax * (dMax + dMin - 8) / k
                    });
                });
        }
    };
    var brush = d3.brushX()
        .extent([
            [0, -5],
            [100, 5]
        ])
        .on("brush", brushed);

    var edgeBrush = d3.brushX()
        .extent([
            [0, -5],
            [100, 5]
        ])
        .on("end", edgeBrushed);
    gSizeBar.call(xAxis);
    gEdgeSizeBar.call(xAxis1);

    gSizeBar.append('text')
        .attrs({
            x: -'Node Size'.visualLength() / 2 - 5,
            y: 5
        })
        .styles({
            fill: color.fullScreenButtonColor,
            'font-size': 12
        })
        .html('Node Size');
    gEdgeSizeBar.append('text')
        .attrs({
            x: -'Link Thickness'.visualLength() / 2 - 5,
            y: 5
        })
        .styles({
            fill: color.fullScreenButtonColor,
            'font-size': 12
        })
        .html('Link Thickness');

    gSizeBar.select('.domain').style('stroke', color.fullScreenButtonColor);
    gEdgeSizeBar.select('.domain').style('stroke', color.fullScreenButtonColor);

    gSizeBarBrush.call(brush).call(brush.move, [x(dMin), x(dMax)]);
    gEdgeSizeBarBrush.call(edgeBrush).call(edgeBrush.move, [x1(eMin[edgeThickNessOption]), x1(eMax[edgeThickNessOption])]);

    fullScreenState = 0;
}

function fullScreen(obj) {
    if (obj.requestFullscreen) {
        obj.requestFullscreen();
    } else if (obj.mozRequestFullScreen) {
        obj.mozRequestFullScreen();
    } else if (obj.webkitRequestFullScreen) {
        obj.webkitRequestFullScreen();
    }
    obj.style.backgroundColor = color.svgColor;
}

function quitFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    }
}

function gTranslation() {
    gSizeBar.attr('transform', 'translate(' + (tranWidth) + ',' + (tranHeight) + ')');
    gEdgeSizeBar.attr('transform', 'translate(' + (tranWidth) + ',' + (tranHeight + 20) + ')');
    gSizeBarBrush.attr("transform", 'translate(' + (tranWidth) + ',' + (tranHeight) + ')');
    gEdgeSizeBarBrush.attr("transform", 'translate(' + (tranWidth) + ',' + (tranHeight + 20) + ')');
    gFullScreen.attr('transform', 'translate(' + fullScreenButtonTranWidth + ',' + fullScreenButtonTranHeight + ')');
    currentLayer.svg.select('.excalibur').attr('transform', 'translate(' + (tranWidth) + ',' + (tranHeight + 10) + ')');
    currentLayer.svg.select('.animation').attr('transform', 'translate(' + ((tranWidth + tranShiftWidth) / 2) + ',' + (tranHeight) + ')');
    currentLayer.svg.select('.legendDrawer').attr('transform', 'translate(' + legendTranWidth + ',' + (legendTranHeight) + ')');
}


function drawFullScreenIcon(g, x, y) {
    var svg = leftLayer.svg;
    document.addEventListener("fullscreenchange", function () {
        fullScreenState = (document.webkitIsFullScreen) ? 1 : 0;
        gButton.selectAll('.gPart')
            .attr('transform', function (e) {
                return 'translate(' + (e.translate.x) + ',' + (e.translate.y) + ') rotate(' + ((fullScreenState) * 180) + ',' + (e.rotate.x) + ',' + (e.rotate.y) + ')'
            });
        currentLayer.svg.call(currentLayer.svgZoom.transform, d3.zoomIdentity
            .scale(width / svgWidth * fullScreenState + (1 - fullScreenState))
            .translate(0, 0));
        legendTranHeight = (svgHeight - legendShiftHeight) * (1 - fullScreenState) + (height - legendShiftHeight) * fullScreenState;
        tranHeight = (svgHeight - tranShiftHeight) * (1 - fullScreenState) + (height - tranShiftHeight) * fullScreenState;
        tranWidth = (svgWidth - tranShiftWidth) * (1 - fullScreenState) + (width - tranShiftWidth) * fullScreenState;
        fullScreenButtonTranWidth = (svgWidth - fullShiftWidth) * (1 - fullScreenState) + (width - fullShiftWidth) * fullScreenState;
        fullScreenButtonTranHeight = (svgHeight - fullShiftHeight) * (1 - fullScreenState) + (height - fullShiftHeight) * fullScreenState;
        gTranslation();
    }, false);
    document.addEventListener("mozfullscreenchange", function () {
        fullScreenState = (document.webkitIsFullScreen) ? 1 : 0;
        gButton.selectAll('.gPart')
            .attr('transform', function (e) {
                return 'translate(' + (e.translate.x) + ',' + (e.translate.y) + ') rotate(' + ((fullScreenState) * 180) + ',' + (e.rotate.x) + ',' + (e.rotate.y) + ')'
            });
        currentLayer.svg.call(currentLayer.svgZoom.transform, d3.zoomIdentity
            .scale(width / svgWidth * fullScreenState + (1 - fullScreenState))
            .translate(0, 0));
        legendTranHeight = (svgHeight - legendShiftHeight) * (1 - fullScreenState) + (height - legendShiftHeight) * fullScreenState;
        tranHeight = (svgHeight - tranShiftHeight) * (1 - fullScreenState) + (height - tranShiftHeight) * fullScreenState;
        tranWidth = (svgWidth - tranShiftWidth) * (1 - fullScreenState) + (width - tranShiftWidth) * fullScreenState;
        fullScreenButtonTranWidth = (svgWidth - fullShiftWidth) * (1 - fullScreenState) + (width - fullShiftWidth) * fullScreenState;
        fullScreenButtonTranHeight = (svgHeight - fullShiftHeight) * (1 - fullScreenState) + (height - fullShiftHeight) * fullScreenState;
        gTranslation();
    }, false);
    document.addEventListener("webkitfullscreenchange", function () {
        fullScreenState = (document.webkitIsFullScreen) ? 1 : 0;
        gButton.selectAll('.gPart')
            .attr('transform', function (e) {
                return 'translate(' + (e.translate.x) + ',' + (e.translate.y) + ') rotate(' + ((fullScreenState) * 180) + ',' + (e.rotate.x) + ',' + (e.rotate.y) + ')'
            });

        currentLayer.svg.call(currentLayer.svgZoom.transform, d3.zoomIdentity
            .scale(width / svgWidth * fullScreenState + (1 - fullScreenState))
            .translate(0, 0));
        //adjustLayer(width/svgWidth);
        //currentLayer.svgLayer.select('.background').attr('transform','translate('+(100)+','+(100)+')scale('+width/svgWidth+')')
        //currentLayer.svgLayer.select('.svgDrawer').attr('transform','translate('+(100)+','+(100)+')scale('+width/svgWidth+')')

        legendTranHeight = (svgHeight - legendShiftHeight) * (1 - fullScreenState) + (height - legendShiftHeight) * fullScreenState;
        tranHeight = (svgHeight - tranShiftHeight) * (1 - fullScreenState) + (height - tranShiftHeight) * fullScreenState;
        tranWidth = (svgWidth - tranShiftWidth) * (1 - fullScreenState) + (width - tranShiftWidth) * fullScreenState;
        fullScreenButtonTranWidth = (svgWidth - fullShiftWidth) * (1 - fullScreenState) + (width - fullShiftWidth) * fullScreenState;
        fullScreenButtonTranHeight = (svgHeight - fullShiftHeight) * (1 - fullScreenState) + (height - fullShiftHeight) * fullScreenState;
        gTranslation();
    }, false);
    document.addEventListener("msfullscreenchange", function () {
        fullScreenState = (document.webkitIsFullScreen) ? 1 : 0;
        gButton.selectAll('.gPart')
            .attr('transform', function (e) {
                return 'translate(' + (e.translate.x) + ',' + (e.translate.y) + ') rotate(' + ((fullScreenState) * 180) + ',' + (e.rotate.x) + ',' + (e.rotate.y) + ')'
            });
        currentLayer.svg.call(currentLayer.svgZoom.transform, d3.zoomIdentity
            .scale(width / svgWidth * fullScreenState + (1 - fullScreenState))
            .translate(0, 0));
        legendTranHeight = (svgHeight - legendShiftHeight) * (1 - fullScreenState) + (height - legendShiftHeight) * fullScreenState;
        tranHeight = (svgHeight - tranShiftHeight) * (1 - fullScreenState) + (height - tranShiftHeight) * fullScreenState;
        tranWidth = (svgWidth - tranShiftWidth) * (1 - fullScreenState) + (width - tranShiftWidth) * fullScreenState;
        fullScreenButtonTranWidth = (svgWidth - fullShiftWidth) * (1 - fullScreenState) + (width - fullShiftWidth) * fullScreenState;
        fullScreenButtonTranHeight = (svgHeight - fullShiftHeight) * (1 - fullScreenState) + (height - fullShiftHeight) * fullScreenState;
        gTranslation();
    }, false);
    var gButton = g.append('g');

    var l = 6;
    var w = 14;
    var xs = [-w, w];
    var ys = [-w, w];
    var gBody = gButton.append('g')
        .attr('class', 'gBody');
    gBody.append('rect')
        .datum({
            rotate: 0
        })
        .attrs({
            x: -w,
            y: -w,
            width: w * 2,
            height: w * 2
        })
        .styles({
            fill: 'transparent',
            cursor: 'hand'
        })
        .on('click', function (d) {
            svg.attr('id', 'fullScreenSVG');
            var full = document.getElementById("fullScreenSVG");

            if (!fullScreenState) {
                fullScreen(full);
                svg.styles({
                    width: width + px,
                    height: height + px
                });
            } else {
                quitFullScreen();
            }
            d.rotate = 1 - d.rotate;

        });

    xs.forEach(function (x) {
        ys.forEach(function (y) {
            var dx = w / x;
            var dy = w / y;
            var gPart = gButton.append('g')
                .datum({
                    translate: {
                        x: x,
                        y: y
                    },
                    rotate: {
                        r: 0,
                        x: l * dx * -1,
                        y: l * dy * -1
                    }
                })
                .attr('class', 'gPart')
                .attr('transform', function (d) {
                    return 'translate(' + (d.translate.x) + ',' + (d.translate.y) + ') rotate(' + (d.rotate.r) + ',' + (d.rotate.x) + ',' + (d.rotate.y) + ')'
                });

            var p = {
                x: dx * l / 2 * -1,
                y: dy * l / 2 * -1
            };
            var p1 = {},
                p2 = {};
            p1.y = p.y;
            p2.x = p.x;
            p1.x = p.x + l * dx * -1;
            p2.y = p.y + l * dy * -1;
            var lines = [{
                p1: p,
                p2: p1
            }, {
                p1: p,
                p2: p2
            }];
            gPart.selectAll('whatever')
                .data(lines)
                .enter()
                .append('path')
                .attr('d', function (d) {
                    return 'M' + d.p1.x + ',' + d.p1.y + 'L' + d.p2.x + ',' + d.p2.y;
                })
                .styles({
                    'stroke-width': '2px',
                    'stroke': color.fullScreenButtonColor
                })
        })
    })
}

function initFrameIndex(index) {
    var that = this;
    var gData = [{
            class: 'outer edgeG',
            id: index,
            index: index
        },
        {
            class: 'outer nodeG',
            id: index,
            index: index
        }
    ];
    var newG = that.svg_g.selectAll('whatever')
        .data(gData)
        .enter()
        .append('g')
        .attrs({
            class: function (d) {
                return d.class
            },
            index: function (d) {
                return d.index
            },
            id: function (d) {
                return d.class.split(' ')[1] + d.id
            }
        });

    that.drawedges = that.svg_g.select('#edgeG' + index);
    that.drawnodes = that.svg_g.select('#nodeG' + index);
}

function ClassSVG(svgFather) {
    this.svg = svgFather.append('svg');

    this.layout = function (svg) {
        drawTitles = svg_g.append('g').attr('class', 'title');
        drawnodes = svg_g.append('g').attr('class', 'node');
        drawedges = svg_g.append('g').attr('class', 'edge');
    }
}

function in_array(stringToSearch, arrayToSearch) {
    for (s = 0; s < arrayToSearch.length; s++) {
        thisEntry = arrayToSearch[s].toString();
        if (thisEntry == stringToSearch) {
            return true;
        }
    }
    return false;
}

function Node(node, x, y) {
    if (node.id) this.id = node.id;
    if (node.keywords) this.keywords = node.keywords;
    if (node.bigrams) this.bigrams = node.bigrams;
    else this.bigrams = node.keywords;
    if (node.onegram) this.onegram = node.onegram;
    else this.onegram = node.keywords;
    if (node.frequencyKeywords) this.frequencyKeywords = node.frequencyKeywords;
    if (node.focus) this.focus = node.focus;
    if (node.nodeidlist) this.nodeidlist = node.nodeidlist;
    if (node.author) this.author = node.author;
    if (node.focused) this.focused = node.focused;
    if (node.summary) this.summary = node.summary;
    if (node.title) this.title = node.title;
    if (node.venue) this.venue = node.venue;
    if (node.citation) this.citation = node.citation;
    if (x) this.x = x;
    else this.x = node.x;
    if (y) this.y = y;
    else this.y = node.y;
    this.topShift = 0;
    this.bottomShift = 0;
    this.topShiftIn = 0;
    this.topShiftOut = 0;
    this.bottomShiftIn = 0;
    this.bottomShiftOut = 0;
    this.edgeShiftDic = {};
    this.move = function (node, dx, dy) {
        return new Node(node, this.x - dx, this.y - dy);
    }
}

function Point(x, y) {
    this.x = x;
    this.y = y;
    this.move = function (dx, dy) {
        return new Point(this.x - dx, this.y - dy);
    }
}

function layer() {
    this.data = {
        sourceData: {},
        postData: {},
        timeData: {}
    };
    this.preFocusedID = '';
    this.focusedID = '';
    this.maxYear = 1900;
    this.minYear = 2100;
    this.graphData = {};
    this.selectedCluster = 5;
    this.tmpNodes = {};
    this.tmpCurves = {};
    this.requestMethod = 'ajax';
    //this.SizeScale=SizeScale();
    this.edgeLabelElem = [];
    this.pathElem = [];
    this.textElem = [];
    this.idElem = [];
    this.selfEdgeElem = [];
    this.selfEdgeLabelElem = [];
    this.animateMode = 'flipBook';
    this.yearDelay = 2000;

    this.clusterCount = initCluster;
    this.edgeDuration = 1000;
    this.selectedInput = 0;
    this.selectedReverse = 0;
    this.inputClicked = [1, 0, 0, 0];
    this.transitionFlag = false;
    this.relationship = {
        newrelation: function () {
            var relation = {};
            relation.nodeid = null;
            relation.edges = [];
            return relation
        }
    };

    this.sourceTextDic = {
        'aminerV8': 'AMiner',
        'citeseerx': 'CiteseerX',
        'twitter': 'Twitter'
    };
    this.nodes = [];
    this.duration = 5000;
    this.edges = [];
    this.edgeid = 0;
    this.relation = [];
    this.handleRadius = 8;
    this.curves = [];
    this.directionFlag = true;
    //    method='mst';
    this.method = 'recoveryWeight';
    //    method='filterFlow';
    //    method = 'origin';
    this.requestMethod = 'ajax';
    this.ifDrag = false;
    this.ifInitLayout = true;
    this.ifTemporal = false;
    this.drawAnimateControlPanel = drawAnimateControlPanel;
    this.layout = layout;
    this.preLayout = preLayout;
    this.filterDataByYear = filterDataByYear;
    this.drawNodeYearDataSet = drawNodeYearDataSet;
    this.axisLayout = axisLayout;
    this.drawYearAxis = drawYearAxis;
    this.processData = processData;
    this.dataPreProcess = dataPreProcess;
    this.calculateEdgeCitation = calculateEdgeCitation;
    this.linkPruning = linkPruning;
    this.updateData = updateData;
    this.reCalculateLayout = reCalculateLayout;
    this.getYearData = getYearData;
    this.coordinateOffset = coordinateOffset;
    this.calculateFlowMap = calculateFlowMap;
    this.temporalSummarization = temporalSummarization;
    this.getTemporalData = getTemporalData;
    this.setInitNodeTransition = setInitNodeTransition;
    this.setInitEdgeTransition = setInitEdgeTransition;
    this.getRelation = getRelation;
    this.removeSVGElements = removeSVGElements;
    this.drawBackgroundYear = drawBackgroundYear;
    this.drawEdges = drawEdges;
    this.drawLabels = drawLabels;
    this.drawNodes = drawNodes;
    this.drawSize = drawSize;
    this.drawLegends = drawLegends;
    this.drawEdgeLabel = drawEdgeLabel;
    this.drawSelfEdgeLabel = drawSelfEdgeLabel;
    this.drawSelfEdge = drawSelfEdge;
    this.pathData = pathData;
    this.nodeClick = nodeClick;
    this.recoveryPath = recoveryPath;
    this.highlightPath = highlightPath;
    this.mouseover = mouseover;
    this.mouseout = mouseout;
    this.clusterSummary = clusterSummary;
    this.nodeList = nodeList;
    this.setNodeTransition = setNodeTransition;
    this.getYearEdgeRelation = getYearEdgeRelation;
    this.getStrokeWidth = getStrokeWidth;
    this.requestTitleList = requestTitleList;
    this.updateAnimation = updateAnimation;
    this.cloneIngoreList = cloneIngoreList;
    this.yearAxisTransition = yearAxisTransition;

    // changeAnimateMode函数和changeToMovieMode函数定义在哪里？
    this.changeAnimateMode = changeAnimateMode;
    this.changeToMovieMode = changeToMovieMode;
    this.changeToFlipBookMode = changeToFlipBookMode;
    this.greyBackground = greyBackground;
    this.removeEdges = removeEdges;
    this.removeAnimation = removeAnimation;
    this.reLayoutFlowMap = reLayoutFlowMap;
    this.dataSourceVisibility = 'hidden';
    this.initFrameIndex = initFrameIndex;
    this.nodeList = nodeList;
    this.nodeValue = nodeValue;

    this.minNodeSize = 5;
    this.maxNodeSize = 30;
    this.zoomK = 1;
    console.time()
}

function initVariable() {
    sourceCheckedStatus = {
        left: true,
        right: false
    };
    px = 'px';
    cloneIngoreList = ['parent', 'parents', 'child', 'children', 'parentNode', 'that', 'midTargetEdge', 'sourceNodes', 'targetNodes', 'self', 'marker'];
    initDMax = 30;
    initDMin = 8;

    nodeOpacityMin = 0.5;
    nodeOpacityMax = 1;

    initEMax = {
        flowStrokeWidth: 6,
        citationStrokeWidth: 1.3
    };
    initEMin = {
        flowStrokeWidth: 2,
        citationStrokeWidth: 0.8
    };

    dMin = 8;
    dMax = 30;

    eMax = {
        flowStrokeWidth: 6,
        citationStrokeWidth: 1.3
    };
    eMin = {
        flowStrokeWidth: 2,
        citationStrokeWidth: 0.8
    };

    edgeThickNessOption = 'flowStrokeWidth';
    eDomain = {
        flowStrokeWidth: [1, 10],
        citationStrokeWidth: [0.1, 1.5]
    };

    minMax = 30;
    db1 = 'aminerV8';
    db2 = 'citeseerx';
    //sizeScale=new SizeScale();
    initCluster = '20';
    // sy 页面主视图的layer
    leftLayer = new layer();
    rightLayer = new layer();
    timer = 'timer';
    leftLayer.source = db1;
    leftLayer.position = 'left';
    leftLayer.ifLayout = true;
    leftLayer.thatLayer = rightLayer;
    rightLayer.source = db2;
    rightLayer.position = 'right';
    rightLayer.ifLayer = false;
    rightLayer.thatLayer = leftLayer;
    flipBook = 'flipBook';
    movie = 'movie';
    method = 'recoveryWeight';
    clusterCount = '20';
    colorStyle = 'dark';
    currentLayer = leftLayer;
    dataID = {};
    tfidfStatus = 'none';
    freqStatus = 'block';
    var source = getUrlParam('source');
    if (source) {
        var sources = source.split('_');
        sources.forEach(function (item, i) {
            if (item) {
                dataID[item] = getUrlParam(item + '_id')
            }

        });
    }

    isFirstRequest = true;


}

/**
 * 三处待修改工作
 * 
 * 1. 根据 reference 过滤节点
 * 2. 根据 cluster 个数过滤节点
 * 3. 右栏详情页调整（没记清具体内容）
 */

function initLayout() {
    initServer(); // 找不到
    initVariable(); // 初始化参数？
    initVenueList(); // 找不到
    initSetting(colorStyle); // 貌似所有的界面绘制都在这？
    initFullScreenAndSizeBar(); // ？
    gTranslation(); // ？
    drawFullScreenIcon(gFullScreen, fullScreenButtonTranWidth, fullScreenButtonTranHeight); // ？
    //    initRightClickMenu();

    //    $(window).on('resize',initSetting);
    requestData(); // 找不到

}
initLayout();