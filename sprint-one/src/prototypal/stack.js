var makeStack = function() {
  // Hey! Copy your code from src/functional-shared/stack.js and paste it here
  var instance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  instance._storage = {};
  instance._size = 0;

  return instance;
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
