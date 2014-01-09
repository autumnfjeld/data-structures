var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  var instance = {};

  // Use an object with numeric keys to store values
  storage = {};
  size = 0;
  /* START PROMPT
    var size; // Hint: set an initial value here
  -END PROMPT */

  // Implement the methods below
  extend(instance, stackMethods);
  return instance;
};

var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function(value){
  size++;
  storage[size] = value;
};

stackMethods.pop = function(){
  if (size){
    var temp = storage[size];
    delete storage[size];
    size--;
    return temp;
  }
};

stackMethods.size = function(){
  return size;
};
