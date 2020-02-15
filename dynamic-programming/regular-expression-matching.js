//Didn't get the solution
//https://leetcode.com/problems/regular-expression-matching/
//Essentially, s should be in p

//Recursive solution
// var isMatch = function(s, p) {
//     if(!p) {
//         console.log("Hi")
//         return !s
//     }
//     let first = !!s && (p[0] === s[0] || p[0] === '.')

//     if (p.length >= 2 && p[1] === '*') {
//         return isMatch(s, p.slice(2,)) || (first && isMatch(s.slice(1,), p))
//     } else {
//         return first && isMatch(s.slice(1,), p.slice(1,))
//     }	
// };

//Dynamic programming
function isMatch(s, p) {
    var lenS = s.length;
    var lenP = p.length;
    var map = {};
  
    return check(0, 0);
  
    function check(idxS, idxP) {
      if (map[idxS + ':' + idxP] !== undefined) {
          return map[idxS + ':' + idxP];
        }
      if (idxS > lenS) {
          return false;
        }
      if (idxS === lenS && idxP === lenP) {
          return true;
        }
  
      if (p[idxP] === '.' || p[idxP] === s[idxS]) {
        map[idxS + ':' + idxP] = p[idxP + 1] === '*' ?
          check(idxS + 1, idxP) || check(idxS, idxP + 2) :
          check(idxS + 1, idxP + 1);
      } else {
        map[idxS + ':' + idxP] = p[idxP + 1] === '*' ?
          check(idxS, idxP + 2) : false;
      }
      return map[idxS + ':' + idxP];
    }
  }

res = isMatch("aab", "c*a*b")
console.log(res);