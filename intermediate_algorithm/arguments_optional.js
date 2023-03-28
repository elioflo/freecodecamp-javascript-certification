function addTogether() {
  const isNumber = (value) => typeof value === "number";
  const oneArgument = (arr) => arr.length === 1;
  if (isNumber(arguments[0]) && isNumber(arguments[1]))
    return arguments[0] + arguments[1];
  if(oneArgument(arguments)&&isNumber(arguments[0]))
    return (b) => addTogether(arguments[0],b)
  return undefined
}

const number = [
  addTogether(2, 3),
  addTogether(2)(3),
  addTogether()
].forEach(value => console.log(value))
