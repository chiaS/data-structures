var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};

  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enque = function(value){
  this.storage[this.size()] = value;
};

queueMethods.deque = function(){

};

queueMethods.size = function(){
  return Object.keys(this.storage).length;
};

