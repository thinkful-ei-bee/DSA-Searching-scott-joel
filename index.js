'use strict';

const BinarySearchTree = require('./bst');
const Queue = require('./queue');

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
//console.log(binarySearch(list, 16))

// How many searches: 
// To find 8: 4 searches
// To find 16: 3 searches, -1, not found

/* Find a book - Dewey Decimal System

Given this: http://204.38.55.73/dnn6/Portals/0/DeweyDecimalClassificationChart.pdf

And this: 
500 --- Science:
500 Science
510 Mathematics
520 Astronomy
530 Physics
540 Chemistry
550 Earth sciences & geology
560 Fossils & prehistoric life
570 Life sciences; biology
580 Plants (Botany)
590 Animals (Zoology)

Imagine you are looking for a book in a library with a 
Dewey Decimal index. How would you go about it? 
Can you express this process as a search algorithm? 
Implement your algorithm to find a book whose 
Dewey and book title is provided.

input: array of objects representing a library
output: { "dewey": 510.1, "title": General Algebra } 

binary search by category - 510
go to center of library, 
    if number less than 510 book on right
    if number greater than 510 book on right
repeat: go to center of results
    if number less than 510 book on right
    if number greater than 510 book on right
Once we arrive at 510 we do another search to the right of the decimal
go to center of bookshelf, 
    if .1 on the left bookshelf is values to the left 
    and start of bookshelf
    if .1 on the right bookshelf is values to the right 
    and end of bookshelf
Repeat until bookshelf = .1, return title
*/

/*
Reconstructed:
        35
      /     \
     25      89
    /  \    /  \
  15    27 79   91
 /  \           /
14   19        90

1) Given a binary search tree whose in-order and pre-order traversals 
are respectively:
in-order: 14 15 19 25 27 35 79 89 90 91 


and:
pre-order: 35 25 15 14 19 27 89 79 91 90 
What would be its postorder traversal?

Post-order: 14, 19, 15, 27, 25, 79, 90, 91, 89, 35

2) The post order traversal of a binary search tree is:
5 7 6 9 11 10 8. 
What is its pre-order traversal?
Reconstructed:
       8
     /   \
    6     10
   / \    /  \
  5   7  9   11
Answer: 8, 6, 5, 7, 10, 9, 11
*/


//Implement different tree traversals:
function preOrder(tree) {
  console.log(tree.key);
  if(tree.left) {
    preOrder(tree.left);
  }
  if(tree.right) {
    preOrder(tree.right);
  }
}

function inOrder(tree) {
  if(tree.left) {
    inOrder(tree.left);
  }
  console.log(tree.key);
  if(tree.right) {
    inOrder(tree.right);
  }
}

function postOrder(tree) {
  if(tree.left) {
    postOrder(tree.left);
  }
  if(tree.right) {
    postOrder(tree.right);
  }
  console.log(tree.key);
}

//Find the next commanding officer

function bfs(tree, values=[]) {
  const queue = new Queue;
  queue.enqueue(tree);
  //console.log('queue:', queue);

  while (queue.first !== null) {
    const node = queue.dequeue();
    values.push(node.value);

    if(node.left) {
      queue.enqueue(node.left);
    }

    if(node.right) {
      queue.enqueue(node.right);
    }
  }

  return values;
}




function main() {
  const BST = new BinarySearchTree;

  const array = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];

  array.forEach(num => BST.insert(num, num));

  // console.log('pre:');
  // preOrder(BST);
  // console.log('in:');
  // inOrder(BST);
  // console.log('post:');
  // postOrder(BST);


  console.log('bfs:', bfs(BST));

}

main();

