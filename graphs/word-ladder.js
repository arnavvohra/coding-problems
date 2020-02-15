//https://leetcode.com/problems/word-ladder/

function ladderLength(beginWord, endWord, wordList) {
    const dict = new Set(wordList); //We need to lookup words in constant time, Set is great for that.
    if(!dict.has(endWord)){
        return 0;//If endword doesn't exist in set, return 0.
    }
    queue = [];
  }