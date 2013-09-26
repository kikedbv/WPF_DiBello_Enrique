///**
// * Created with JetBrains WebStorm.
// * User: enriquedibello
// * Date: 9/25/13
// * Time: 5:25 PM
// * To change this template use File | Settings | File Templates.
// */
////*********************************
//var firstValue = 5;
//var secondValue = 2;
//
//var squared = secondValue * secondValue;
//var result = firstValue * squared;
//
//console.log(result);
//
////*********************************
//
//var firstArray = ["Hello", "Good Bye", "Your Name", "My Name", "His Name"] ;
//var secondArray = [];
//secondArray [0] = "Today";
//secondArray [1] = "Tomorrow";
//secondArray [2] = "Yesterday";
//secondArray [3] = "Never";
//
////*********************************

if(firstArray.length > secondArray.length){
    console.log(firstArray);
}
else {
    console.log(secondArray);
}

//*********************************

function addition(first, second, third){

    return first + second +third; //return (first + second +third);
}
console.log(addition(5,10,15)) ;

//*********************************
//Name, Last Name, age

function personInfo(name, lastName, age){
    return name += lastName += age;
}
console.log( personInfo("My name is " + "Joe ", "Dalton" + " and I am ",38 + " years old.") );
console.log( personInfo("My name is " + "Enrique ", "Di Bello" + " and I am ", 19 + " years old.") );

function name(){
   return document.getElementById("name1");
}
console.log(name());
