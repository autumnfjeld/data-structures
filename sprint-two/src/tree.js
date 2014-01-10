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
  var result = false;
  var recursiveSearch = function(node, target) {
    for(var i = 0; i < node.children.length; i++) {
      if(target === node.children[i].value) {
        result = true;
      } else {
        if(node.children[i].children !== undefined) {
          recursiveSearch(node.children[i], target);
        }
      }
    }
  };
  if(this.children !== undefined) {
    recursiveSearch(this, target);
  }
  return result;
};

var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};

