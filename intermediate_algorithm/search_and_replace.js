function myReplace(str, before, after) {
  const isCapitalize = (word) => 'A' <= word[0] && word[0] <= 'Z'
  const capitalize = (word) => word[0].toUpperCase() + word.substring(1)
  if (isCapitalize(before) && !isCapitalize(after)) after = capitalize(after)

  if (isCapitalize(after) && !isCapitalize(before)) after = after.toLowerCase()
  return str.replace(before, after)
}

console.log(myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'))
//myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
