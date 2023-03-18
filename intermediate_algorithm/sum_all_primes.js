function sumPrimes(num) {
  const numbers = new Array(num - 2)
  for (let number = 2; number <= num; number++) {
    numbers[number - 2] = number
  }
  for (let index = 0; index < numbers.length - 1; index++) {
    const number = numbers[index]
    const pos = index
    for (let index = pos + 1; index < numbers.length; index++) {
      if(numbers[index] && numbers[index] % number === 0) numbers[index] = 0
    }
  }
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue,0);
}

console.log(sumPrimes(10));
// sumPrimes(10);