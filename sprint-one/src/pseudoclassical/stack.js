var Stack = function() {
  //this.instance = {};
  this._storage = {};
  this._size = 0;

};

Stack.prototype.push = function(value){
  this._size++;
  this._storage[this._size] = value;
};

Stack.prototype.pop = function(){
  if (this._size){
    var temp = this._storage[this._size];
    delete this._storage[this._size];
    this._size--;
    return temp;
  }
};

Stack.prototype.size = function(){
  return this._size;
};

var instance = new Stack();

