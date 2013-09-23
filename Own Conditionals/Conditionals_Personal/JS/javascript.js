/**
 * Created with JetBrains WebStorm.
 * User: enriquedibello
 * Date: 9/15/13
 * Time: 7:20 PM
 * To change this template use File | Settings | File Templates.
 */
//Enrique Di Bello 9/15/13 Assignment Conditionals Personal

//    Variable asking for the actual number of passagers on boat 1
var boat1 = prompt ("Please, enter the amount of actual passagers in boat No.1", "Enter amount here");
//    Variable asking for the actual number of passagers on boat 1
var boat2 = prompt ("Please, enter the amount of actual passagers in boat No.2", "Enter amount here");

//If boat 1 have the minimun passagers or more and the number 2 doesn't; just the boat 1 will be ready to go.
if(boat1 >= 55 && boat2 < 75){
    console.log("Boat No. 1 is ready to go. Get more passagers for Boat No.2") ;
}
//If the user doesn't enter the number of passagers in boat No.1, this code will notify the user to do so.
else if(boat1 == "" && boat2 > 75){
    console.log("Please, enter the number of passagers in boat No.1");
}
//If boat 2 have the minimun passagers or more and the number 1 doesn't; just the boat 2 will be ready to go.
else if(boat2 >= 75 && boat1 < 55){
    console.log("Boat No.2 is ready to go. Get more passagers for Boat No.1");
}
//If the user doesn't enter the number of passagers in boat No.2, this code will notify the user to do so.
else if(boat2 == "" && boat1 > 55){
    console.log("Please, enter the number of passagers in boat No.2");
}
//If the user doesn't enter the number of passagers in boat No.1 and No.2, this code will notify the user to do so.
else if(boat1 == "" && boat2 == ""){
    console.log("Please, enter the number of passagers in boat No.1 and No.2");
}
//If both boats have the minimun passagers or more this section will tell the usr that both boats are ready to go.
else if (boat1 >= 55 && boat2 >= 75){
    console.log("Both boats are ready to go!");}

//Finish