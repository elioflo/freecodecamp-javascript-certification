function destroyer(arr) {
  const newArr = []
  const extras =  [...arguments]
  extras.shift()
  for (const item of arr) {
    if (!extras.includes(item)) newArr.push(item)
  }
  return newArr
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))

