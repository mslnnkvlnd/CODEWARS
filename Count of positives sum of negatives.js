function countPositivesSumNegatives(input) {
    if (input && input.length) {
      return input.reduce(function(a, c) {
        c <= 0 ? a[1] += c : a[0] += 1;
        return a;
      }, [0,0]);
      
    } else {
      return [];
    }
}