function pairElement(str) {
  const pair = letter => {
    switch(letter){
      case 'A': return ["A", "T"]  
      case 'T': return ["T", "A"]  
      case 'C': return ["C", "G"]  
      case 'G': return ["G", "C"]  
    }
  }
  return str.split('').map(letter => pair(letter));
}

console.log(pairElement("GCG"))
// pairElement("GCG");