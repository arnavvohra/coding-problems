//https://leetcode.com/problems/longest-increasing-subsequence/
//https://www.youtube.com/watch?v=DxhfziFFJNc

var lengthOfLIS = function(nums) {
    if(nums.length===0){
        return 0;
    }
    let dp = Array(nums.length).fill(1);
    for (let i=1; i< nums.length; i++){
        for (let j=0;j<i;j++){
            if(nums[i]>nums[j]){
                possibleAns= dp[j]+1;
                if(possibleAns>dp[i]){
                    dp[i]=possibleAns;
                }
            }
        }   
    }

    let highest=0; 
    for(let i=0; i<nums.length;i++){
        if(dp[i]>highest){
            highest = dp[i];
        }
    }
    return highest;
}
let res= lengthOfLIS([10,9,2,5,3,7,101,18]);
console.log(res);