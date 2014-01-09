var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    var incoming = makeNode(value);

    if (list.head === null) {
      list.head = incoming;
      list.tail = incoming;
    }
    else {
    // need the new item to alter the previous item
      list.tail.next = incoming.value;
      list.tail = incoming;
    }
  };

  list.removeHead = function(){
    var nextToHead =  
  };

  list.contains = function(target, node){
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
