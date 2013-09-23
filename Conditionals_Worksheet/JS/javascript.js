/**
 * Created with JetBrains WebStorm.
 * User: enriquedibello
 * Date: 9/13/13
 * Time: 11:21 PM
 * To change this template use File | Settings | File Templates.
 */
//Enrique Di Bello, 9/13/13, Conditionals

//Celsius to Fahrenheit converter
//The givens
var originalTemperature = prompt("Enter the number of degrees",70);
var tempType = prompt("Enter the CURRENT unit", "F or C");

//Calculation if the temperature is in Fahrenheit
if (tempType == "F")
{
    var tempCel = (originalTemperature - 32) * 5 / 9;
    console.log ("The temperature is " +tempCel, " degrees Celsius");
}
//Calculation if the temperature is in Celsius
else{
    var tempFah = (originalTemperature * 1.8) + 32;
    console.log ("The temperature is " +tempFah, " degrees Fahrenheit");
}

//*********************************************************************************************************************************************
//Grade Letter Calculator
//The given
var numGrade = 77;

//Matching process and results depending on the grade
if (numGrade > 95) {
    console.log("You have a(n) " +numGrade+ "% which means you have earned an A.");
}
else if (numGrade > 85){
    console.log("You have a(n) " +numGrade+ "% which means you have earned a B.");
}
else if (numGrade > 75){
    console.log("You have a(n) " +numGrade+ "% which means you have earned a C.");
}
else {
    console.log("You have a(n) " +numGrade+ "% which means you have earned a D.");
}

//*********************************************************************************************************************************************
//Tire Pressure I
//The givens
var frontTires = [19, 19];
var rearTires = [22, 22];

//Matching process and results depending on the tire's pressure
if (frontTires [0] == frontTires [1] && rearTires [0] == rearTires [1]){
    console.log("The tires pass spec");
}
else {
    console.log("Get your tires checked out");
}

//*********************************************************************************************************************************************
//Check The Login
//The givens
var userName = "Enriquedbv9";
var password = 10000;

//Correct user information
const correctName = "Enriquedbv29";
const correctPassword = 10001;

//Matching process and results depending on the username and password entered
if (userName == correctName && password == correctPassword){
    console.log("Welcome " +correctName, "!");
}
else if (userName != correctName && password == correctPassword){
    console.log("User not found. Try again");
}
else if (userName == correctName && password != correctPassword){
    console.log("Password does not match our records.");
}
else {
    console.log("Please, check your user name and password");
}
