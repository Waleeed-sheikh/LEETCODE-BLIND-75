// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

var isPowerOfThree = function(n) {
    if(n==-1){
        return false
    }
    number=1
    for(number=1;number<n;number=number*3){
        
    }
    if(number==n){
        return true;
    }
    else{
        return false}
};