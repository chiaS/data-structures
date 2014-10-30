var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  return newStack;
};

var stackMethods = {};

stackMethods.pop = function(){
  var value = this.storage[this.size()-1];
  delete this.storage[this.size()-1];
  return value;
}

stackMethods.push = function(value){
  this.storage[this.size()] = value;
}

stackMethods.size = function(){
  return Object.keys(this.storage).length;
}
