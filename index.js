
function writeCards(names) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return thankYouMessages;
  }
  
  const names = ["Guadalupe", "Ollie", "Aki"];
  console.log(writeCards(names));

  
  function countDown(startingNumber) {
    if (typeof startingNumber !== 'number' || startingNumber <= 0 || !Number.isInteger(startingNumber)) {
      throw new Error('Please provide a positive integer as input.');
    }
  
    while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber--;
    }
  }
  countDown(10);