//https://leetcode.com/problems/maximum-product-subarray/
//https://leetcode.com/problems/maximum-product-subarray/discuss/416395/JavaScript-Solution-w-Explanation
//https://www.youtube.com/watch?v=vtJvbRlHqTA
//O(n^2) My solution with dp - Time limit exceeded
// var maxProduct = function(nums) {
//   let cache = {}
 
//   let max = nums[0];
//   for(let i=0; i<nums.length; i++){
//     cache[`${i}:${i}`] = nums[i];
//     if(cache[`${i}:${i}`] >max){
//         max = cache[`${i}:${i}`];
//     }
//   }
//   for(let i=0; i< nums.length; i++){
//       for(let j=i+1; j<nums.length;j++){
//           cache[`${i}:${j}`]= cache[`${i}:${j-1}`]*nums[j];
//           if(cache[`${i}:${j}`]>max){
//             max=cache[`${i}:${j}`];
//         }
//       }
//   }
//   return max;
// };

// Solution with O(n) time complexity
var maxProduct = function(nums) {
    let prevMax = nums[0];
    let prevMin = nums[0];
    let result = nums[0];
    for (let i=1;i<nums.length;i++) {
        // given the new number, the new maximun can have 3 conditions
        // 1. number(+) * prevMax(+) is the largest
        // 2. number(+) it self is the largest
        // 3. number(-) * prevMin(-) is the largest 
        curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);
        
        curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);

		// updating the prevMax & prevMin, these two may swap locations
        prevMax = curMax
        prevMin = curMin

        result = Math.max(curMax, result);
    }
    return result;
}

let res = maxProduct([2,3,-2,4]);
console.log(res);