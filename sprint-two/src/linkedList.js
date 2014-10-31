var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if (list.head === null && list.tail === null){
      list['tail'] = newNode;
      list['head'] = list['tail'];
    } else {
      list['tail'].next = newNode;
      list['tail'] = newNode;

    }

  };

  list.removeHead = function(){
    if (list.head !== null && list.tail !== null){
      var head = list['head'];
      list['head'] = head.next; //or list['head'].next
      return head.value;
    } else {
      return null;
    }
  };

  list.contains = function(target){
    var node = list.head;
    var nodeChecker = function(node){
      if (node.value === target){
        return true;
      } else if (node.next === null){
        return false;
      }
      return nodeChecker(node.next);
    }
    return nodeChecker(node);
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
