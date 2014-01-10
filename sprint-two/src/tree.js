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
};

treeMethods.contains = function(target){
};

var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};

