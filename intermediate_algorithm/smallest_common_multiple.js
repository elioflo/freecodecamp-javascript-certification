function smallestCommons(arr) {
  if(!(arr[0] <= arr[1])) {
    let aux = arr[0]
    arr[0] = arr[1]
    arr[1] = aux
  }
  const range = new Array(arr[1]-arr[0]+1)
  range[0] = arr[0]
  for (let index = 1; index < range.length; index++) {
    range[index] = range[index - 1] + 1
  }
  for (let index = 0; index < range.length - 1; index++) {
    const number = range[index]
    const pos = index
    for (let index = pos + 1; index < range.length; index++) {
      if(range[index] && range[index] !== 1 && range[index] % number == 0) range[index] /= number 
    }
  }
  console.log(range);
  return range.reduce((acc,current)=> acc * current, 1);
}

console.log(smallestCommons([23,18]));
// smallestCommons([1,5]);