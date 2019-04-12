/** 
 * All mathematical and validation functions
 * for Node.js calc app.
 *
 */


const sumValues = (x, y) => (+x) + (+y);
const subtract = (x, y) => (+x) - (+y);
const multiply = (x, y) => (+x) * (+y);
const divide = (x, y) => (+x) / (+y);

        function sum(){
            var num1, num2, res;
            num1=Number(document.calculator.num_1.value);
            num2=Number(document.calculator.num_2.value);
            if (validateNumbers(num1, num2)) {
              res=sumValues(num1, num2)
              document.calculator.sumResult.value=res;
            }else{
              document.calculator.sumResult.value='input numbers';
            }
        }
        function sub(){
            var num1, num2, res;
            num1=Number(document.calculator.num_1.value);
            num2=Number(document.calculator.num_2.value);
            if (validateNumbers(num1, num2)) {
              res=subtract(num1, num2)
              document.calculator.sumResult.value=res;
            }else{
              document.calculator.sumResult.value='input numbers';
            }
        }
        function multi(){
            var num1, num2, res;
            num1=Number(document.calculator.num_1.value);
            num2=Number(document.calculator.num_2.value);
            if (validateNumbers(num1, num2)) {
              res=multiply(num1, num2)
              document.calculator.sumResult.value=res;
            }else{
              document.calculator.sumResult.value='input numbers';
            }
        }
        function divi(){
            var num1, num2, res, np;
            num1=Number(document.calculator.num_1.value);
            num2=Number(document.calculator.num_2.value);
            if (validateNumbers(num1, num2)) {
              res=divide(num1, num2)
              document.calculator.sumResult.value=res;
            }else{
              document.calculator.sumResult.value='input numbers';
            }

}

const validateNumbers = (x, y) => {
  if (isNaN(x) || isNaN(y)) {
    return false;
  }
  return true;
}

module.exports = {
  sumValues,
  subtract,
  multiply,
  divide,
  validateNumbers,
}