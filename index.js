function createSquareIterator(numbers) {
    let index = 0; // Initialize the index to 0
  
    return {
      next: function() {
        if (index < numbers.length) {
          return {
            value: numbers[index] * numbers[index++], 
            done: false
          };
        } else {
          return { done: true }; // End of iteration
        }
      }
    };
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
  const iterator = createSquareIterator(numbers);
  
  console.log("Squares of numbers in the array:");
  let result = iterator.next();
  while (!result.done) {
    console.log(result.value);
    result = iterator.next();
  }
  