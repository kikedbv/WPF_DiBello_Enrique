/**
 * Created with JetBrains WebStorm.
 * User: enriquedibello
 * Date: 9/25/13
 * Time: 11:35 PM
 * To change this template use File | Settings | File Templates.
 */
//Enrique Di Bello  09/25/2013  Wacky function

//variable for the price of the product
var cashPrice = parseInt(prompt("Please enter the price of the product here:", "Ex.: $4,500.00"));
//variable for the down payment of the product
var downPayment = parseInt(prompt("Now, enter the down payment for the product here:", "Ex.: $500.00"));
//variable of the monthly payments
var monthlyPayments = parseInt(prompt("Enter the monthly payments for the product here:", "Ex.: $250.00"));
//variable for the number of monthly payments
var numberPayments = parseInt(prompt("Now, enter the number of monthly payments here:", "Ex.: 12"));

//function to get the amount financed by a calculation
function amountFinanced(){
//  calculation of the cash price less the down payment
    return cashPrice - downPayment;
}
//displaying the result of the function made to get the amount financed.
console.log("The amount financed is $" + amountFinanced() + ".");

//function to get the total of monthly payments by a calculation
function monthlyPayCalc(){
//  calculation of the monthly payments times the number of monthly payments
    return monthlyPayments * numberPayments;
}
//displaying the result of the function made to get the total of monthly payments
console.log("The total of monthly payments will be $" + monthlyPayCalc() + ".");

//function to get the finance charge by a calculation
function financeCharge(){
//  calculation of the total of monthly payments less the amount financed
    return monthlyPayCalc() - amountFinanced();
}
//displaying the result of the function made to get the finance charge.
console.log("The finance charge will be $" + financeCharge() + ".");

//function to get the deferred payment by a calculation
function deferredPayment(){
//  calculation of the original price less the amount financed
    return cashPrice - financeCharge();
}
//displaying the result of the function made to get the deferred price.
console.log("The deferred payment will be $" + deferredPayment() + ".");
