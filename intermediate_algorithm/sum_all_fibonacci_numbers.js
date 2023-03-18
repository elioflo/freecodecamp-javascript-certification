function sumFibs(num) {
  let n_2 = 0, n_1 = 1;
  const sequence = [n_2, n_1]
  while(sequence[sequence.length - 1] < num ){
    sequence.push(n_1 + n_2)
    n_1 = sequence[sequence.length - 1]
    n_2 = sequence[sequence.length - 2]
  }
  console.log(sequence);
  return sequence.filter(number => number <= num && number % 2 !== 0).reduce((accumulator, currentValue) => accumulator + currentValue,
  0);
}

console.log(sumFibs(4));
console.log(sumFibs(1000));
console.log(sumFibs(75025));
// sumFibs(4);