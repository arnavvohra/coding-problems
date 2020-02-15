/**
 * @param {number} n
 * @return {number}
 */

let dict ={}
dict[0]=1;
dict[1]=1;
var climbStairs = function(n) {
  
    if(n in dict){
        return dict[n];
    }
    else{
        dict[n] = climbStairs(n-1) + climbStairs(n-2) ;
        return dict[n]
    }
   
};

res = climbStairs(3);
console.log(res)