function layoutPapers(d){
    //pingbi chongfu lunwen
    if(d.id!=2253750){
        //console.log(d3.select(this));
        var textColor='rgb(223,209,32)';
        var abstractColor='rgb(221, 226, 164)';
        var title=d3.select(this).append('div');
        title
            .append('text')
            .styles({
                cursor:'pointer',
                color:'white',
                'font-size':18+px,
                'font-family':'Microsoft YaHei'

            })
            .on('mouseover',function(d){
                d3.select(this)
                    .styles({
                        'text-decoration':'underline'
                    })
            })
            .on('mouseout',function(d){
                d3.select(this)
                    .styles({
                        'text-decoration':''
                    })
            })
            .on('click',function(d){
                var url='graph.html?';
                var sourceStr='';
                d.ids.forEach(function(item){
                    var source=item.source;
                    sourceStr+=source+'_';
                    url+=source+'_id='+item.id+'&';
                });
                var source='aminerV8';
                //url+=source+'_id='+ d.id+'&';
                url+='selected='+source;
                url+='&source='+sourceStr;
                url+='&r='+Math.floor(Math.random()*1000000000+1);
                window.open(url);
            })
            .html(d.title);

        if(d.graphSize){
            var graphSizeDatas=[
                {text:' [',color:'white'},
                {text: d.graphSize,color:'white'},
                {text:' papers influenced',color:textColor},
                {text:']<br>',color:'white'}
            ];
            title
                .selectAll('whatever')
                .data(graphSizeDatas)
                .enter()
                .append('text')
                .styles({
                    color:function(d){return d.color},
                    'font-size':14+px,
                    'font-family':'Microsoft YaHei'
                })
                .each(function(e,i){
                    if(i==1){
                        d3.select(this)
                            .styles({
                                color:'white',
                                cursor:'pointer'
                            })
                            .on('mouseover',function(e){
                                d3.select(this)
                                    .styles({
                                        'text-decoration':'underline'
                                    })
                            })
                            .on('mouseout',function(e){
                                d3.select(this)
                                    .styles({
                                        'text-decoration':''
                                    })
                            })
                            .on('click',function(e){
                                var url='citation.html?id='+ d.id+'&action=all&'+'source=aminerV8'+'&title='+ d.title+'&r='+Math.floor(Math.random()*1000000000+1);
                                window.open(url);
                            })
                    }
                })
                .html(function(e){
                    return e.text;
                });
        }

        var summary=d3.select(this).append('div');
        summary
            .append('text')
            .styles({
                color:textColor,
                'font-size':14+px,
                'font-family':'Microsoft YaHei'
            })
            .html(d.authors+' - '+d.year+' - ');
        summary
            .append('text')
            .styles({
                color:textColor,
                'font-size':14+px,
                'font-family':'Microsoft YaHei'
            })

            .html(d.venue+'<br>')
            .each(function(){
                if(d.venueID){
                    d3.select(this)
                        .styles({
                            color:'white',
                            cursor:'pointer'
                        })
                        .on('mouseover',function(){
                            d3.select(this)
                                .styles({
                                    'text-decoration':'underline'
                                })
                        })
                        .on('mouseout',function(){
                            d3.select(this)
                                .styles({
                                    'text-decoration':''
                                })
                        })
                        .on('click',function(){
                            var url='venuepapers.html?venue='+d.venue+'&id='+d.venueID+'&r='+Math.floor(Math.random()*1000000000+1);
                            window.open(url);
                        })
                }
            });
        if(d.abstract){
            var abstract=d3.select(this).append('div')
                .styles({
                    height:55+px,
                    'overflow-y':'hidden'
                });
            abstract.append('text')
                .styles({
                    color:abstractColor,
                    'font-size':10+px,
                    'font-family':'Microsoft YaHei',

                })
                .html(d.abstract);
        }
        var citation=d3.select(this).append('div');
        citation
            .append('text')
            .styles({
                color:textColor,
                'font-size':14+px,
                'font-family':'Microsoft YaHei'
            })
            .html('Citing ');
        citation
            .append('text')
            .styles({
                cursor:'pointer',
                color:'white',
                'font-size':14+px,
                'font-family':'Microsoft YaHei',
            })
            .on('mouseover',function(d){
                d3.select(this)
                    .styles({
                        'text-decoration':'underline'
                    })
            })
            .on('mouseout',function(d){
                d3.select(this)
                    .styles({
                        'text-decoration':''
                    })
            })
            .on('click',function(d){
                var url='citation.html?';
                var source='aminerV8';
                url+='id='+ d.id+'&';
                url+='source='+source;
                url+='&title='+ d.title;
                url+='&action=t';
                url+='&r='+Math.floor(Math.random()*1000000000+1);
                window.open(url);
            })
            .html(d.citing);
        citation
            .append('text')
            .styles({
                color:textColor,
                'font-size':14+px,
                'font-family':'Microsoft YaHei'
            })
            .html(' papers');
        citation
            .append('text')
            .styles({
                color:textColor,
                'font-size':14+px,
                'font-family':'Microsoft YaHei',
                'margin-left':50+px
            })
            .html('Cited by ');
        citation
            .append('text')
            .styles({
                cursor:'pointer',
                color:'white',
                'font-size':14+px,
                'font-family':'Microsoft YaHei'
            })
            .on('mouseover',function(d){
                d3.select(this)
                    .styles({
                        'text-decoration':'underline'
                    })
            })
            .on('mouseout',function(d){
                d3.select(this)
                    .styles({
                        'text-decoration':''
                    })
            })
            .on('click',function(d){
                var url='citation.html?';
                var source='aminerV8';
                url+='id='+ d.id+'&';
                url+='source='+source;
                url+='&title='+ d.title;
                url+='&action=s';
                url+='&r='+Math.floor(Math.random()*1000000000+1);
                window.open(url);
            })
            .html(d.citation);
        citation
            .append('text')
            .styles({
                color:textColor,
                'font-size':14+px,
                'font-family':'Microsoft YaHei'
            })
            .html(' papers');



        citation
            .append('text')
            .styles({
                color:textColor,
                'font-size':14+px,
                'font-family':'Microsoft YaHei',
                'margin-left':50+px
            })
            .html('Source: ');
        citation
            .selectAll('whatever')
            .data(d.ids)
            .enter()
            .append('text')
            .styles({
                cursor:'pointer',
                color:'white',
                'font-size':14+px,
                'font-family':'Microsoft YaHei'
            })
            .html(function(e,i){
                if(i==0)return 'AMiner';
                else return ', CiteseerX';
            })
            .on('mouseover',function(d){
                d3.select(this)
                    .styles({
                        'text-decoration':'underline'
                    })
            })
            .on('mouseout',function(d){
                d3.select(this)
                    .styles({
                        'text-decoration':''
                    })
            })
            .on('click',function(e,i){
                var url='graph.html?';
                d.ids.forEach(function(item){
                    var source=item.source;
                    url+=source+'_id='+item.id+'&';
                });
                var source= e.source;
                //url+=source+'_id='+ e.id+'&';
                url+='selected='+source;
                url+='&r='+Math.floor(Math.random()*1000000000+1);
                window.open(url);
            });
    }

}