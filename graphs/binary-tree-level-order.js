//https://leetcode.com/problems/binary-tree-level-order-traversal/

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

var levelOrder = function(root) {
    if (root === null) {
        return [];
      }
    let finalArr= [];
    let queue=[];
    queue.push(root);

    while(queue.length>0){
        let arr =[]
        len = queue.length;
        //Add children of each node in the queue
        for(let i=0; i<len;i++){
            let currentNode = queue[i];
            if(currentNode.left!=null){
                queue.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right)
              }
            //Push elements of current level in an array
            arr.push(currentNode.val);
        }
        //Remove elements of same level from array
        queue.splice(0,len)
        finalArr.push(arr);
    }

    return finalArr

};


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


let res =levelOrder(node0);
console.log(res);