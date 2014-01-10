var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {
};

treeMethods.addChild = function(value){
  var newTree = makeTree(value);
  if(this.children === undefined) {
    this.children = [];
  }
  this.children.push(newTree);
};

treeMethods.contains = function(target){
  for(var i = 0; i < this.children.length; i++) {
    if(target === this.children[i].value) {
      return true;
    }
  }
  return false;
};

var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};

