function uniteUnique(arr) {
  const newArr = []
  for (const array of arguments) {
    for (const item of array) {
      if(!newArr.includes(item)) newArr.push(item)
    }
  }
  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);