//https://leetcode.com/problems/unique-paths/

//Working Math solution,, possible solutions = (m+n-2)!/(m-1)!(n-1)!, -1 cause we are starting from topleft square and not outside the board 

// var uniquePaths = function(m, n) {
//     return factorial(m+n-2)/(factorial(m-1)*factorial(n-1));
    
// };
// let dict = {}
// function factorial(x){
//     if(x===0 || x===1){
//         return 1;
//     }
//     if(x in dict){
//         return dict[x];
//     }else{    
//         dict[x] = x*factorial(x-1)
//         return dict[x];}
// }

//Dynamic Programming - To reach every square, one can reach from either left or top square

var uniquePaths = function(m, n) {
	// construct a 2D array
    let dp=[];
    for (let i = 0; i <= m; i++) {
        dp[i] = [];
    }
    for(let i=1; i<=m; i++){//Start filling from i, j=1 as expression contains i-1 and j-1 (small hack).
        for(let j=1;j<=n;j++){
            if(i===1 || j===1){
                dp[i][j]=1;
            }else{
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
    }

    return dp[m][n];
};

let res = uniquePaths(7,3);
console.log(res);