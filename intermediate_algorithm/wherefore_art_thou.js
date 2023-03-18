function whatIsInAName(collection, source) {
  const matchObject = (object, source) => {
    for (const key in source) {
      if (!object.hasOwnProperty(key) || object[key] !== source[key])
        return false
    }
    return true
  }
  return collection.filter(object => matchObject(object,source))
}

console.log(whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' },
  ],
  { last: 'Capulet' },
))
