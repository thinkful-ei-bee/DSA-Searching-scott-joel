function binarySearch(array, value, start=0, end=array.length-1) {
  if (start > end) return -1;
  //find the midpoint and the item at the midpoint
  let index = Math.floor((start + end) / 2);
  console.log(`start: ${array[start]}, end: ${array[end]}, midpoint: ${array[index]}`)
  let item = array[index];
  //if the middle element is the target them return that location
  if (item === value) {
      return index;
  }
  //if the middle element is less than the target then the target lies 
  //on the right side so eliminate all left side and only 
  //consider after the middle to the end of the array
  else if (item < value) {
      return binarySearch(array, value, index + 1, end);
  }
  //if the middle element is greater than the target then the 
  //target is on the left side so the left of the middle 
  else if (item > value) {
      return binarySearch(array, value, start, index - 1);
  }
};

// Best Case: O(1), Worst Case (and Average): O(log(n))

let list = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];

/*
1 start: 3, end: 18, index: 11, 8 < index
2 start: 3, end:  index: 5, 8 > 5


*/
console.log(binarySearch(list, 16))

// How many searches: 
// To find 8: 4 searches
// To find 16: 3 searches, -1, not found