function translatePigLatin(str) {
  const firstVowel = str.match(/[aeiou]/)
  if(firstVowel){
    const firstConsonants = str.slice(0,firstVowel.index)
    const restOfTheWord = str.slice(firstVowel.index,str.length)
    const sufix = firstConsonants ? firstConsonants + "ay" : "way"
    return restOfTheWord + sufix;
  }
  return str + "ay"
}

// translatePigLatin("consonant");
console.log(translatePigLatin("rhythm"))