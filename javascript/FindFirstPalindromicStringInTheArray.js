// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

// Example 1:

// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.
// Example 2:

// Input: words = ["notapalindrome","racecar"]
// Output: "racecar"
// Explanation: The first and only string that is palindromic is "racecar".

var firstPalindrome = function(words) {
    for(i=0;i<words.length;i++){
        var test=words[i];
        var array=test.split('');
        var reverse=array.reverse();
        var match=reverse.join("");
        if(test==match){
        return test;
        }else{
             var final=""
        }
    
    }
    return final;
};
