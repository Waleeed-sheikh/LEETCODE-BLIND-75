// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "Mr Ding"
// Output: "rM gniD"

var reverseWords = function(s) {
    
    var result="";
   var array=s.split(" ")
   
   for(i=0;i<array.length;i++){
   
       var word=array[i];
       var wordarr= word.split("")
       var wordrev=wordarr.reverse()
       var answer=wordrev.join("")
       var result=result.concat(answer+" ")
       
   }
       var result=result.trim()
       return result
   };
   