var makeQueue = function() {
  var instance = Object.create(queueMethods);
  instance._size = 0;
  instance._newest = 0;
  instance._oldest = 1;
  // Use an object with numeric keys to store values
  instance._storage = {};

  return instance;
};


var queueMethods = {};

queueMethods.enqueue = function(value){
  this._newest++;
  this._size++;
  this._storage[this._newest] = value;
};

queueMethods.dequeue = function(){
  if(this._size){
    //want to remove and return oldest
    temp = this._storage[this._oldest];
    delete this._storage[this._oldest];
    this._oldest++;
    this._size--;
    return temp;
  }
};

queueMethods.size = function(){
  return this._size;
};