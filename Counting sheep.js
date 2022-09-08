function countSheeps(arrayOfSheep) {
    let count = 0;
    arrayOfSheep.forEach( function (sheep) {
      if (sheep)
        count++;
    });
    return count;
  }