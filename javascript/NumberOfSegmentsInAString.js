// Given a string s, return the number of segments in the string.

// A segment is defined to be a contiguous sequence of non-space characters.

// Example 1:

// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
// Example 2:

// Input: s = "Hello"
// Output: 1
 
var countSegments = function(s) {
    counter=0
      var nospace=s.trim()
      var array=nospace.split(" ")
    
    for(i=0;i<array.length;i++){
      if(array[i]!=""){
      counter++;}
    }
    return counter
  };