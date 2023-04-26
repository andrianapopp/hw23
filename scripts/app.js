function mainFunction(callback) {
  const firstNum = prompt("First number");
  const secondNumber = prompt("Second number");
  callback(firstNum, secondNumber);
}
function exponentiation(firstNumber, secondNumber) {
  const degree = Math.pow(firstNumber, secondNumber);
  alert(degree);
}
function multiplay(firstNumber, secondNumber) {
  const multi = firstNumber * secondNumber;
  alert(multi);
}
function division(firstNumber, secondNumber) {
  const div = firstNumber / secondNumber;
  alert(div);
}
function modulo(firstNumber, secondNumber) {
  const mod = firstNumber % secondNumber;
  alert(mod);
}
mainFunction(modulo);
mainFunction(division);
mainFunction(multiplay);
mainFunction(exponentiation);
