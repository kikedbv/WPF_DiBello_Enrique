/**
 * Created with JetBrains WebStorm.
 * User: enriquedibello
 * Date: 9/25/13
 * Time: 10:29 PM
 * To change this template use File | Settings | File Templates.
 */
//Enrique Di Bello V.  09/25/2013  Functions Personal

//variable for the type of service needed.
var method = prompt("Please, type the service needed \"Add\" or \"Take out\".");
//variable for the actual amount of money in the account.
var actualAmount = parseInt(prompt("Please enter the actual amount of money in your account.")) ;

//If the user select to "Add" this code will be activated.
if(method == "Add"){
//function for the calculation of the addition of money to the account
var calcAddition = function(adding){
//calculation of the actual amount of money in the account plus the amount of money entered by the user.
   return actualAmount + adding;
}
//******
    a = calcAddition(parseInt(prompt("Now, enter the amount of money added to your account.")));
//is displaying the result of the calculation giving the user the final amount in the account
    console.log("Your actual balance in your account is $" + a + ".");
}
//If the user select "Take out" this  code will be activated
else if(method == "Take out"){
//function for the calculation of the substraction from the money in the account
    var calcSubstraction = function(substracting){
//    calculation of the actual amount of money in the account less the amount of money entered by the user.
        return actualAmount - substracting;
    }
//****
    s = calcSubstraction(parseInt(prompt("Now, enter the amount of money you took out from the account")));
//is  displaying the result of the calculation giving the user the final amount in the account
    console.log("Your actual balance in your account is $" + s + ".");
}
//If the user doesn't put any value on the box it will run this code
else if(method == ""){
//is displaying a message to the user refering that the service typed was invalid.
    console.log("Check the service you typed and do it again.");
}
//if the value entered on the amount in the acount is a non natural number (less than 0 it will run this code.
else if(actualAmount<0){
//is displaying the user a message asking to enter a valid amount.
    console.log("Please, enter a valid amount.") ;
}

