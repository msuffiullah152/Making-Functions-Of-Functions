// forEach()
const numbers = [1, 2, 3, 4, 5];
function myEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i);
    }
  }
    myEach(numbers, (num) => {
    console.log(num);
  });

  
  // map()
  function myMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i));
    }
    return result;
  }
  const doubled = myMap(numbers, (num) => num * 2);
  console.log(doubled);
  
  
  // filter()
  function myFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i)) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  const evenNumbers = myFilter(numbers, (num) => num % 2 === 0);
  console.log(evenNumbers); 
  
  
  // some() 
  function mySome(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i)) {
        return true;
      }
    }
    return false;
  }
  const hasEvenNumber = mySome(numbers, (num) => num % 2 === 0);
  console.log(hasEvenNumber); // Output: true
  
  
  // every()
  function myEvery(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (!callback(arr[i], i)) {
        return false;
      }
    }
    return true;
  }
  const allPositive = myEvery(numbers, (num) => num > 0);
  console.log(allPositive); 
  
  // reduce()
  function myReduce(arr, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i], i);
    }
    return accumulator;
  }
  const sum = myReduce(numbers, (acc, num) => acc + num, 0);
  console.log(sum); 
  
  
  // includes()
  function myIncludes(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return true;
      }
    }
    return
  }  

   // indexOf()
function myIndexOf(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }
  const index = myIndexOf(numbers, 3);
  console.log(index);
  
  
  // push()
  function myPush(arr, elementToAdd) {
    arr[arr.length] = elementToAdd;
    return arr.length;
  }
  const length = myPush(numbers, 4);
  console.log(numbers); 
  console.log(length);
  
  
  // lastIndexOf()
  function myLastIndexOf(arr, target) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }
  const lastIndex = myLastIndexOf(numbers, 3);
  console.log(lastIndex);
  
  // Object.keys()
  const person = {name: 'John', age: 30, city: 'New York'};
  function grabKeys(obj) {
    const keys = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }
  const keys = grabKeys(person);
  console.log(keys);
  
  // Object.values()
  function grabValues(obj) {
    const values = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        values.push(obj[key]);
      }
    }
    return values;
  }
  const values = grabValues(person);
  console.log(values); 