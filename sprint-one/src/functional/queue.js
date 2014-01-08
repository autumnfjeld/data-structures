var makeQueue = function(){
  var instance = {};
  var size = 0;
  var newest = 0;
  var oldest = 1;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  instance.enqueue = function(value){
    newest++;
    size++;
    storage[newest] = value;
  };

  instance.dequeue = function(){
    if(size){
      //want to remove and return oldest
      temp = storage[oldest];
      delete storage[oldest];
      oldest++;
      size--;
      return temp;
    }
  };

  instance.size = function(){
    return size;
  };

  return instance;
};

