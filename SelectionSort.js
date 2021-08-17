const selectionSort = (arr) => {
  var n = arr.length;

  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min != i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
  return arr;
};

const inputArr = [
  12, 1564, 12, 021, 484, 54, 123, 1, 54, 1, 31, 564, 12, 13, 1, 65, 4, 1,
];

console.log(selectionSort(inputArr));
