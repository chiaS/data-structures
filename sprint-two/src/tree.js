var makeTree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var tree = makeTree(value);
  this.children.push(tree);
};

treeMethods.contains = function(target){

  var found = false;

  var treeSearch = function(node){
    debugger;
    if (node.value === target){
      found = true;
    } else {
    for(var i = 0; i < node.children.length; i++){
        treeSearch(node.children[i]);
      }
    }
  }
  treeSearch(this);
  return found;
  /*if (treeSearch(this)){
    return true;
  } else {
    return false;
  }*/

};


/*
 * Complexity: What is the time complexity of the above functions?
 */

