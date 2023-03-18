function sumAll(arr) {
  let sum = 0
  for (let number = Math.min(arr[0],arr[1]); number <= Math.max(arr[0],arr[1]); number++) {
    sum += number    
  }
  return sum;
}

sumAll([1, 4]);