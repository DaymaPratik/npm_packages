module.exports = function(arr,target) {
    arr=arr.sort();
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        console.log("Sorted Array Format :"+arr);
        console.log("Target Found SuccesFully at index :"+mid);
        return mid; 
      } else if (array[mid] < target) {
        left = mid + 1; 
      } else {
        right = mid - 1; 
      }
    }
     console.log("Target Not Found");
    return -1; 
    
  };
  