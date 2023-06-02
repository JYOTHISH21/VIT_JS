function reverse(s)
{
    var i=s,r=0;
      
    // Looping from the end
   while(i>0) {
        r=r*10 + i%10;
        i=Math.floor(i/10)
    }
      
    // Joining the array elements
    return r;
}

console.log(reverse(33423));