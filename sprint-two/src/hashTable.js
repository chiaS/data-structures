var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var existingValue = this._storage.get(i);
  if(existingValue !== undefined){
    existingValue.push([k, v]);
    this._storage.set(i, existingValue);
  }else{
    this._storage.set(i, [[k, v]]);
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) !== undefined){
    var result = this._storage.get(i);
    for(var j = 0; j < result.length; j++){
      if (result[j][0] === k){
        return result[j][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(bucket, index, storage){
      if(index === i){
        for(var j=0; j<bucket.length; j++){
          if(bucket[j][0] === k){
            bucket[j].splice(j, 1);
          }
        }
      }
    });
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
