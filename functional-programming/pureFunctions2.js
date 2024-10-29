// is the below function is pure functions

// no this function is not pure function because it is logging something in the console or browser so it has side effects
function hello() {
  console.log("hello world!!");
}
hello();

// so we understant if a function changes something globally from the inside of the function then the function transformed a non pure function and it has side effects
