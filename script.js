var getFinalOrder = () => {
  console.log("Miktarlar::: ", amounts);

  let result = [];
  let isCalculated = Math.ceil(Math.max(...amounts) / k);

  for (let index = 0; index < isCalculated; index++) {
    amounts.map((item, index) => {
      if (!item == 0) {
        if (item <= k) {
          result.push(index + 1);
          amounts[index] = 0;
        } else {
          amounts[index] = amounts[index] - k;
        }
      }
    });
  }
  console.log("Limit:::", k);

  console.log("Sıralama::: ", result);

  return;
};

let amounts = [
  Math.floor(Math.random() * 100) * 10,
  Math.floor(Math.random() * 100) * 10,
  Math.floor(Math.random() * 100) * 10,
  Math.floor(Math.random() * 100) * 10,
  Math.floor(Math.random() * 100) * 10,
];

let k = Math.floor(Math.random() * 100) * 10;
getFinalOrder(k, amounts);
