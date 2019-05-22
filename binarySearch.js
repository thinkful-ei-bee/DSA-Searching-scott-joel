function binarySearch(array, value, start=0, end=array.length-1) {
  if (start > end) return -1;
  //find the midpoint and the item at the midpoint
  let index = Math.floor((start + end) / 2);
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

module.exports = binarySearch