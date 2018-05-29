function modifyLabel(d){
    var nodes=d.node;
    if(focusedID=='9629297_10'){
        nodes[10].keywords=['Stasko et al.','2007'];
        updateTopThreeLabel('network','display','enterprise',nodes[0]);
        updateTopThreeLabel('web','topic','cloud',nodes[1]);
        updateTopThreeLabel("Word","Tree","Phrase",nodes[4]);
        updateTopThreeLabel("Reasoning","Process","Analytics",nodes[5]);
        updateTopThreeLabel('Summarization', 'Device', 'Query',nodes[8]);
        updateTopThreeLabel('Entity', 'Text', 'Phrase',nodes[7]);
//        updateTopThreeLabel('Text, System, Corpora',nodes[3]);
        nodes[3].keywords[0]='Text';
        nodes[3].keywords[1]='System';
        nodes[3].keywords[2]='Corpora';
        updateTopThreeLabel("Tag", "River", "Time",nodes[6]);
        updateTopThreeLabel("Space", "Movement", "Exploration",nodes[9]);
        updateTopThreeLabel('Review', 'Social', 'Online',nodes[2]);
    }
    else if(focusedID=='102615_15'){
        updateTopThreeLabel('Generation', 'Language', 'System',nodes[0]);
        updateTopThreeLabel('Representation', 'Plot', 'Animation',nodes[8]);
        updateTopThreeLabel('consumer', 'narrative', 'parent',nodes[12]);
        updateTopThreeLabel('System', 'Music', 'Medical',nodes[6]);
        updateTopThreeLabel('Visualization', 'Place', 'Event',nodes[14]);
        removePluralWord(nodes);
    }

}
function updateTopThreeLabel(w1,w2,w3,node){
    node.keywords[0]=w1;
    node.keywords[1]=w2;
    node.keywords[2]=w3;
}
function removePluralWord(nodes){
    var wordDic={
        'spaces':'space',
        'views':'view',
        'places':'place',
        'objects':'object',
        'associations':'association',
        'patterns':'pattern',
        'plots':'plot',
        'insights':'insight',
        'systems':'system',
        'pathways':'pathway',
        'pitfalls':'pitfall',
        'networks':'network',
        'abstracts':'abstract',
        'consumers':'consumer',
        'infants':'infant',
        'models':'model',
        'processors':'processor',
        'approaches':'approach',
        'perceptions':'perception',
        'expressions':'expression',
        'graphs':'graph'
    }
    for(var i=0;i<nodes.length;i++){
        if(nodes[i].keywords){
            for(var j=0;j<nodes[i].keywords.length;j++){
                var keyword=nodes[i].keywords[j].toLowerCase();
                if(wordDic[keyword])nodes[i].keywords[j]=wordDic[keyword];
            }
        }
    }

}