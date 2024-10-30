// closure --> a function bundled together with it's lexical environment
// functions alongs with lexical envrionment that is called closure

// this is a simple example of closure
function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  y();
}
// x();





// more complex example
function z() {
  let a = 10;
  function y() {
    // this way return is possible
    console.log(a);
  }
  a = 20;
  return y;
  //   return y; // this way return is possible
}

// it means this z() returning not only the y() as well as it's lexical scope where a is present and this total bundle is called closure
// when return a function inside a function then it can store a variable and can be able to call like a function
const yValue = z(); // here not given the parameter
// yValue(); // here i can give the parameter






// more complex situation
function a(){
        let x = 10
        function b(){
                let y = 200
                function c(){
                        console.log(x,y)
                }
               return c
        }
        return b
}

let bValue = a() // here the work of a function is done but it bundled it's lexical scope variable because it should be used inside the returing function
let cValue = bValue()
cValue()
