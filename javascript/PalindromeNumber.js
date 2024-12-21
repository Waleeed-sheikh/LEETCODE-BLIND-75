var isPalindrome = function(x) {
    
    var string=x.toString();
    var array=string.split("")
    var first=array.join(' ')
    var rev=array.reverse()  
    var second=rev.join(' ')


    if(first==second){
        return true
    }
        else{
            return false
        }
};