function convertToRoman(num) {
    const characters = [["I","V"],["X","L"],["C","D"], ["M"]]
    let romanNumber = ""
    let index = 0
    while(num > 0){
        let digit = num % 10
        let char = ""
        if(digit<4) char = characters[index][0].repeat(digit)
        else if(digit<5) char = `${characters[index][0]}${characters[index][1]}`
        else if(digit<6) char = `${characters[index][1]}`
        else if(digit<9) char = `${characters[index][1]}${characters[index][0].repeat(digit-5)}`
        else if(digit<10) char = `${characters[index][0]}${characters[index+1][0]}`
        else char = `${characters[index+1][0]}`
        romanNumber = char + romanNumber
        num = Math.floor(num / 10)
        index++
    }
    return romanNumber
}

const results = [
    convertToRoman(1),
    convertToRoman(2),
    convertToRoman(3),
    convertToRoman(4),
    convertToRoman(5),
    convertToRoman(6),
    convertToRoman(7),
    convertToRoman(8),
    convertToRoman(9),
    convertToRoman(10),
    convertToRoman(11),
    convertToRoman(19),
    convertToRoman(21),
    convertToRoman(49),
    convertToRoman(99),
]

results.forEach(result => console.log(result))
