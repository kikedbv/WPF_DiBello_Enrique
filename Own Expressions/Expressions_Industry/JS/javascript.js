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

var discPercent = discount / 100;
var newPrice = actualPrice * discPercent;
var finalPrice = actualPrice - newPrice


console.log("The sale price for the product will be $" + finalPrice + "!");
