var wordBreak = function(s, wordDict) {
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
  
    for (let i = 1; i <= s.length; i++) {
      for (let j = 0; j < i; j++) {
        const word = s.slice(j, i);
        if (dp[j] === true && wordDict.includes(word)) {
          dp[i] = true;
          break;
        }
      }
    }
  
    return dp[s.length];
  };

let res = wordBreak("aaaaaaa", ["aaaa", "aaa"]);
console.log(res);