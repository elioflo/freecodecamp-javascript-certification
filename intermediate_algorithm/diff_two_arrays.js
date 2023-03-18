function diffArray(arr1, arr2) {
  const newArr = [];
  for (const item of arr1) {
    if(!arr2.includes(item))
      newArr.push(item)
  }
  for (const item of arr2) {
    if(!arr1.includes(item))
      newArr.push(item)
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);