/**
 * Created with JetBrains WebStorm.
 * User: enriquedibello
 * Date: 9/13/13
 * Time: 9:39 PM
 * To change this template use File | Settings | File Templates.
 */
//Enrique Di Bello, 9/13/13, Expressions Worksheet

//Dog Years
var dogAge = 8;

//Multiplication of dog's age per seven.
var finalAge = dogAge * 7;

//Result of the dog's age in human years
console.log("Sparky is " + finalAge, "human years which is " + dogAge, "in dog years");


//*********************************************************************************************************************************************
//Slice of Pie I
var pizzasOrdered = 2;
var pizzaSlices = 12;
var guests = 8;

//Calculation of slices per person
var totalSlices = pizzasOrdered * pizzaSlices;
var personalSlices = totalSlices / guests;

//Result of the slices per person
console.log ("Each person eat " +personalSlices, "slices of pizza at the party")  ;


//*********************************************************************************************************************************************
//Slice of Pie II
//Calculation
var sliceDog = totalSlices % guests;

//Result
console.log ("Sparky got " +sliceDog, "slices of pizza");


//*********************************************************************************************************************************************
//Average Shopping Bill
var bills = [50, 57, 45, 63, 54];

//Calculation
var totalspent = bills [0] + bills [1] + bills [2] + bills [3] + bills [4];

var totalAverage = totalspent / 5;

//Result
console.log ("You have spent a total of $" +totalspent, "on groceries over 5 weeks. That is an average of $" +totalAverage, "per week.");


//*********************************************************************************************************************************************
//Discounts
var originalPrice = 35
var discount = 20
var tax = 7
var product = "glasses";

//Calculation
var discPrice = originalPrice * discount / 100;
var discountedPrice= originalPrice - discPrice;
var taxedPrice = discountedPrice + (discountedPrice * tax / 100);

//Result
console.log("Your " +product, "was originally $" +originalPrice, "but after a %" +tax, "discount, it is now $" +discountedPrice, "without tax, and $" +taxedPrice, "with tax");

