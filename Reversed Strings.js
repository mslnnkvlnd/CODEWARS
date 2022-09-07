function solution(str) {
    let n = ''
    for(let i of str) {
      n = i + n
    }
    return n
  }