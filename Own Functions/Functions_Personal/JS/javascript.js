/**
 * Created with JetBrains WebStorm.
 * User: enriquedibello
 * Date: 9/25/13
 * Time: 10:29 PM
 * To change this template use File | Settings | File Templates.
 */
//Enrique Di Bello V.  09/25/2013  Functions Personal

var method = prompt("Please, type the service needed \"Add\" or \"Take out\".");
var actualAmount = parseInt(prompt("Please enter the actual amount of money in your account.")) ;

if(method == "Add"){
var calcAddition = function(adding){
   return actualAmount + adding;
}
