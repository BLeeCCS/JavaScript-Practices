function arrayReverse(myArray) {
    newArray = [];
    for (let i = myArray.length-1; i >= 0; i--) {
        newArray.push(myArray[i]);
    }
    return newArray;
}

var myArray = ['hello', 45, 'Bob', 'what', '23'];
console.log(arrayReverse(myArray));