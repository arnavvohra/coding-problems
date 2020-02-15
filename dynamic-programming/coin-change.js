//https://leetcode.com/problems/coin-change/
//Quite similar to perfect square problem
var coinChange = function(coins, amount) {

    let dp = Array(amount+1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] =0;
    for(let i=1;i<=amount;i++){
        for(let j=coins.length-1;j>=0;j--){
            if(coins[j]<=i){
                dp[i]= Math.min(dp[i], dp[i-coins[j]]+1);
            }          
        }
    }
    if(dp[amount]===Number.MAX_SAFE_INTEGER){
        return -1;
    }else{
        return dp[amount];
    }  
};

let coins = [1, 2, 5], amount = 11;
let res = coinChange(coins,amount);
console.log(res);