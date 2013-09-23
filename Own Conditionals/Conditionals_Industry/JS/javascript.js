/**
 * Created with JetBrains WebStorm.
 * User: enriquedibello
 * Date: 9/18/13
 * Time: 9:17 PM
 * To change this template use File | Settings | File Templates.
 */
//Enrique Di Bello 9/18/13 Assignment Conditionals Industry

//Is asking the user to enter the velocity of the rotor A in knots
var rotorA = prompt("Please, enter the velocity in knots of rotor A", "Enter the number HERE");
//Is asking the user to enter the velocity of the rotor B in knots
var rotorB = prompt("Please, enter the velocity in knots of rotor B", "Enter the number HERE");
//If the rotor A is between 15 and 25 knots and the rotor B is over the limit, is gonna tell the captain to lower the velocity rotor B
if (rotorA > 14 && rotorA < 26 && rotorB > 14 && rotorB > 25){
    console.log("Rotor A is ok. Please, lower the velocity of rotor B.")
}
//If the rotor A is between 15 and 25 knots and the rotor B is under the limit, is gonna tell the captain to rise the velocity of rotor B
else if (rotorA > 14 && rotorA < 26 && rotorB < 15 && rotorB < 26){
    console.log("Rotor A is ok. Please, rise the velocity of rotor B.")
//If the rotor B is between 15 and 25 knots and the rotor A is over the limit, is gonna tell the captain to lower the velocity of rotor A
} else if (rotorA > 14 && rotorA > 25 && rotorB > 14 && rotorB < 26){
    console.log("Rotor B is ok. Please, lower the velocity of rotor A.")
}
//If the rotor B is between 15 and 25 knots and the rotor A is under the limit, is gonna tell the captain to rise the velocity of rotor A
else if (rotorA < 15 && rotorA < 26 && rotorB > 14 && rotorB < 26){
    console.log("Rotor B is ok. Please, rise the velocity of rotor A.")
}
//If rotor A and rotor B doesn't have the specified velocity, is gonna tell the captain to put both rotors between 15 and 25 knots
else if (rotorA < 15 || rotorA > 25 && rotorB < 15 || rotorB > 25){
    console.log("Please, check the velocity of both rotors. Remember that both should be between 15knots && 25 knots");
}
//If both rotors are between 15 and 25 knots, then is gonna give the captain the permission to pass through the Panama Canal
else if(rotorA > 14 && rotorA < 26 && rotorB > 14 && rotorB < 26){
    console.log("The ship is ready to pass through the Panama Canal.");
}

//Finish
