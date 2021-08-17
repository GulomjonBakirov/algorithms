const arr = [4, 5, 2, 32, 5342, 634, 352, 32, 43];
const t = 32;

let binearySearch = function (list, item) {
  let t = 0;
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    t = t + 1;
    let mid = Math.floor((start + end) / 2);
    let guess = list[mid];

    if (guess == item) {
      return mid;
    }
    if (guess < item) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
};

if (binearySearch(arr, t)) {
  console.log("Element found");
} else {
  console.log("Element not found");
}
