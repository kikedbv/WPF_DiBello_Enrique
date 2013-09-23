/**
 * Created with JetBrains WebStorm.
 * User: enriquedibello
 * Date: 9/22/13
 * Time: 5:35 PM
 * To change this template use File | Settings | File Templates.
 */
//Expression

var firstInput = prompt("Enter the value of A");
var secondInput = prompt("Enter the value of B");
var thirdInput = prompt("Enter the value of C");

console.log(firstInput * secondInput + thirdInput)

//Conditional
if( thirdInput < 0){
    console.log(thirdInput - thirdInput);
}
else {
    console.log(thirdInput);
}

//Ton Increments
firstInput = firstInput * 3;
secondInput = secondInput * 4;
thirdInput = thirdInput * 2;

var resultIncrements = [firstInput, secondInput, thirdInput];
console.log(resultIncrements);