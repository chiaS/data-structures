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
    for(var key in list){
      if(list[key].value === target){
        return true;
      }
    }
    return false;
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
