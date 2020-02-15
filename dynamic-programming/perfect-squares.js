//https://leetcode.com/problems/perfect-squares/
//Math solution : https://leetcode.com/problems/perfect-squares/discuss/476318/Math-solution-explained%3A-Beats-100-Javascript-%2B-Whiteboard
//Dp : https://leetcode.com/problems/perfect-squares/discuss/310668/Heavily-commented-JavaScript-Dynamic-Programming-solution

function numSquares(n) {
    
    // General strategy is to build up a memoization array with the smallest amount of squares needed to make the number at each index
    // since the only square in the beginning is 1, until we see 4, it's very boring:
    // to make 1, we use 1, to make 2 we use two 1's, to make 3, we use three 1's
    // mem[1] = 1, d[2] = 2, mem[3] = 3
    // initially, mem[4] will also use 1s and end up at 4
    // but now we can consider 2^2 too since the inner loop now allows it
    // we then compare, is what we have calculated so far better? or using this new square?
    // To answer that, we subtract the current square (4) from i (4) and look up in our mem lookup to see how many steps that took
    // mem[0] is zero of course, so we end up with Math.min(4, 0 + 1). The 2nd is less of course, so we set mem[4] to 1
    
    // Our memory lookup. Others often name this 'dp'
    let dp = [];
    dp[0]=0;

    // Outer loop, where we build up till we reach n
    for (let i = 1; i <= n; i++) {
        // At maximum it can take i steps 1*i=i;
        dp[i] = i;
        // Now loop over all squares that are smaller or equal to the current i.
        for (let j = 1; j * j <= i; j++) {                  
            // The smalles amount of squares is either what we already have, or what we can build with a new square and remainder
            dp[i] = Math.min(dp[i], dp[i - j*j] + 1) //+1 as we are adding one element and then looking at remainder
        }            
    }
    return dp[n];
}

let res = numSquares(12);
console.log(res);