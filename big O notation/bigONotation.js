// Big O Notation describes the upper bound of an algorithm's time or space complexity,
// representing the worst-case scenario as input size grows.
// It helps evaluate an algorithm's efficiency by categorizing its growth rate (e.g., O(1), O(n), O(n²)).

// For example:
// O(1) represents constant time complexity, indicating that the algorithm's runtime does not change with the input size.
// O(log n) represents logarithmic time complexity, where the runtime grows logarithmically as the input size increases.
// O(n) represents linear time complexity, where the runtime grows linearly with the input size.
// O(n^2) represents quadratic time complexity, where the runtime grows quadratically with the input size.
// O(2^n) represents exponential time complexity, where the runtime grows exponentially with the input size.

//O(1) - Constant Time:
function getFirstElement(arr) {
  return arr[0]; // Always takes constant time
}

// O(n) - Linear Time:
function printAllElements(arr) {
  arr.forEach((element) => console.log(element)); // Looping through all elements takes linear time
}

//O(n²) - Quadratic Time:
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]); // Nested loops cause quadratic time
    }
  }
}

//   O(log n) - Logarithmic Time:
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// O(n log n) - Log-Linear Time:
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
