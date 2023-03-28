function steamrollArray(arr) {
  if(Array.isArray(arr)){
    if(arr.length > 0) return [...steamrollArray(arr[0])].concat(steamrollArray(arr.slice(1)))
    return arr
  }
  return [arr];
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[1],[2],[3]]));
