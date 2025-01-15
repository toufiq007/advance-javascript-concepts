// higer order functions

// here addTwoNumber function takes a fucntion as an argument so that it is an higher order function and cb is the callback function
function addTwoNumber (a,b,cb){
    let result = a+ b;
    cb(result)
}

// addTwoNumber(10,20,(result)=> console.log(result));

// return a function from another function
const firstFunc = (a,b)=>{
    let result = a + b;
    return ()=>{
        console.log(result)
    }
}

firstFunc(10,20) // noting will be log because this function return a function
const resultFunc = firstFunc(10,20)
resultFunc() // --> log the result 30
