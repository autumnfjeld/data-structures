// A linked list class in functional style

var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
    if (!list.head){
      list.head = node;
    }else{
      list.tail.next = node;
    }
    list.tail = node;
  };

  list.removeHead = function(value){
    var newHead = list.head.next;
    list.head = newHead;
    return newHead;
  };

  list.contains = function(value){
    var found = false;
    if (list.head.value === value){
      return true;
    }

    var search = function(node){
      if (node){
        if (node.value === value){
          found = true;
          return;
        }
        search(node.next);
      }else{
        return found;
      }
    };

    search(list.head.next)
    return found;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};


