function biggerWords(string,stringArray) {
  const array = stringArray.filter(word => word.length > string.length);
  console.log("Output = ", array);
}

var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];
biggerWords('whales', myArray);
