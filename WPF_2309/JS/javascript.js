/**
 * Created with JetBrains WebStorm.
 * User: enriquedibello
 * Date: 9/23/13
 * Time: 5:38 PM
 * To change this template use File | Settings | File Templates.
 */
////Calculator
////the first value
//var inputA = parseInt(prompt("Enter your first value here", "Ex. 5"));
////Enter the simbol
//var inputB = prompt("Enter the symbol here", "Ex. +");
////Enter the second value
//var inputC = parseInt(prompt("Enter your second value here", "Ex. 10"));
//var result = "";
//if (inputB == "+"){
//    result = inputA + inputC;
//    console.log(result);
//}
//else if(inputB == "-"){
//    console.log(inputA-inputC);
//}
//else if(inputB == "/"){
//    console.log(inputA / inputC);
//}
//else if (inputB == "*"){
//    console.log(inputA * inputC);
//}


//Simple Array

//var fruitInput = parseInt(prompt("Please enter a number for a fruit (from 1 to 3)", "Ex. 2" ));
//var carInput = parseInt(prompt ("Please enter a number for a car (from 1 to 3)", "Ex. 2"));
//var car = [];
//var fruits =["Orange", "Banana", "Apple"];
// car [0]= "Volvo";
// car [1] = "BMW";
// car [2] = "Toyota";
//
//if(fruitInput == 1) {
//    console.log(fruits[0]);
//}
//else if (fruitInput == 2) {
//    console.log(fruits[1]);
//}
//else {
//    console.log(fruits[2]);
//}
//
//if (carInput == 1){
//    console.log(car[0]);
//}
//else if (carInput == 2) {
//    console.log(car[1]);
//}
//else if (carInput == 3) {
//    console.log(fruits[2]);
//}


//Array and Map

var outerArray = [];
//var innerArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

for(i=0; i<6; i++){
outerArray[i]= [];
}
//outerArray[0][0]=0;
//console.log(outerArray[0][0]);

for(x=0; x<6; x++){
    for(y=0; y<6; y++){
        outerArray[x][y]=x*y;
    }
}
console.log(outerArray);
