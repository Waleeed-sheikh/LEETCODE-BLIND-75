// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.

// Example 1:

// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:

// Input: s = "abcde", goal = "abced"
// Output: false

var rotateString = function(s, goal) {

    var skill=s.split("")
    var goool=goal.split("")
      for (i=0;i<skill.length;i++){
        var popped =skill.shift(skill[0])
        skill.push(popped);
        var string1=skill.join("");
        var string2=goool.join("");
       if(string1==string2){
        return true
       }
       
      
      }
     return false;
    };