// A graph class in pseudoclassical style

var Graph = function(){
  this._nodes = {};   // {node : node}
  this._edges = {};   // {fromNode: toNode}
};

Graph.prototype.addNode = function(newNode, toNode){
  var numNodes = Object.keys(this._nodes).length;
  this._nodes[newNode] = newNode;
  if (toNode === undefined && numNodes === 1){
    var lonelyNode = Object.keys(this._nodes)[0];
    this.addEdge(lonelyNode, newNode)
  }
  if (toNode){
    this.addEdge(newNode, toNode)
  }
};

Graph.prototype.contains = function(node){
  if (this._nodes[node]){
    return true;
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  delete this._nodes[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  if (this._edges[fromNode] === toNode){
    return true;
  } else{
    return false;
  } 
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this._edges[fromNode] = toNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if (this._edges[fromNode] === toNode){
    delete this._edges[fromNode];
  }
  //check if nodes are now edgeless and remove them if so
  var removeFromNode = true;
  var removeToNode = true;
  for (var key in this._edges){
    if (fromNode === key || fromNode === this._edges[key]) removeFromNode = false;
    if (toNode === key || toNode === this._edges[key]) removeToNode = false;
  }
  if (removeFromNode) delete this._nodes[fromNode];
  if (removeToNode) delete this._nodes[toNode];
};




