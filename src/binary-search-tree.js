const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
  this.root = null;
}
  root(){
    return this.root ? this.root : null;
  }
  add(data) {
let newNode = new Node(data);
    if(this.root === null)
    {
      this.root= newNode;
    }
    else {
        this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
        if (node.left === null) {
            node.left = newNode;
        }
        else {
            this.insertNode(node.left, newNode);
        }
    } 
    else {
        if (node.right === null) {
            node.right = newNode;
        }
        else {
            this.insertNode(node.right, newNode);
        }
    }
}

 has(data) {
    return searchWithIn(this.root, data);

    function searchWithIn(node, data) {
      if (!node) {
        return false
      }

      if (node.data === data) {
        return true
      }

      return node.data > data ? searchWithIn(node.left, data) : searchWithIn(node.right, data)

    }
  }
  find(data) {
    return findIt(this.root, data);

    function findIt(node, data)
      {
        if(!node)
          return node;
        if(node.data === data)
        {
          return data;
        }
        return data> node.data ?  findIt(node.right, data) : findIt(node.left, data); 
      }
    
  }


   remove(data) {
    this.root = removeNode(this.root, data);

    function removeNode(node, data) {
      if (!node) {
        return null
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }

        if (!node.left) {
          node = node.right
          return node
        }

        if (!node.right) {
          node = node.left
          return node
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data)
        return node
      }
    }
   }

   min() {
if(this.root === null)
{
  return 'no elements';
}
    let node = this.root;
    while(node.left)
      {
        node = node.left;
      }
    return node.data;
  }

  max() {
    if(this.root === null)
    {
      return 'no elements';
    }
    let node = this.root;
    while(node.right)
      {
        node = node.right;
      }
    return node.data;

  }
}
module.exports = {
  BinarySearchTree
};
