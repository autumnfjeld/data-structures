var Queue = function() {

  this._size = 0;
  this._newest = 0;
  this._oldest = 1;
  this._storage = {};

  };

    // Implement the methods below

  Queue.prototype.enqueue = function(value){
    this._newest++;
    this._size++;
    this._storage[this._newest] = value;
  };

  Queue.prototype.dequeue = function(){
    if(this._size){
      //want to remove and return oldest
      temp = this._storage[this._oldest];
      delete this._storage[this._oldest];
      this._oldest++;
      this._size--;
      return temp;
    }
  };

  Queue.prototype.size = function(){
    return this._size;
  };



  var instance = new Queue();