var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  var instance = {};

  // Use an object with numeric keys to store values
  instance._storage = {};
  instance._size = 0;
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
  this._size++;
  this._storage[this._size] = value;
};

stackMethods.pop = function(){
  if (this._size){
    var temp = this._storage[this._size];
    delete this._storage[this._size];
    this._size--;
    return temp;
  }
};

stackMethods.size = function(){
  return this._size;
};
