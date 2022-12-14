function getMinMax(arr, n) {
    minmax = new Array();
    var i;
    var min;
    var max;
  
  
    if (n == 1) {
      minmax.max = arr[0];
      minmax.min = arr[0];
      return minmax;
    }
  
  
    if (arr[0] > arr[1]) {
      minmax.max = arr[0];
      minmax.min = arr[1];
    } else {
      minmax.max = arr[1];
      minmax.min = arr[0];
    }
  
    for (i = 2; i < n; i++) {
      if (arr[i] > minmax.max) {
        minmax.max = arr[i];
      } else if (arr[i] < minmax.min) {
        minmax.min = arr[i];
      }
    }
  
    return minmax;
  }
  
  
  var arr = [134, 101, 25, 511, 630, 5689];
  var arr_size = 6
  minmax = getMinMax(arr, arr_size);
  console.log("Minimum element is ", minmax.min);
  console.log("Maximum element is ", minmax.max);