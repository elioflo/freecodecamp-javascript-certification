function SCM(a, b){
  for (let number = 1; number <= b; number++) {
    if((a * number) % b === 0)
      return a * number    
  }
}

function smallestCommons(arr) {
  if(arr[0] > arr[1]) arr = [arr[1], arr[0]]
  const numbers = Array.from({length: arr[1] - arr[0] + 1}, (v,i) => arr[0] + i)
  return numbers.reduce((acc,currentValue)=> SCM(acc,currentValue), 1)
}

console.log(smallestCommons([4,3]));