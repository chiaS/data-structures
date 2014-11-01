var makeBinarySearchTree = function(value){
  var newBinarySearchTree = Object.create(BSTMethods);

  newBinarySearchTree.right = undefined;
  newBinarySearchTree.left = undefined;
  newBinarySearchTree.value = value;
  return newBinarySearchTree;
};

var BSTMethods = {};

BSTMethods.insert = function(value){
  var newTree = makeBinarySearchTree(value);

  var treeTraverse = function(node){
    if (value < node.value) {
      if(node.left === undefined){
        node.left = newTree;
      } else {
        treeTraverse(node.left);
      }
    } else {
      if(node.right === undefined){
        node.right = newTree;
      }else{
        treeTraverse(node.right);
      }
    }
  };

  treeTraverse(this)

};

BSTMethods.contains = function(value){

  var found = false;

  var treeTraverse = function(node){
    if(value === node.value){
        found = true;
    } else if (value < node.value && node.left !== undefined) {
      treeTraverse(node.left);
    } else if (value > node.value && node.right !== undefined) {
      treeTraverse(node.right);
    }
  };

  treeTraverse(this);
  return found;

};

BSTMethods.depthFirstLog = function(callback){

  var treeTraverse = function(node){
    if (node.value){
      callback(node.value);
    }
    if (node.left !== undefined) {
      treeTraverse(node.left);
    } else if (node.right !== undefined) {
      treeTraverse(node.right);
    }
  };
  treeTraverse(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
