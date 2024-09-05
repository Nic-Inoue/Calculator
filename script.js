const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
 }

function backspace() {
  display.value = display.value.slice(0, display.value.length -1);
}

function isOperator(digit) {
  return ["/","*","+","-"].includes(digit);
}
function appendToDisplayOperator(input){
  if (isOperator(display.value.slice(-1))){
      display.value = display.value.slice(0, display.value.length -1);
  }
  if (display.value !== "") {
    display.value += input;
  }
}

function clearDisplay(){
  display.value = "";
}

function calculate(){
  if (isOperator(display.value.slice(-1))){
    display.value = display.value.slice(0, display.value.length -1 );
 }
  display.value = eval(display.value)
}

function squared(){
    if (isOperator(display.value.slice(-1))){
        display.value = display.value.slice(0, display.value.length -1);
    }
    calculate(display.value);
    display.value = Math.sqrt(display.value);
}