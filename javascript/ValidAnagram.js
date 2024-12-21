// Given two strings s and t, return true if t is an 
// anagram
//  of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?



// var isAnagram = function(s, t) {
//     let arrayOfS=s.split("");
//     let arrayOfT=t.split("");
//  if(arrayOfS.length!=arrayOfT.length){
//   return false
//  }

//  for(i=0;i<arrayOfS.length;i++){

//  for(j=0;j<arrayOfT.length;j++){
//   if(arrayOfS[i]==arrayOfT[j]){
//    arrayOfT.splice(j,1)
//    break;
//   }
//  }  
//  }
// if(arrayOfT.length==0) return true
//  else return false
 
// };
var isAnagram = function (s, t) {
    let ssorted = s.split("").sort().join("")
    let tsorted = t.split("").sort().join("")
    return ssorted === tsorted
  };