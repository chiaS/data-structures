var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    var index = someInstance.size();
    storage[index] = value;
  };

  someInstance.pop = function(){
    var index = someInstance.size() - 1;
    var result = storage[index];
    delete storage[index];
    return result;
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};
