/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
let finalArr;
var levelOrder = function(root) {

    if (root === null) {
        return;
      }

    let queue=[];
    queue.push(root);

    while(queue.length>0){
        let currentNode = queue[0];
        if(currentNode.left!=null){
            queue.push(currentNode.left);
        }
        if (currentNode.right !== null) {
            queue.push(currentNode.right)
          }
       let topValue = queue.shift();  
       console.log(topValue.val)
        // finalArr.push(queue);
    }

};

//[1,2,3]

function TreeNode(val) {
       this.val = val;
       this.left = this.right = null;
   }

let node0 = new TreeNode(3);
let node1 = new TreeNode(9);
let node2 = new TreeNode(20);
let node3 = new TreeNode(15);
let node4 = new TreeNode(7);
node0.left = node1;
node0.right = node2;
node2.left =node3;
node2.right =node4;


levelOrder(node0);