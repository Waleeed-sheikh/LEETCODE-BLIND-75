// ou are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

// 'A': Absent.
// 'L': Late.
// 'P': Present.
// The student is eligible for an attendance award if they meet both of the following criteria:

// The student was absent ('A') for strictly fewer than 2 days total.
// The student was never late ('L') for 3 or more consecutive days.
// Return true if the student is eligible for an attendance award, or false otherwise.

 

// Example 1:

// Input: s = "PPALLP"
// Output: true
// Explanation: The student has fewer than 2 absences and was never late 3 or more consecutive days.
// Example 2:

// Input: s = "PPALLL"
// Output: false
// Explanation: The student was late 3 consecutive days in the last 3 days, so is not eligible for the award.
 
var checkRecord = function(s) {
    let aCount = 0;
    let lCount = 0;
    for (let i=0; i<s.length; i++){
        if(s[i] === 'A') {
            aCount++;
            lCount = 0;
            }
        if(s[i] === 'L') lCount++;
        if(s[i] === 'P') lCount = 0;
        if(aCount>1 || lCount>2) return false;
    }
    return true;

//  var t = {
//      a: 0,
//      l: 0
//  } 
//  for (let i=0; i<s.length; i++){
//      if(s[i] === 'A') {
//          t['a']++
//          if(t['l']<3)t['l'] = 0
//      } else if(s[i] === 'L') {
//          t['l']++
//      } else {
//          if(t['l']<3)t['l'] = 0
//      }
//  }

//  console.log(t)

//  if(t['a'] > 1 || t['l'] > 2) return false;
//  else return true;
};