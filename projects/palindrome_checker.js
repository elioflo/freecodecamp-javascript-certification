function palindrome(str) {
  const NotAlphanumeric = /[^a-z0-9]/gi
  str = str.replaceAll(NotAlphanumeric,'').toLowerCase()
  for (let index = 0; index < str.length / 2 ; index++) {
    if(str[index] !== str[str.length-1-index])
      return false
  }
  return true;
}

palindrome("eye");