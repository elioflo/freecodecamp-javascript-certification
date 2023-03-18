function spinalCase(str) {
  const words = str.match(/[A-Z]?[a-z]+/g)
  return words.join('-').toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));