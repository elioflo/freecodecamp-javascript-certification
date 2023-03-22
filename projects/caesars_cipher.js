function rot13(str) {
  return str.split('').map(char => {
    if('A' <= char && char <= 'Z')
      return String.fromCharCode(char.charCodeAt(0)+13 > 'Z'.charCodeAt(0)? 'A'.charCodeAt(0) + (char.charCodeAt(0) + 13) % 'Z'.charCodeAt(0) - 1: char.charCodeAt(0) + 13)
    if('a' <= char && char <= 'z')
      return String.fromCharCode(char.charCodeAt(0)+13 > 'z'.charCodeAt(0)? 'a'.charCodeAt(0) + (char.charCodeAt(0) + 13) % 'z'.charCodeAt(0) - 1: char.charCodeAt(0) + 13)
    return char
  }).join('')
}