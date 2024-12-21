var isPalindrome = function(s) {
    var stripped = s.replace(/[^A-Za-z0-9]/g, '');
     var lower=stripped.toLowerCase();
 
 
     
     var nospace=lower.split(" ").join("");
     var array=nospace.split("");
 
     var toreverse=array.reverse();
     var palindmore=toreverse.join("")
     if(nospace==palindmore){
         return true;
     }
     else{
         return false;
     }
 };