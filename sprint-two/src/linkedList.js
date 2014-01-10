var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if(list.head === null && list.tail === null) {
      list.head = newNode;
    }
    else {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function(){
    var newHead = list.head.next;
    delete(list.head);
    list.head = newHead;
  };

  list.contains = function(target, node){
    if(node === undefined) {
      node = list.head;
    }
    if(node.value === target) {
      return true;
    }
    else {
      if(node.next === null) {
        return false;
      }
      return list.contains(target, node.next);
    }
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
