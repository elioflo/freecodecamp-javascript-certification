function mm(top, number) {
  let multiple = 1;
  while (top >= number * multiple) multiple += 1;
  return top === number * multiple ? multiple : multiple - 1;
}

function toFixed(a,b,c){
  return (a*c - b*c)/c
}

function checkCashRegister(price, cash, cid) {
  const values = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
  ];
  let change = cash - price;
  const changeCoins = cid.reduceRight((acc, [_name, cash], currentIndex) => {
    const value = values[currentIndex][1];
    const multiple = mm(change, value);
    if (change === 0 || multiple === 0) return [...acc];
    if (multiple * value >= cash) {
      console.log(change, " ", toFixed(change,cash, 1000));
      change = toFixed(change,cash, 1000);
      return [[_name, cash], ...acc];
    } else {
      console.log(change, " ", toFixed(change,multiple * value, 1000));
      change = toFixed(change,multiple * value,1000);
      return [[_name, multiple * value], ...acc];
    }
  }, []);
  if (changeCoins.reduce((acc, value) => acc + value[1], 0) < cash - price)
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  if (cid.reduce((acc, value) => acc + value[1], 0) === cash - price)
    return { status: "CLOSED", change: [...cid] };
  return { status: "OPEN", change: changeCoins.sort((a,b) => b[1]-a[1]) };
}

// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

