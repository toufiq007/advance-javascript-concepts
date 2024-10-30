// understood the pure functions
// two things are considered for pure functions
// 1: no side effects
// 2: input --> output

// side effects are completed to the pureFunction1,pureFunctions2 file

// now same input ---> same output
// it means for a particular input always get the particular output
// this function always gives the same answer if the input is same always

// like when input is 3,4 --> output is always 7
// when input is 5,10 --> output is always 15
// and these function has no sideeffects
function addTwoNumber(num1, num2) {
  return num1 + num2;
}

function multiplybyTwo(num) {
  return num * 2;
}

console.log(addTwoNumber(3, 4));
console.log(multiplybyTwo(addTwoNumber(3, 4))); // this is called referencial transparency
