function persistence(num) {
    let z = 0;
    while (num.toString().length !== 1) {
      num = num.toString().split("").reduce((a,b)=>a*b);
      z++;
    }
    return z;
 }