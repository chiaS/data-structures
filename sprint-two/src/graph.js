

var Graph = function(){
  this.storage = [];
};

/*Graph.prototype.addNode = function(newNode, toNode){
  this[newNode] = {value:newNode, connectedNodes:[]};
  debugger;
  if(Object.keys(this).length === 2){
    for(var key in this){
      this[newNode].connectedNodes.push(this[key].value);
      this[key].connectedNodes.push(this[newNode].value);
    }
  }
  if(toNode){
    this[newNode].connectedNodes.push(toNode);
    this[toNode].connectedNodes. push(newNode);
  }
};*/
Graph.prototype.addNode = function(newNode, toNode){
  this.storage.push({value:newNode, connectedNodes:[]});

  if(this.storage.length === 2){ // connect 1st and 2nd nodes
    this.storage[1].connectedNodes.push(this.storage[0].value);
    this.storage[0].connectedNodes.push(newNode);
  }

  if(toNode){
    for (var i = 0; i < this.storage.length; i++){
      if (this.storage[i].value === toNode){
        this.storage[i].connectedNodes.push(newNode);
        break;
      }
    }
    this.storage[this.storage.length-1].connectedNodes.push(toNode);
  }
};

Graph.prototype.contains = function(node){
  for (var i = 0; i < this.storage.length; i++){
    if (this.storage[i].value === node){
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  var targetNodeIndex = this.getIndexByName(node);
  var connections = this.storage[targetNodeIndex].connectedNodes;

  for(var i = 0; i < connections.length; i++){
    var index = this.getIndexByName(connections[i]);
    var secondConnections = this.storage[index].connectedNodes;
    for(var j = 0; j < secondConnections.length; j++){
      if(secondConnections[j] === node)
        secondConnections.splice(j, 1);
    }
  }
  this.storage.splice(targetNodeIndex, 1);
};

Graph.prototype.getIndexByName = function(name){
  for (var i = 0; i < this.storage.length; i++){
    if (this.storage[i].value === name){
      return i;
    }
  }
}
Graph.prototype.getEdge = function(fromNode, toNode){
  if (this.storage[this.getIndexByName(fromNode)].connectedNodes.indexOf(toNode)!== -1){
    return true;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var fromNodeIndex = this.getIndexByName(fromNode);
  var toNodeIndex = this.getIndexByName(toNode);
  this.storage[fromNodeIndex].connectedNodes.push(toNode);
  this.storage[toNodeIndex].connectedNodes.push(fromNode);

};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var fromNodeIndex = this.getIndexByName(fromNode);
  var toNodeIndex = this.getIndexByName(toNode);
  var fromNodeConnections = this.storage[fromNodeIndex].connectedNodes;
  var toNodeConnections = this.storage[toNodeIndex].connectedNodes;

  for (var i = 0; i < fromNodeConnections.length; i++){
    if (fromNodeConnections[i] === toNode){
      fromNodeConnections.splice(i,1);
      if (fromNodeConnections.length === 0){
        this.storage.splice(this.getIndexByName(fromNode),1)
      }
    }
  }
  for (var i = 0; i < toNodeConnections.length; i++){
    if (toNodeConnections[i] === fromNode){
      toNodeConnections.splice(i,1);
      if (toNodeConnections.length === 0){
        this.storage.splice(this.getIndexByName(toNode),1)
      }
    }
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
