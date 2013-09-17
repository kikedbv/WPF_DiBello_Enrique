/**
 * Created with JetBrains WebStorm.
 * User: enriquedibello
 * Date: 9/16/13
 * Time: 5:32 PM
 * To change this template use File | Settings | File Templates.
 */

//Functions Section

//function myFirstFunction (number1, number2)
//    {
//     var productOfNum1AndNum2;
//        productOfNum1AndNum2 = parseInt(number1) * parseInt(number2);
//        return productOfNum1AndNum2;
//    }
//
//    console.log(myFirstFunction(5,7));
//
//function mySecondFunction (number1, number2)
//{
//    return parseInt(number1) + parseInt(number2);
//}
//
//console.log(mySecondFunction(7,7));

//Random Land Type Generator

//var randomValue = Math.random();
//console.log(randomValue);
//
//function landSelection(percentChange){
//    if(percentChange < .5){return "woods"}
//    else {return "jungle"}
//}
//
//for(i=0; i<10; i++){
//console.log(landSelection(randomValue));
//}

//function landSelection(){
//    var percentChange = Math.random();
//    if (percentChange < .5){return "woods"}
//    else {return "jungle"}
//}
//
//console.log(landSelection());

//FUNCTION THAT TAKES IN A VALUE AND CUBES THAT VALUE AND RETURN THE RESULT

//function cubeValues(int1){
//    var cube = int1 * int1 * int1 ;
//    var returnValue = int1 + "*" + int1 + "*" + int1 + " = " + cube;
//
//    return returnValue;
//}
//
//
//for(i=0; i<10; i++){
//  console.log(cubeValues(i));
//}

//function carroCasa(value1){
//    return value1 * value1;
//}
//for(i=0; i<10; i++){
//    console.log(carroCasa(i, i2));
//}


//LAND TYPE
function landType(){
var imp = Math.random();
    if (imp < .2){return "woods\t"}
    else if (imp < .4){return "city\t"}
    else if (imp < .6){return "ocean\t"}
    else if (imp < .8){return "valley\t"}
    else {return "Panama\t"}
}

for(j=0;j<10;j++) {
    var rowLand = "";
        for(i=0; i<10; i++){
        rowLand = rowLand + landType();
        }
    console.log(rowLand);
}

































