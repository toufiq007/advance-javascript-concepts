// make a add function which is increment a counter value
function add() {
  let counter = 0;
  // this increment  function is the responsible for increment so we should access this function outside of the add function so that we return this function from the add function
  
  return function incrementOne() {
    // if we don't use the counter variable is here then this coutner value shouldn't store . this vlaue is then called garbase collector

    // but we use this here so the concept of closure that the lexical coutenr value must be store for the internal operations

    // javascript store the coutner referrence not the counter value --> when the counter value is chagned then js put the latest variable to the previous refrence variable
    counter += 1;
    return counter;
  };
}

let incrementOne = add();
console.log(incrementOne());
console.log(incrementOne());
