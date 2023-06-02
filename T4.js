function reverse(s)
{
    const r = [];
    const length = s.length - 1;
      
    // Looping from the end
    for(let i = length; i >= 0; i--) {
        r.push(s[i]);
    }
      
    // Joining the array elements
    return r.join('');
}

console.log(reverse("Hello"));