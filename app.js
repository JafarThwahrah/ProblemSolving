// Q1:
// Write a function named createList that takes in an array of the current store intentory.

// The inventory is formatted like this:
// [
//   { name: 'apples', available: true },
//   { name: 'pears', available: true },
//   { name: 'oranges', available: false },
//   { name: 'bananas', available: true },
//   { name: 'blueberries', available: false }
// ]

// This function should use forEach to populate your grocery list based on the store's inventory.
//  If the item is available, add it to your list. Return the final list.


function createList(arr){
    let resultarr= []
    arr.forEach(element => {
    if (element.available==true){
        resultarr.push(element);
    }
   });
   return resultarr;
}


console.log(createList([
    { name: 'apples', available: true },
    { name: 'pears', available: true },
    { name: 'oranges', available: false },
    { name: 'bananas', available: true },
    { name: 'blueberries', available: false }
  ]))



// Q2:map
// Write a function that, given an array of numbers as input, uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.

// If any element in the array is not a number, the resulting array should have the string "N/A" in its place.

// For example: evenOdd([1,2,3,'a']) returns ['odd','even','odd','N/A'].



  function evenOdd(arr){
return (arr.map(element =>{
    if(element%2==0){
        return 'even'
    }else if(element%2==1) {

        return 'odd'
    }else {
        return 'NaN'

    }
}))
  }
  console.log(evenOdd([1,2,3,'a']))



// Q3:filter
// Write a function named notInFirstArray that, given two arrays as input,
//  uses filter to return an array of all the elements in the second array that are not included in the first array.

// For example, notInFirstArray([1,2,3,5], [1,2,3,4]) returns [4].

  function notInFirstArray(arr1 , arr2){
    return(arr2.filter(Number =>!arr1.includes(Number)))
 
  }


console.log(notInFirstArray([1,2,3],[1,3,5,6]))





// Q4:
// Write a function named reversedString that takes in a string and returns a string with the letters in reverse order.

// Note: You must use reduce for this challenge. You may not use the built-in .reverse() string method.








// function reversedString(str){

// let reversedString="";
// for (let i = str.length - 1; i >= 0; i--){
//     reversedString+=str[i];
// }
// return reversedString;
// }
// console.log(reversedString("Jafar"))





function reversedString(str) {
    return str.split("").reduce((rev, char) => char + rev, '');
}
  console.log(reversedString("dada"));


// Q5: regex
// Write a function named isNum that takes in a string or number of any length. 
// This function should use a regular expression pattern to return true if the input contains a number,
//  and false if the input does not contain a number.

// For example:
// 12345 returns true
// '12345' returns true
// 'h3llo world' returns true
// 'hello world' returns false









function isNum(numOrStr){
    const regexNum = new RegExp('(?=.*[0-9])');
    if(regexNum.test(numOrStr)){
        return true;
    }else{
        return false;
    }
}

console.log(isNum("Jafar5"))









function matchMonth(Str){
    const regexMnth = /(Oct|oct|October|october)/

    if(regexMnth.test(Str)){
        return true;
    }else{
        return false;
    }
}


console.log(matchMonth("Oct"))






