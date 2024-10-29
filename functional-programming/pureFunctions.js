// understood the pure functions
// two things are considered for pure functions
// 1: no side effects
// 2: input --> output

const numArr = [1, 2, 3];

// this function change the outer array it means it has side effects
// function mutateArr(arr) {
//   arr.pop();
// }
// this is also has side effects it is adding numbers to the array
// function mutateArr2(arr) {
//   arr.forEach((item) => arr.push(1));
// }

// mutateArr(numArr);
// mutateArr2(numArr);
// console.log(numArr);



// now make this code that has not side effects
// here we make a new array inside the function where i make operation like pop but this code doesn't change anything to the global so it has no side effects
function removeLastItem(arr) {
  const newArr = [...arr];
  newArr.pop();
  return newArr;
}

// another example
function multiplyBy2 (arr){
        return arr.map(item=> item*2)
}

const array2 = removeLastItem(numArr);
const array3 = multiplyBy2(numArr)
console.log(numArr,'main array');
console.log(array2,'modify array');
console.log(array3,'modify array');
