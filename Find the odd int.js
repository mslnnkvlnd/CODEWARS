function findOdd(A) {
    for(let z = 0; z < A.length; z++){
      const count = A.filter(value => value === A[z]).length;
      if(count % 2 == 1){
        return A[z];
      }
    }
    return -1;
  }