function convertHTML(str) {
  return str.split('').map(letter=>{
    switch (letter) {
      case '&': return '&amp;'
      case '<': return '&lt;'
      case '>': return '&gt;'
      case '"': return '&quot;'
      case "'": return '&apos;'
      default: return letter
    }
  }).join('');
}

console.log(convertHTML("Dolce & Gabbana"));
// convertHTML("Dolce & Gabbana");