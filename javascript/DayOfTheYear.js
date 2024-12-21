// Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.

 

// Example 1:

// Input: date = "2019-01-09"
// Output: 9
// Explanation: Given date is the 9th day of the year in 2019.
// Example 2:

// Input: date = "2019-02-10"
// Output: 41
 

var dayOfYear = function(date) {
    var month=date[5]+date[6]
    var day=date[8]+date[9]
    var year=date[0]+date[1]+date[2]+date[3]
    var y=Number(year);
    var x = Number(day);
 if(y%4==0&&y!=1900){

 switch(month){
  case "01": //jam=31
   result=x+0;
   return result;
    case "02": //feb=28
   result=x+31;
   return result;
    case "03": //mar=31
   result=x+31+29;
  return result;
    case "04": //apr=30
   result=x+31+29+31;
   return result;
    case "05": //may=31
   result=x+31+29+31+30;
  return result;
    case "06": //june=30
   result=x+31+29+31+30+31;
   return result;
    case "07": //july=31
   result=x+31+29+31+30+31+30;
   return result;
    case "08": //aug=31
   result=x+31+29+31+30+31+30+31;
  return result;
    case "09": //sep=30
   result=x+31+29+31+30+31+30+31+31;
  return result;
    case "10": //oct=31
   result=x+31+29+31+30+31+30+31+31+30;
   return result;
    case "11": //nov=30
   result=x+31+29+31+30+31+30+31+31+30+31;
   return result;
    case "12": //dec=31
   result=x+31+29+31+30+31+30+31+31+30+31+30;
  return result;
   
   
 }
 }
 else{switch(month){
  case "01": //jam=31
   result=x+0;
   return result;
    case "02": //feb=28
   result=x+31;
   return result;
    case "03": //mar=31
   result=x+31+28;
  return result;
    case "04": //apr=30
   result=x+31+28+31;
   return result;
    case "05": //may=31
   result=x+31+28+31+30;
  return result;
    case "06": //june=30
   result=x+31+28+31+30+31;
   return result;
    case "07": //july=31
   result=x+31+28+31+30+31+30;
   return result;
    case "08": //aug=31
   result=x+31+28+31+30+31+30+31;
  return result;
    case "09": //sep=30
   result=x+31+28+31+30+31+30+31+31;
  return result;
    case "10": //oct=31
   result=x+31+28+31+30+31+30+31+31+30;
   return result;
    case "11": //nov=30
   result=x+31+28+31+30+31+30+31+31+30+31;
   return result;
    case "12": //dec=31
   result=x+31+28+31+30+31+30+31+31+30+31+30;
  return result;
   
   
 }}
 
};
