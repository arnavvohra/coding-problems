//https://leetcode.com/problems/house-robber/
var rob = function(nums) {
  if(nums.length==0){
    return 0;
  }
  let dp =[];
  dp[0]=nums[0];
  if(nums.length==1){
    return dp[0]
  } 
  dp[1]= Math.max(nums[0],nums[1]);
  for (let i=2; i< nums.length; i++){
    dp[i]=Math.max(dp[i-2]+nums[i], dp[i-1]);
  }

  return Math.max(dp[nums.length-1], dp[nums.length-2]);
};

let res = rob([2,7,9,3,1]);
console.log(res);