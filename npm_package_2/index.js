module.exports = {
    findMaxItem,
    findMinItem,
    sumOfArray,
    averageOfArray,
    reverseAnArray,
    findUniqueElements,
    mergeTwoArrays,
  };



  function findMaxItem(arr) {
    return Math.max(...arr);
  }
  
  function findMinItem(arr) {
    return Math.min(...arr);
  }
  
  function sumOfArray(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
  }
  
  function averageOfArray(arr) {
    return arr.length ? sumOfArray(arr) / arr.length : 0;
  }
  
  function reverseAnArray(arr) {
    return arr.slice().reverse();
  }
  
  function findUniqueElements(arr) {
    return [...new Set(arr)];
  }
  
  function mergeTwoArrays(arr1, arr2) {
    return [...arr1, ...arr2];
  }