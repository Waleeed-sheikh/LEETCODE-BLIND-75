
// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25
 

// Constraints:

// -100.0 < x < 100.0
// -231 <= n <= 231-1
// n is an integer.
// Either x is not zero or n > 0.
// -104 <= xn <= 104



//The commented solution is my own logic and uncommented is the simple power equation in js



// var myPow = function(x, n) {

//     if(n>0){
// res=1;
//         for(i=1;i<n+1;i++){
//             res=x*res;
//         }
//         return res;
//     }if(n==0){
//         return 1
//     }
//     if(n<0){
//         res2=1
//         for(i=1;i>n+1;i--){
//            res2=x*res2;
//         }
//         final=1/res2;
//         return final;
//     }
// };
var myPow = function(x, n) {
    // const y=n
    // const res=1
    // if(n<0) y=-n;

    // for(i=1;i<y+1;i++){
    //     res=x*res;
    // }
    // if(n<0){
    //     return 1/res;
    // }
    // if(n==0){
    //     return 1;
    // }
    // if(n>0){
    //     return res
    // }
   return x**n
};