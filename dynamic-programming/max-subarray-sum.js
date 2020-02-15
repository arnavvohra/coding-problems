//Hackerrank link: https://www.hackerrank.com/challenges/max-array-sum/problem

// Complete the maxSubsetSum function below.
function maxSubsetSum(arr) {
    let dp =[];
    dp[0] = Math.max(0, arr[0]);
    dp[1] = Math.max(arr[0], arr[1]);
    if(arr.length ==1){
        return dp[0];
    }
    else if(arr.length ==2){
        return dp[1];
    }
    for (let i=2; i<arr.length; i++){
    dp[i]=Math.max(dp[i-1],dp[i-2], dp[i-2]+arr[i]);
    }
    return Math.max(dp[arr.length -1], dp[arr.length-2]);
    }

console.log(maxSubsetSum([3,7,4,6,5]));