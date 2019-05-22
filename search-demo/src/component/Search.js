import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5',
      steps: null,
      searchFor: null,
      found: null
    }
  }

  convertList(list) {
    return list.split(" ");
  }

  handleSearchFor = (e) => {
    this.setState({ searchFor: e.target.value })
  }

  handleLinear = () => {
    let count = 0;
    let listArr = this.convertList(this.state.list);

    for (let i = 0; i < listArr.length; i++) {
      count++;
      if(this.state.searchFor === listArr[i]) {
        this.setState({ steps: count, found: true });
        return;
      }
    }
    this.setState({ steps: count, found: false });
    return -1;
  }

  handleBinarySearch = () => {
    let arr = this.convertList(this.state.list).sort();
    this.binarySearch(arr, this.state.searchFor);
  }

  binarySearch = (array, value, start = 0, end = array.length - 1, steps = 1) => {

    if (start > end) return -1;
    //find the midpoint and the item at the midpoint
    let index = Math.floor((start + end) / 2);
    console.log(`start: ${array[start]}, end: ${array[end]}, midpoint: ${array[index]}`)
    let item = array[index];
    //if the middle element is the target them return that location
    if (item === value) {
        this.setState({ steps: steps, found: true })
        return;
    }
    //if the middle element is less than the target then the target lies 
    //on the right side so eliminate all left side and only 
    //consider after the middle to the end of the array
    else if (item < value) {
        steps++;
        return this.binarySearch(array, value, index + 1, end, steps);
    }
    //if the middle element is greater than the target then the 
    //target is on the left side so the left of the middle 
    else if (item > value) {
        steps++;
        return this.binarySearch(array, value, start, index - 1, steps);
    }
  }

  render() {

    return (
      <div>
        <p>{this.state.list}</p>
        <input onChange={this.handleSearchFor} type="number"></input>
        <button onClick={this.handleLinear}>Linear</button>
        <button onClick={this.handleBinarySearch}>Binary Search</button>

        <br />

        <p>Steps: {this.state.steps}</p>
      </div>
    );
  }
}

