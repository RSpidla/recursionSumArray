function sumItems(array) {
  // Sum all the numbers in the array
  let element = 0;
  if(array.length > 0){
    element = array.shift();
    if(Array.isArray(element)){
      element = sumItems(element);
    }
  } else {
    return 0;
  }
  return element + sumItems(array);
}

module.exports = sumItems;