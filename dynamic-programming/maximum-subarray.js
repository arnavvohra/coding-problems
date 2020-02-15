//https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function(nums) {

let dict = [];
dict[0] = nums[0];
let max=dict[0];
for(let i=1; i< nums.length; i++){
    dict[i]= Math.max(nums[i], dict[i-1] + nums[i]);
    max = Math.max(max, dict[i]);
}
return max;
};


let res = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
console.log(res);