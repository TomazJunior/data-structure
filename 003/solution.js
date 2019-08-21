const assert = require('assert');

/**
 * Question:
 * 
 * Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.
 * 
 * For example, given the following Node class
 *
 *   class Node:
 *       def __init__(self, val, left=None, right=None):
 *           self.val = val
 *           self.left = left
 *           self.right = right
 * The following test should pass:
 *
 * node = Node('root', Node('left', Node('left.left')), Node('right'))
 * assert deserialize(serialize(node)).left.left.val == 'left.left'
 */

 class Node {
   /**
    * 
    * Node representation class
    * 
    * 
    * @param {string} val 
    * @param {Node} left 
    * @param {Node} right 
    */
   constructor(val, left = null, right = null) { 
     this.val = val;
     this.left = left;
     this.right = right;
   }
 }

 const node = new Node('root', new Node('left', new Node('left.left')), new Node('right'));
 const MARKER = 'X';
 const SEPARATOR = '|';


 /**
  * 
  * Serialize a node to string, set MARKER to empty nodes
  * @param {Node} node 
  */
 function serialize(node) {
   if (!node) { return MARKER + SEPARATOR; }
 
   let values = node.val + SEPARATOR;
   values += serialize(node.left);
   values += serialize(node.right);
   return values;
 }

 /**
  * Deserialize a string node into a Node
  * @param {string} serializedNode 
  */
 function deserialize(serializedNode) {
  const nodes = serializedNode.split(SEPARATOR);
  return deserializeNodes(nodes);
 }

 /**
  * 
  * Deserialize an array of values into a Node
  * 
  * @param {Array<string>} values 
  */
 function deserializeNodes(values) {
  const val = values.shift();
  if (val !== MARKER) {
    const node = new Node(val);
    node.left = deserializeNodes(values);
    node.right = deserializeNodes(values);
    return node;
  }
 }

 assert.equal(deserialize(serialize(node)).left.left.val, 'left.left');
 assert.equal(deserialize(serialize(node)).right.val, 'right');