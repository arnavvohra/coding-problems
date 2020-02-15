//https://www.interviewbit.com/problems/length-of-longest-subsequence/

function longestSubsequenceLength(arr){

    let incr = [];
    incr[0]=1;
    //Setting the value of the element in the ascending squence and storing in incr array
    for (let i=1; i<arr.length ;i++){
        let max=0;
        for(let j=i-1; j>=0; j--){
            if(arr[j]<arr[i] && max<incr[j]){
                max = incr[j]
            }
        }
        incr[i]=max +1
    }
    let decr = [];
    decr[arr.length-1]=1;
        //Setting the value of the element in the descending squence and storing in decr array
        for (let p=arr.length-2; p>=0 ;p--){
            let max=0;
            for(let q=p+1; q<arr.length; q++){
                if(arr[q]<arr[p] && max<decr[q]){
                    max = decr[q]
                }
            }
            decr[p] = max+1

}
    let output = 0;
    for (let m=0; m<arr.length; m++){
        let sum = incr[m] + decr[m] - 1
        if(sum > output){
            output = sum;
        }
    }
    return output
}
let input = [1,11,2,10,4,5,2,1];
console.log(longestSubsequenceLength(input));