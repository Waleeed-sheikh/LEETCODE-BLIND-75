var lengthOfLastWord = function(s) {
    var trim=s.trimEnd();
       var x=trim.split(" ");
       var j=x[x.length-1];
       var c=j.length
       
        return c;
        
    };