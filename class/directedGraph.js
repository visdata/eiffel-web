function DirectedGraph(data) {
    this.nodes = data.node;
    this.edges = data.edge;
    this.graph = {};
    this.edgeSourceTargetDic = {};
    this.initEdgeSourceTargetDic={};
    this.edgeSourceDic = {};
    this.edgeTargetDic = {};
    this.minYear = 10000;
    this.maxYear = 0;
    this.deletedEdges=[];
    this.maximalSpanningTree={};
    this.spanningTree = {
        nodes: [],
        edges: [],
        deletedTreeEdges: [],
        deletedNonTreeEdges: [],
        deletedEdges: []
    };
    this.ifGetBFSTree=false;
    this.BFSTree='';
    this.getEdgeDic = function (keyType,filter) {
        if(arguments.length==1)filter='flow';
        var dic = {};
        for (var i = 0; i < this.edges.length; i++) {
            if(this.edges[i][filter]>0&&!this.edges[i].disable){
                var key = this.edges[i][keyType];
                if (dic[key])dic[key].push(this.edges[i]);
                else dic[key] = [this.edges[i]];
            }

        }
        return dic;
    };
//    this.getEdgeSourceTargetDic=function (){
//        var dic={};
//        for(var i=0;i<this.edges.length;i++){
//            var source=this.edges[i].source;
//            var target=this.edges[i].target;
//            var key=String(source)+'_'+String(target);
//            dic[key]=this.edges[i];
//        }
//        this.edgeSourceTargetDic=dic;
//    };
    this.init = function () {
//        this.getEdgeSourceTargetDic();
        this.initNodeRelation();
        this.getYearDuration();
        this.initEdgeYearWeight();
        this.storeInitEdgeSourceTargetDic();
        this.build();
    };
    this.initNodeRelation = function () {
        for (var i = 0; i < this.nodes.length; i++) {
            var node = this.nodes[i];
            node.children = [];
            node.parents = [];
        }
    };
    this.storeInitEdgeSourceTargetDic=function(){
        var dic={};
        for(var i=0;i<this.edges.length;i++){
            var source=this.edges[i].source;
            var target=this.edges[i].target;
            var key=source+'_'+target;
            var newEdge={};
            clone(this.edges[i],newEdge);
            dic[key]=newEdge;
        }
        this.initEdgeSourceTargetDic=dic;
    };
    this.getYearDuration = function () {
        for (var i = 0; i < this.edges.length; i++) {
            for (var key in this.edges[i].weight) {
                var year = parseInt(key);
                if (year > this.maxYear)this.maxYear = year;
                if (year < this.minYear)this.minYear = year;
            }
        }
    };
    this.initEdgeYearWeight = function () {
        for (var i = 0; i < this.edges.length; i++) {
            var edge = this.edges[i];
            if(!edge.yearWeight){
                var sum = 0;
                for (var year in edge.weight) {
                    sum += edge.weight[year];
                }
                var yearWeight = 0;
                for (var year in edge.weight) {
//                yearWeight += Math.sqrt(this.maxYear - year.toInt() + 1) * edge.weight[year];
                    yearWeight += this.maxYear - year.toInt() + 1 * edge.weight[year];
                }
                yearWeight /= sum;
                edge.yearWeight = yearWeight;
                edge.yearFlow = yearWeight*edge.flow;
            }

        }
    };
    this.resetYearFlow=function(){
        for(var i=0;i<this.edges.length;i++){
            var edge=this.edges[i];
            edge.yearFlow=edge.flow*edge.yearWeight;
        }
    };
    this.addEdge = function (edge) {
        var source = edge.source;
        var target = edge.target;
        var key = source + '_' + target;
        if (this.edgeSourceTargetDic[key]) {
//            console.log('edge already exists in current graph');
        }
        else {
            this.edges.push(edge);
            this.edgeSourceTargetDic[key] = edge;
            var sourceNode = this.nodes[source];
            var targetNode = this.nodes[target];
            sourceNode.children.push(targetNode);
            targetNode.parents.push(sourceNode);
        }
    };
    this.removeEdge = function (edge) {
        var source = edge.source;
        var target = edge.target;
        var key = source + '_' + target;
        if (!this.edgeSourceTargetDic[key]) {
            console.log('this edge not exists in current graph');
        }
        else {
            //delete dic
//            delete this.edgeSourceTargetDic[key];
            this.edgeSourceTargetDic[key]=null;
            var newEdges = [];
            for (var i = 0; i < this.edges.length; i++) {
                var thisEdge = this.edges[i];
                var thisKey = thisEdge.source + '_' + thisEdge.target;
                if (thisKey != key) {
                    newEdges.push(thisEdge);
                }
            }
            //delete edge
//            this.edges = newEdges;
            this.edges = newEdges;
            //delete node in children and parents
            var sourceNode = this.nodes[source];
            var targetNode = this.nodes[target];
            var newChildren = [];
            var newParents = [];
            if (sourceNode.children.length > 0) {
                for (var j = 0; j < sourceNode.children.length; j++) {
                    var child = sourceNode.children[j];
                    var childID = child.id;
                    if (childID != target) {
                        newChildren.push(child);
                    }
                }
            }
            if (targetNode.parents.length > 0) {
                for (var j = 0; j < targetNode.parents.length; j++) {
                    var parent = targetNode.parents[j];
                    var parentID = parent.id;
                    if (parentID != source) {
                        newParents.push(parent);
                    }
                }
            }
            sourceNode.children = newChildren;
            targetNode.parents = newParents;
            this.deletedEdges.push(edge);
        }

    };
    this.build = function () {
//        console.log(this.nodes);
        this.nodes = this.nodes;
        this.root = '';
        var tmpEdges=[];
        clone(this.edges, tmpEdges);
        this.edges = []
        for (var i = 0; i < tmpEdges.length; i++) {
            var edge = tmpEdges[i];
            this.addEdge(edge);
        }
        for (var i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i].focused == 'true') {
                this.root = this.nodes[i];
                break;
            }
        }

    };
    this.checkConnection = function (method) {
        if (this.root) {
            var visitedNodes = [this.root.id];
            if (method == 'DFS') {
                this.DFS(this.root, visitedNodes);
            }
            if (method == 'BFS' || arguments.length == 0) {
                visitedNodes = [];
                this.BFS(this.root, visitedNodes);
            }
            var disableList=[];
            for(var i=0;i<this.nodes.length;i++){
                if(this.nodes[i].disable)disableList.push(this.nodes[i].id);
            }
            if ((visitedNodes.length == this.nodes.length-disableList.length)) {

                return true;
            }
            else {
                return false;
            }
        }
    };

    this.BFS = function (node, visitedNodes) {
        //have some problems that can not traverse all the graph
        var nodeStep = [];
        var rootWeight = 1;
        var root = node;
        var level = 0;
        var k = 0.5;
        nodeStep.push(root);
        var BFSEdge=[];
        var bfsNodes=[];
        while (nodeStep[0]) {
            var newStep = [];
            for (var i = 0; i < nodeStep.length; i++) {
                var step = nodeStep[i];
                if ((!step.disable)&&(!in_array(step.id, visitedNodes))) {
                    visitedNodes.push(step.id);
                    if (!step.BFSWeight)step.BFSWeight = rootWeight * Math.pow(k, level);
                    if (step.children) {
                        for (var j = 0; j < step.children.length; j++) {
                            if(!step.children[j].disable){
                                var source = step.id;
                                var target = step.children[j].id;
                                var key = source + '_' + target;
                                var edge = this.edgeSourceTargetDic[key];
                                if (!edge.BFSWeight)edge.BFSWeight = rootWeight * Math.pow(k, level);

                                if (!in_array(step.children[j].id, visitedNodes)) {
                                    if(!in_array(target, bfsNodes)){
                                        bfsNodes.push(target);
                                        BFSEdge.push(edge);
                                    }
                                    newStep.push(step.children[j]);
                                }
                            }

                        }
                    }

                }
            }
            level += 1;
            nodeStep = newStep;
        }
        if(this.ifGetBFSTree){
            var newNodes=[];
            var newEdges=[];
            clone(this.nodes,newNodes);
            clone(BFSEdge,newEdges)
            var BFSTreeData={node:newNodes,edge:newEdges};
            var BFSTree=new DirectedGraph(BFSTreeData);
            BFSTree.init();
            this.BFSTree=BFSTree;
        }


    };
    this.DFS = function (node, visitedNodes) {
//        console.log('nodeID:'+node.id);
        if (node.children.length > 0) {
            var children = node.children;
            for (var i = 0; i < children.length; i++) {
                if (!in_array(children[i].id, visitedNodes)&&(!children[i].disable)) {
                    visitedNodes.push(children[i].id);
                    this.DFS(children[i], visitedNodes);
                }
            }
        }
    };
    this.sortEdge = function (attr, order) {
//        var weightKey='BFSWeight';
        var weightKey = 'yearWeight';
        if (arguments.length == 0) {
            attr = 'flow';
            order = 'decrease';
        }
        if (arguments.length == 1) {
            order = 'decrease';
        }
        this.edges.sort(function (a, b) {
            if (order == 'increase')return a[attr] * a[weightKey] - b[attr] * b[weightKey];
            else if (order == 'decrease')return b[attr] * b[weightKey] - a[attr] * a[weightKey];

        });
    };
    this.filterTopFlow=function(k){
        this.sortEdge('flow','increase');
        while(this.checkConnection()&&this.edges.length>this.nodes.length*k){
            var edge;
            for (var i = 0; i < this.edges.length; i++) {
                if (!this.edges[i].deleteTimes) {
                    edge = this.edges[i];
                    break;
                }
            }
            this.removeEdge(edge);
            if (!this.checkConnection()) {
                edge.deleteTimes = 1;
                this.addEdge(edge);

            }
        }
    };
    this.recurRemoveEdge=function(edge){
        this.removeEdge(edge);
        if(edge.originEdge){
            this.recurRemoveEdge(edge.originEdge);
        }
    };
    this.openCircle=function(node){
        if(node.children){
            var newChildren=[];
            for(var i=0;i<node.children.length;i++){
                var child=node.children[i];
                if(child.pseudoNode){
                    if(!child.disable)newChildren.push(child);
                }
                else{
                    newChildren.push(child);
                }
            }
            node.children = newChildren;
            for(var i=0;i<node.children.length;i++){
                var child=node.children[i];
                if(!child.disable){
                    if(!child.pseudoNode){
                        var source=node.id;
                        var target=child.id;
                        var key=source+'_'+target;
                        var edge=this.edgeSourceTargetDic[key];
                        if(edge.disable)edge.disable=false;
                        this.openCircle(child);
                    }
                    else{
                        child.disable = true;
                        if(child.children){
                            for(var j=0;j<child.children.length;j++){
                                var source=child.id;
                                var target=child.children[j].id;
                                var key=source+'_'+target;
                                var edge=this.edgeSourceTargetDic[key];
                                edge.disable=true;
                                edge.originEdge.disable=false;
                            }
                        }
                        var tmpChildren=[];
                        for(var j=0;j<node.children;j++){
                            if(!node.children[j].pseudoNode){
                                if(!node.children[j].disable)tmpChildren.push(node.children[j]);
                            }
                        }
                        if(child.circleEdges){
                            var source=node.id;
                            var target=child.id;
                            var key=source+'_'+target;
                            var originEdge=this.edgeSourceTargetDic[key].originEdge;
                            var newChild=this.nodes[originEdge.target];
                            newChild.disable=false;
                            tmpChildren.push(newChild);
                            for(var j=0;j<child.circleEdges.length;j++){
                                var edge=child.circleEdges[j];
                                if(edge.target!=originEdge.target)edge.disable=false;
                                else{

                                    this.recurRemoveEdge(edge);
                                }
                            }
                        }

                        if(child.innerNodesIDList){
                            for(var j=0;j<child.innerNodesIDList.length;j++){
                                var id=child.innerNodesIDList[j];
                                var innerNode=this.nodes[id];
                                innerNode.disable=false;
                            }
                        }
                        node.children=tmpChildren;
                        if(!this.checkConnection()){
                            console.log('does not connected');
                        }
                        else{
                            this.openCircle(this.root);
                        }
                    }
                }
            }
        }
    };
    this.contractCircle = function (circle) {
        var edgeSourceDic=this.getEdgeDic('source');
        var edgeTargetDic=this.getEdgeDic('target');
        var len=this.nodes.length;
        var newNode={
            id:len,
            children:[],
            parents:[],
            innerNodesIDList:[],
            intoThisNodeEdges:[],
            outThisNodeEdges:[],
            circleEdges:[],
            pseudoNode:true
        };
        this.nodes.push(newNode);
        var circleIDList=[];
        for(var i=0;i<circle.edges.length;i++){
            var edge=circle.edges[i];
            var source=edge.source;
            var target=edge.target;
            this.nodes[source].disable = true;
            this.nodes[target].disable = true;
            if(!in_array(source, circleIDList))circleIDList.push(source);
            if(!in_array(target, circleIDList))circleIDList.push(target);
            newNode.circleEdges.push(edge);
        }
        newNode.innerNodesIDList=circleIDList;
        for(var i=0;i<circleIDList.length;i++){
            if(edgeSourceDic[circleIDList[i]]){
                for(var j=0;j<edgeSourceDic[circleIDList[i]].length;j++){
                    var edge=edgeSourceDic[circleIDList[i]][j];
                    edge.disable = true;
                    if(!in_array(edge.target,circleIDList)){
                        if(this.directedTree){
                            var directedTreeEdgeTargetDic=this.directedTree.getEdgeDic('target');
                            var tmpEdge=directedTreeEdgeTargetDic[edge.target];
                            if(tmpEdge.originEdge){
                                var key=tmpEdge[0].originEdge.source+'_'+tmpEdge[0].originEdge.target;
                                edge = this.edgeSourceTargetDic[key];
                            }
                        }
                        var newEdge={};
                        clone(edge, newEdge);
                        newEdge.disable=false;
                        newEdge.pseudoEdge=true;
                        newEdge.originEdge=edge;
                        newEdge.source = newNode.id;

                        this.addEdge(newEdge);

                        newNode.outThisNodeEdges.push(edge);
                    }
                }
                for(var j=0;j<edgeTargetDic[circleIDList[i]].length;j++){
                    var edge=edgeTargetDic[circleIDList[i]][j];
                    edge.disable = true;
                    if(!in_array(edge.source,circleIDList)){
                        if(this.directedTree){
                            var directedTreeEdgeSourceDic=this.directedTree.getEdgeDic('source');
                            var tmpEdge;
//                            if(directedTreeEdgeSourceDic[edge.source]){
//                                tmpEdge=directedTreeEdgeSourceDic[edge.source][0];
//                                edge = {};
//                                key = tmpEdge.source+'_'+tmpEdge.target;
//                                edge = this.edgeSourceTargetDic[key];
//                            }
//                            else{
                                var maxEdge={circleFlow:-100000000};
                                for(var k=0;k<edgeSourceDic[edge.source].length;k++){
                                    if(in_array(edgeSourceDic[edge.source][k].target,circleIDList)){
                                        tmpEdge=edgeSourceDic[edge.source][k];
                                        if(tmpEdge.circleFlow>maxEdge.circleFlow)maxEdge=tmpEdge;
                                    }

                                }
                                key = maxEdge.source+'_'+maxEdge.target;
                                edge = this.edgeSourceTargetDic[key];
//                            }

                        }

                        var newEdge={};
                        clone(edge, newEdge);
                        newEdge.disable=false;
                        newEdge.pseudoEdge=true;
                        newEdge.originEdge=edge;
                        newEdge.target = newNode.id;

                        this.addEdge(newEdge);

                        newNode.intoThisNodeEdges.push(edge);
                    }
                }
            }
        }
    };
    this.generateMaximalSpanningTree = function () {

        //the method is provided by Guangdi Li http://www.mathworks.com/matlabcentral/profile/authors/1714285-guangdi-li
        //Email: lowellli121@gmail.com
        //http://mcbench.cs.mcgill.ca/benchmark/24327-maximumminimum-weight-spanning-tree-directed?query=%2F%2FForStmt%2F%2FAssignStmt%5Bname(lhs())%3D%27NameExpr%27+and+name(rhs())%3D%27NameExpr%27+and+rhs()%2F%40kind%3D%27VAR%27%5D
        /*
         %1 Discard the arcs entering the root if any; For each node other than the root, select the entering arc with the highest cost; Let the selected n-1 arcs be the set S.
         %  If no cycle is formed, G( N,S ) is a MST. Otherwise, continue.
         %2 For each cycle formed, contract the nodes in the cycle into a pseudo-node (k), and modify the cost of each arc which enters a node (j) in the cycle from some node (i)
         %  outside the cycle according to the following equation.  c(i,k)=c(i,j)-(c(x(j),j)-min_{j}(c(x(j),j)) where c(x(j),j) is the cost of the arc in the cycle which enters j.
         %3 For each pseudo-node, select the entering arc which has the smallest modified cost; Replace the arc which enters the same real node in S by the new selected arc.
         %4 Go to step 2 with the contracted graph.
         */
        //the below code is written by Yue Su
        //in our data there should not exist a path that target to the root
        //select the entering arc with the highest cost
        var treeNodes=[];
        var treeEdges=[];
        var tmpEdges=[];
        clone(this.nodes, treeNodes);
        for(var i=0;i<treeNodes.length;i++){
            if(!(treeNodes[i].focused=='true')){
                var id=parseInt(treeNodes[i].id);
                var nodeEdge=[];
                var maxEdge={yearFlow:0};
                for(var j=0;j<this.edges.length;j++){
                    if(this.edges[j].target==id){
                        if(this.edges[j].yearFlow>maxEdge.yearFlow)maxEdge=this.edges[j];
                    }
                }
                tmpEdges.push(maxEdge);
            }
        }
        clone(tmpEdges,treeEdges);
        var treeData={node:treeNodes,edge:treeEdges};
//        for(var i=0;i<treeEdges.length;i++){
//            console.log(edge[])
//        }
        var directedTree=new DirectedGraph(treeData);
        this.directedTree=directedTree;
        directedTree.init();
        directedTree.sortEdge('source','increase');

        for(var i=0;i<this.edges.length;i++){
            this.edges[i].circleFlow=this.edges[i].yearFlow;
        }
        for(var i=0;i<directedTree.edges.length;i++){
            directedTree.edges[i].circleFlow=directedTree.edges[i].yearFlow;
        }

        //detect circle
        while(!directedTree.checkConnection()){

            //find circle for each node
            for(var i=0;i<directedTree.nodes.length;i++){

                var node=directedTree.nodes[i];
                if(!node.disable){
                    var id=node.id;
                    var pathTarget = {id: id, preEdge: [], currentIDList: [id], next: []};
                    var paths=[];
                    directedTree.findCircle(id, id, id, pathTarget,paths,false);
                    if(paths[0]){
                        //circle find
                        //contract the nodes in the cycle into a pseudo-node (k)
                        var len=this.nodes.length;

                        var circleIDList=[];
                        for(var j=0;j<paths[0].edges.length;j++){

                            var edge=paths[0].edges[j];
                            var source=edge.source;
                            var target=edge.target;
                            if(!in_array(source, circleIDList))circleIDList.push(source);
                            if(!in_array(target, circleIDList))circleIDList.push(target);

                            if(!directedTree.nodes[source].circleTarget)directedTree.nodes[source].circleTarget=target;
                            if(!directedTree.nodes[target].circleSource)directedTree.nodes[target].circleSource=source;
                        }
                        var edgeTargetToCircle=[];
                        var circleEdgeDic={};
                        for(var j=0;j<circleIDList.length;j++){
                            var circleNodeID=circleIDList[j];
                            var parents=this.nodes[circleNodeID].parents;
                            var len=0;
                            for(var x=0;x<parents.length;x++){
                                if(!parents[x].disable)len+=1;
                            }
                            if(len>1){
                                var circleSource=directedTree.nodes[circleNodeID].circleSource;
                                var circleEdgeKey=circleSource+'_'+circleNodeID;
                                var circleEdge=this.edgeSourceTargetDic[circleEdgeKey];
                                circleEdgeDic[circleNodeID]=circleEdge;
                                for(var k=0;k<parents.length;k++){
                                    if(!in_array(parents[k].id,circleIDList)&&!parents[k].disable){
//                                    if(parents[k].id!=circleSource&&!parents[k].disable){
                                        var edgeKey=parents[k].id+'_'+circleNodeID;
                                        var edge=this.edgeSourceTargetDic[edgeKey];
                                        edge.circleFlow-=circleEdge.circleFlow;
                                        edgeTargetToCircle.push(edge);
                                    }
                                }
                            }
                        }
//                    console.log(edgeTargetToCircle);
                        var maxCircleFlowEdge={circleFlow:-100000000};
                        for(var j=0;j<edgeTargetToCircle.length;j++){
                            if(edgeTargetToCircle[j].circleFlow>maxCircleFlowEdge.circleFlow){
                                maxCircleFlowEdge=edgeTargetToCircle[j];
                            }
                        }
                        var circleTarget=maxCircleFlowEdge.target;
                        var targetCircleEdge=circleEdgeDic[circleTarget];
//                        console.log('try remove:  '+targetCircleEdge.source+'->'+targetCircleEdge.target)
//                        recurRemove(targetCircleEdge);
                        function recurRemove(targetCircleEdge){
                            if(targetCircleEdge.originEdge){
                                directedTree.removeEdge(targetCircleEdge);

//                                console.log('try remove:  '+targetCircleEdge.originEdge.source+'->'+targetCircleEdge.originEdge.target);
                                recurRemove(targetCircleEdge.originEdge)
                            }
                        }

                        var tmpEdge={};
                        clone(maxCircleFlowEdge,tmpEdge);
                        maxCircleFlowEdge=tmpEdge;
                        function recurAdd(maxCircleFlowEdge){
                            directedTree.addEdge(maxCircleFlowEdge);
                            if(maxCircleFlowEdge.originEdge){
//                                console.log('try add:  '+maxCircleFlowEdge.originEdge.source+'->'+maxCircleFlowEdge.originEdge.target)
                                recurAdd(maxCircleFlowEdge.originEdge)
                            }
                        }
//                        console.log('try add:  '+maxCircleFlowEdge.source+'->'+maxCircleFlowEdge.target)
                        recurAdd(maxCircleFlowEdge);

                        directedTree.contractCircle(paths[0]);
                        this.contractCircle(paths[0]);
//                        console.log(directedTree.edgeSourceTargetDic)
//                        console.log('merge ',circleIDList,'as node');
                        for(var j=0;j<directedTree.nodes.length;j++){
//                            delete directedTree.nodes[j].circleSource;
                            directedTree.nodes[j].circleSource=null;
//                            delete directedTree.nodes[j].circleTarget;
                            directedTree.nodes[j].circleTarget=null;
                        }
                        break;

                    }
                }




            }
        }
        var tmpcurrentEdges=[];
        var tmpcurrentNodes=[];
        for(var tmpkey in directedTree.edgeSourceTargetDic){
            var tmpsource=parseInt(tmpkey.split('_')[0]);
            var tmptarget=parseInt(tmpkey.split('_')[1]);
            if(!directedTree.edgeSourceTargetDic[tmpkey].pseudoEdge){
//                console.log(tmpkey);
                var tmpedge={};
                clone(directedTree.edgeSourceTargetDic[tmpkey],tmpedge);
                if(tmpedge.disable)delete tmpedge.disable;
                tmpcurrentEdges.push(tmpedge)
            }
        }
        for(var i=0;i<directedTree.nodes.length;i++){
            var node=directedTree.nodes[i];
            if(!node.pseudoNode){
                var newNode={};
                clone(node, newNode);
                if(newNode.children)delete newNode.children;
                if(newNode.parents)delete newNode.parents;
                if(newNode.disable)delete newNode.disable;
                tmpcurrentNodes.push(newNode);
            }
        }
        var tmpGraphData={node:tmpcurrentNodes,edge:tmpcurrentEdges};
        var tmpGraph=new DirectedGraph(tmpGraphData);

        tmpGraph.init();
        tmpGraph.ifGetBFSTree=true;
        tmpGraph.checkConnection();
//        tmpcurrentEdges.sort(function(a,b){return d3.ascending(a.target, b.target)});
//
//        tmpcurrentEdges.sort(function(a,b){return d3.ascending(a.source, b.source)});
//        for(var i=0;i<tmpcurrentEdges.length;i++){
//            console.log(tmpcurrentEdges[i].source+'->'+tmpcurrentEdges[i].target);
//        }
//        console.log(tmpcurrentEdges);
//        directedTree.openCircle(directedTree.root);
//        var newTreeEdges=[];
//        var newTreeNodes=[];
//        for(var i=0;i<directedTree.edges.length;i++){
//            var edge=directedTree.edges[i];
//            var source=edge.source;
//            var target=edge.target;
//            var edgeStr=source+'->'+target;
//
//            if(!edge.disable&&!edge.pseudoEdge){
////                console.log(edgeStr);
//                newTreeEdges.push(edge);
//            }
//        }
//        for(var i=0;i<directedTree.nodes.length;i++){
//            var node=directedTree.nodes[i];
//            if(!node.disable)newTreeNodes.push(node);
//        }
//        var spanningTreeData={node:newTreeNodes,edge:newTreeEdges};
//        var spanningTree=new DirectedGraph(spanningTreeData);
//        spanningTree.init();
        var spanningTree=tmpGraph.BFSTree;
        this.maximalSpanningTree=spanningTree;
        spanningTree.deletedTreeEdges=[];
        spanningTree.deletedNonTreeEdges=[];
        var originEdgeDic=this.initEdgeSourceTargetDic;
        var mstEdgeDic=spanningTree.edgeSourceTargetDic;
        for(var key in originEdgeDic){
            if(!mstEdgeDic[key]){
                var deletedEdge=originEdgeDic[key];
                this.maximalSpanningTree.deletedTreeEdges.push(deletedEdge);
            }
        }
//        if(!directedTree.checkConnection()){
//            //can not traverse all nodes from the root, means that there exist one or more cycle in the current graph
//            for(var i=0;i<this.nodes.length;i++){
//
//            }
//        }
//        else{
//
//        }

    };
    this.generateSpanningTree = function () {
        this.resetYearFlow();
        while (!this.checkIfSpanningTree()) {
            this.edges=this.edges.sort(function(a,b){return a.source- b.source});
            this.sortEdge('flow', 'increase');
            var edge;
            for (var i = 0; i < this.edges.length; i++) {
                if (!this.edges[i].deleteTimes) {
                    edge = this.edges[i];
                    break;
                }
            }
            this.removeEdge(edge);
            if (!this.checkConnection()) {
                edge.deleteTimes = 1;
                this.addEdge(edge);

            }
            else {
                this.spanningTree.deletedEdges.push(edge);
                var source = edge.source;
                var target = edge.target;
                var originTarget = edge.target;
                var pathTarget = {id: target, preEdge: [], currentIDList: [target], next: []};
                var paths = [];

//                this.findAllPathBetween(source, target, originTarget, pathTarget, paths);
//                this.findMaxPathBetween(source, target, originTarget, pathTarget, paths);
                paths = this.findMaxPathBetween(source, target);
                //console.log(paths.length);
                if (paths.length > 0) {
                    var maxAvgFlowPath={avgFlow:0};
                    for(var i=0;i<paths.length;i++){
                        paths[i].avgFlow=paths[i].totalFlow/paths[i].edges.length;
                        if(paths[i].avgFlow>maxAvgFlowPath.avgFlow)maxAvgFlowPath=paths[i];
                    }

                    for (var i = 0; i < maxAvgFlowPath.edges.length; i++) {
                        maxAvgFlowPath.edges[i].yearFlow += edge.yearFlow;
                        maxAvgFlowPath.totalFlow += edge.yearFlow;
                    }
//                    paths.sort(function (a, b) {
//                        return b.totalFlow - a.totalFlow;
//                    });
//                    paths.sort(function (a, b) {
//                        return a.length - b.length;
//                    });
                    this.spanningTree.deletedTreeEdges.push({
                        originEdge: edge,
                        newPath: maxAvgFlowPath
                    })
                }
                else {
                    this.spanningTree.deletedNonTreeEdges.push(edge);
                }


            }
        }
//        for(var i=0;i<this.spanningTree.deletedEdges.length;i++){
//            var edge=this.spanningTree.deletedEdges[i];
//            var source=edge.source;
//            var target=edge.target;
//            var originTarget=edge.target;
//            var pathTarget={id:target, preEdge:[],currentIDList:[target],next:[]};
//            var paths=[];
//            this.findAllPathBetween(source,target,originTarget,pathTarget,paths);
////            console.log(paths.length);
//            if(paths.length>0){
//                for(var j=0;j<paths[0].edges.length;j++){
//                    paths[0].edges[j].flow+=edge.flow;
//                    paths[0].totalFlow+=edge.flow;
//                }
//                paths.sort(function(a,b){
//                    return b.totalFlow-a.totalFlow;
//                });
//                paths.sort(function(a,b){
//                    return a.length-b.length;
//                });
//                this.spanningTree.deletedTreeEdges.push({
//                    originEdge:edge,
//                    newPath:paths[0]
//                })
//            }
//            else{
//                this.spanningTree.deletedNonTreeEdges.push(edge);
//            }
//        }

    };
    this.checkIfSpanningTree = function () {
        if (this.checkConnection("DFS") && (this.nodes.length - this.edges.length == 1)) {
            return true;
        }
        else {
            return false;
        }
    };
    this.findCircle=function(source, target, originTarget, pathTarget, paths,circleFlag){
        this.edgeTargetDic = this.getEdgeDic('target','flow');
        var targetParents = this.edgeTargetDic[target];
        pathTarget.next = [];
        if (targetParents) {
            for (var i = 0; i < targetParents.length; i++) {
                var newSource = targetParents[i].source;
                if (!circleFlag) {
                    if(newSource == source){
                        circleFlag=true;
                    }
                    var newPreEdge = [];
                    var key = newSource + '_' + target;
                    var newCurrentIDList = [];
                    var reverseKey = target + '_' + newSource;
                    if ((newSource!=originTarget&&(!in_array(newSource, pathTarget.currentIDList)))||newSource==originTarget) {
                        clone(pathTarget.preEdge, newPreEdge);
                        clone(pathTarget.currentIDList, newCurrentIDList);
                        newPreEdge.push(key);
                        newCurrentIDList.push(newSource);
                        var newPathTarget = {id: newSource, preEdge: newPreEdge, currentIDList: newCurrentIDList, next: []};
                        pathTarget.next.push(newPathTarget);
                        if (!circleFlag) {
                            this.findCircle(source, newSource, originTarget, newPathTarget, paths,circleFlag)
                        }

                        else {
                            var circle = {};
                            circle.edges = [];
                            circle.length = newPathTarget.preEdge.length;
                            circle.totalFlow = 0;
                            for (var j = 0; j < circle.length; j++) {
                                var edge = this.edgeSourceTargetDic[newPathTarget.preEdge[j]]
                                circle.edges.push(edge);
                                circle.totalFlow += edge.flow;
                            }
                            paths.push(circle);

                        }

                    }
                }



            }
        }
    }
    this.findAllPathBetween = function (source, target, originTarget, pathTarget, paths) {

        this.edgeTargetDic = this.getEdgeDic('target','flow');
        var targetParents = this.edgeTargetDic[target];
        pathTarget.next = [];
        if (targetParents) {
            for (var i = 0; i < targetParents.length; i++) {
                var newSource = targetParents[i].source;
                if (newSource != originTarget) {
                    var newPreEdge = [];
                    var key = newSource + '_' + target;
                    var newCurrentIDList = [];
                    var reverseKey = target + '_' + newSource;
                    if ((!in_array(newSource, pathTarget.currentIDList))) {
                        clone(pathTarget.preEdge, newPreEdge);
                        clone(pathTarget.currentIDList, newCurrentIDList);
                        newPreEdge.push(key);
                        newCurrentIDList.push(newSource);
                        var newPathTarget = {id: newSource, preEdge: newPreEdge, currentIDList: newCurrentIDList, next: []};
                        pathTarget.next.push(newPathTarget);
                        if (newSource != source) {
                            this.findAllPathBetween(source, newSource, originTarget, newPathTarget, paths)
                        }
                        else {
                            var newPath = {};
                            newPath.edges = [];
                            newPath.length = newPathTarget.preEdge.length;
                            newPath.totalFlow = 0;
                            for (var j = 0; j < newPath.length; j++) {
                                var edge = this.edgeSourceTargetDic[newPathTarget.preEdge[j]]
                                newPath.edges.push(edge);
                                newPath.totalFlow += edge.flow;
                            }


                            paths.push(newPath);

    //                            var pathStr='';
    //                            for(var j=0;j<newPath.edges.length;j++){
    //                                pathStr+=newPath.edges[j].target;
    //                                pathStr+='<-'
    //                            }
    //                            pathStr+=newPath.edges[newPath.edges.length-1].source;
    //                            console.log(pathStr);

                        }

                    }
                }


            }
        }

    };
    this.dijkstra=function(source,target){
        var dijGraph=new dijkstraGraph();
        var nodes=this.nodes;
        var edges=this.edges;
        var dijNodes=[];
        for(var i=0;i<nodes.length;i++){
            var newNode=dijGraph.addNode(nodes[i].id);
            dijNodes.push(newNode);
        }
        var maxYearFlow=d3.max(edges,function(d){return d.yearFlow})+1;
        for(var i=0;i<edges.length;i++){
            var edgeSource=edges[i].source;
            var edgeTarget=edges[i].target;
            var sourceNode=dijNodes[edgeSource];
            var targetNode=dijNodes[edgeTarget];
            sourceNode.addEdge(targetNode,maxYearFlow-edges[i].yearFlow);
        }
        return dijkstra(dijGraph,dijNodes[source],dijNodes[target]);
    };
    this.findMaxPathBetween=function(source,target){
        var paths=[];
//        while(1){
        var shortestPathEdges=this.dijkstra(source, target);

//            var minEdge={yearFlow:Number.POSITIVE_INFINITY};
        var newPath={};
        newPath.edges = [];
        newPath.totalFlow = 0;
        newPath.length = 0;
        for(var i=0;i<shortestPathEdges.length;i++){
            var edge=this.edgeSourceTargetDic[shortestPathEdges[i]];
            newPath.edges.push(edge);
            newPath.totalFlow+=edge.yearFlow;
            newPath.length=newPath.edges.length;
//                if(edge.yearFlow<minEdge.yearFlow)minEdge=edge;
        }
        if(newPath.length>0)paths.push(newPath);
//            minEdge.ignoreInDijkstra=true;
//        }
        return paths;
    };
    this.findMaxPathBetweenOld=function(source, target, originTarget, pathTarget, paths){
        if(paths.length>=50){
            return
        }
        this.edgeTargetDic = this.getEdgeDic('target','yearFlow');
        var targetParents = this.edgeTargetDic[target];
        pathTarget.next = [];
        if (targetParents) {
            for (var i = 0; i < targetParents.length; i++) {
                var newSource = targetParents[i].source;
                if (newSource != originTarget) {
                    var newPreEdge = [];
                    var key = newSource + '_' + target;
                    var newCurrentIDList = [];
                    var reverseKey = target + '_' + newSource;
                    if ((!in_array(newSource, pathTarget.currentIDList))) {
                        clone(pathTarget.preEdge, newPreEdge);
                        clone(pathTarget.currentIDList, newCurrentIDList);
                        newPreEdge.push(key);
                        newCurrentIDList.push(newSource);
                        var newPathTarget = {id: newSource, preEdge: newPreEdge, currentIDList: newCurrentIDList, next: []};
                        pathTarget.next.push(newPathTarget);
                        if (newSource != source) {
                            this.findMaxPathBetween(source, newSource, originTarget, newPathTarget, paths)
                        }
                        else {
                            var newPath = {};
                            newPath.edges = [];
                            newPath.length = newPathTarget.preEdge.length;
                            newPath.totalFlow = 0;
                            for (var j = 0; j < newPath.length; j++) {
                                var edge = this.edgeSourceTargetDic[newPathTarget.preEdge[j]];
                                newPath.edges.push(edge);
                                newPath.totalFlow += edge.yearFlow;
                            }
                            var minEdge=d3.min(newPath.edges,function(d){
                                return d.yearFlow;
                            });
                            for(var j=0;j<this.edges.length;j++){
                                this.edges[j].yearFlow-=minEdge;
                            }
                            if(paths.length>=50){
                                return
                            }
                            paths.push(newPath);
    //                            var pathStr='';
    //                            for(var j=0;j<newPath.edges.length;j++){
    //                                pathStr+=newPath.edges[j].target;
    //                                pathStr+='<-'
    //                            }
    //                            pathStr+=newPath.edges[newPath.edges.length-1].source;
    //                            console.log(pathStr);

                        }

                    }
                }


            }
        }
    }
}