/**
 * Created with JetBrains WebStorm.
 * User: enriquedibello
 * Date: 9/15/13
 * Time: 1:18 PM
 * To change this template use File | Settings | File Templates.
 */

//Casting Section of the Lecture
//var numberVariable = 10 +"";
//var stringVariable = "Happy";
//var otherNumber = 15;
//var cancatVariable = numberVariable + otherNumber;
//console.log(cancatVariable);


//game chekpoints
//var currentHearts = 10;
//var damage = 7;
//
//if (currentHearts - damage < 1){
//    console.log("You Loose");
//}
//else{
//    console.log("You are Still Alive");
//}


//ARRAYS
//    "apple", "pear", "orange"
//var newArray = ["apple", "pear", "orange"] ;
//console.log(newArray[0]);
//newArray.push("bat");
//console.log(newArray[3]);
//
//var secArray = ["car", "bus", "boat"];
//console.log(secArray[1]);
//secArray.push("cruise");
//console.log(secArray [3]);
//
//newArray.pop(); //takes out from the right
//console.log(newArray [3]);
//console.log(newArray.indexOf("pear"));
//newArray.shift(); //takes out from the left
//console.log(newArray[0]);
//newArray.sort();
//console.log();


//var newArray = [];
//newArray [0] = ["pear", "apple", "grape"];
//newArray [1] = ["bat", "cat", "rat", "frog"];
//newArray [2] = ["Joe", "Sae", "Apollo", "Starbuck", "Malik"];
//
//console.log(newArray [0] [2]);
//newArray [3] = []
//newArray [3][0] = "Monkey";


//var loopingArray = [];
//for(i=0; //initialize variable and value
//    i<=10; //number of times to do the loop
//    i=i+2) //what to do to the initial value after the loop is done
//{
////Stuff to be done
//    console.log(i);
//    loopingArray [i ] = [];
//    loopingArray [i][0] = "pos " + i;
//
//
//    console.log(loopingArray [i][0]);
//}

//var loopArray = [];
//for (i=100; i<=1000; i=i+100)
//{
//    console.log(i);
//    loopArray [i] = []
//    loopArray [i][0] = "position " + i;
//
//    console.log(loopArray [i][0]);
//}

//Using Prompts NOT FINISHED
//var promptValue = parseInt(prompt("How many loops"));
//for(i = promptValue);

//Random Number
var foodType;
var randomValue = math.random();
var jamaican = 0.35;
var japan = 0.7;
var burger = 0.8;
var duck = 1;

if(randomValue < jamaican){foodType = "Jamaican"}
else if (randomValue < japan){foodtype = "Japan"}
else if (randomValue < burger){foodType = "Burger"}
else {foodType = "Duck"}

console.log(foodType);
console.log(randomValue);