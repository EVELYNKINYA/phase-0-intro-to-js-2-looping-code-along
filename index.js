// Code your solutions in this file
function countDown(startingNumber) {
    // Ensure the input is a positive integer
    if (typeof startingNumber !== 'number' || startingNumber <= 0 || !Number.isInteger(startingNumber)) {
      console.error('Please provide a valid positive integer as input.');
      return;
    }
  
    // Count down from the starting number to zero
    for (let i = startingNumber; i >= 0; i--) {
      console.log(i);
    }
  }
  
  // Example usage:
  countDown(10);
  
  function writeCards(names, gift) {
    // Map over the names array and create a thank you message for each name
    return names.map(name => `Thank you, ${name}, for the wonderful ${gift} gift!`);
  }
  
  // Example usage:
  const thankYouMessages = writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
  console.log(thankYouMessages);
  