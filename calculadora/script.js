const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
 }

function backspace(input) {
  display.value = display.value.slice(0, display.value.length -1);
}
function appendToDisplayOperator(input){
  if (display.value.slice(-1) === "+" || display.value.slice(-1) === "-" || display.value.slice(-1) === "/" || display.value.slice(-1) === "*"){
      display.value = display.value.slice(0, display.value.length -1);
  }
  if (display.value === ""){
    
  }
  else{
    display.value += input;
  }
}

function clearDisplay(){
  display.value = "";
}

function calculate(){
  display.value = eval(display.value);
}

function squared(){
    if (display.value.slice(-1) === "+" || display.value.slice(-1) === "-" || display.value.slice(-1) === "/" || display.value.slice(-1) === "*"){
        display.value = display.value.slice(0, display.value.length -1);
    }
    display.value = Math.sqrt(display.value);
}