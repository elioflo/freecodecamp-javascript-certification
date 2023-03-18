function fearNotLetter(str) {
  for (let index = 0; index < str.length - 1; index++) {
    if(str.codePointAt(index) + 1 !== str.codePointAt(index + 1))
      return String.fromCodePoint(str.codePointAt(index) + 1)
  }
  return undefined;
}

console.log(fearNotLetter("abce"))
// fearNotLetter("abce");