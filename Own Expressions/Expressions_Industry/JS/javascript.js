/**
 * Created with JetBrains WebStorm.
 * User: enriquedibello
 * Date: 9/23/13
 * Time: 9:42 PM
 * To change this template use File | Settings | File Templates.
 */
//Enrique Di Bello 9/19/13 Assignment Expressions Industry

//Is asking the user to enter the price of the product.
var actualPrice = parseInt(prompt("Please enter the actual price of the product"));
//Is asking the user to enter the discount for the product
var discount = parseInt(prompt("Enter the discount desired for the product", "Ex.: 25"));
//Is transforming a natural number to a decimal (for percent purposes)
var discPercent = discount / 100;
//Is making the price entered by the user times the transformation of the desired discount divided by 100 (previous step)
var newPrice = actualPrice * discPercent;
//Is getting the new price by substracting the number gave on the previous spet from the price entered by the user.
var finalPrice = actualPrice - newPrice;

//Is displaying the result of the calculation in the console.
console.log("The sale price for the product will be $" + finalPrice + "!");
