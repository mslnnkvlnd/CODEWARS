function fakeBin(x){
    let z = '';
    for(let c = 0; c < x.length; c++){
      if(x[c] < 5){
        z += 0;
      } else {
        z += 1;
      }
    }
    return z
  }