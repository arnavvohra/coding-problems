//https://leetcode.com/problems/longest-palindromic-substring/
//https://leetcode.com/problems/longest-palindromic-substring/discuss/428331/Javascript-DP
// 2D DP
var longestPalindrome = function(s) {
    
	if(s.length <= 1) return s;
	
	// construct a 2D array
    let dp = new Array(s.length-1);
    for(let i=0; i< s.length; i++){
        dp[i] = new Array(s.length-1);
    }
	
    let lps = '';
    
	// base case for one character O(n)
    for(let i = 0; i < s.length; i++) {
        dp[i][i] = true;
        lps = s[i];
    }
    
	// base case for two characters O(n)
    for(let i = 0; i < s.length; i++) {
        if(s[i] === s[i + 1]){   
            dp[i][i+1] = true;
            lps = s.substring(i, i + 2);
        }
    }

    // expand to three or more characters O(n^2)
    for(let i = s.length - 3; i >= 0; i--) {
        for(let j = i + 2; j < s.length; j++) {
            dp[i][j] = dp[i+1][j-1] && s[i] === s[j];
            if(dp[i][j]) lps = lps.length < (j - i + 1) ? s.substring(i, j + 1) : lps;
        }
    }
    
    return lps;
}

res = longestPalindrome("cbbd");
console.log(res);