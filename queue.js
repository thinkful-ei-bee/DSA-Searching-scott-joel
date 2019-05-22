'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  } 

  enqueue(item) {
    const newNode = new _Node(item, null);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
  }

  dequeue() {
    const item = this.first;

    if (item.next) {
      this.first = item.next;
      return item.value;
    } else {
      this.first = null;
      this.last = null;
      if (item) {return item.value;}
    }
  }
}

module.exports = Queue;