const greeting = "Welcome to unit one assessment";
console.log(greeting);

//  cached elements
const increase = document.getElementById("plus");
const decrease = document.getElementById("minus");
const result = document.getElementById("value");
const main = document.querySelector("main");
const display = document.getElementById("display");

// console.log(increase);
// console.log(decrease);
// console.log(result);

// event handler
main.addEventListener("click", eventHandler);

function eventHandler(e) {
  // console.log(e.target.id);
  let input = parseInt(result.value);
  let counter = parseInt(display.innerText);
  // console.log(counter);
  if (e.target.id == "plus") {
    // newdisplay += newresult;
    input++;
    result.value = input;
    display.textContent = input;
    console.log(result.value);

    // console.log(newresult);
    // result.value++;
    // console.log(typeof result.value);
  } else if (e.target.id == "minus") {
    input--;
    result.value = input;
    display.textContent = input;
    // console.log(newresult);
    // console.log(result.value);
    // result.value--;
    // console.log(result.value);
  }
  // return newresult;
}

// myString = '129'
// console.log(parseInt(myString)) // expected result: 129
