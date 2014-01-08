var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  /* START PROMPT
    var size; // Hint: set an initial value here
  -END PROMPT */

  // Implement the methods below
  instance.push = function(value){
    size++;
    storage[size] = value;
  };

  instance.pop = function(){
    if (size){
      var temp = storage[size];
      delete storage[size];
      size--;
      return temp;
    }
  };

  instance.size = function(){
    return size;
  };

  return instance;
};