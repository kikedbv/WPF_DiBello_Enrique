/**
 * Created with JetBrains WebStorm.
 * User: enriquedibello
 * Date: 9/23/13
 * Time: 10:26 PM
 * To change this template use File | Settings | File Templates.
 */
//Enrique Di Bello 9/23/13 Assignment Expressions Personal

//Is asking the user to enter hes actual salary
var salary = parseInt(prompt("Please, enter your current salary here"));
//Is asking the user to enter how much he monthly pays for the house
var house = parseInt(prompt("Enter the house monthly payment"));
//Is asking the user to enter other monthly payments he/she have
var other = parseInt(prompt("Enter other monthly payments"));
//Is making subtracting the house and others monthly payments from the actual salary to get his final money
monthlyG = salary - house - other;
//Displaying to the user the result of the calculation
console.log(monthlyG);
