/**
 * Created with JetBrains WebStorm.
 * User: enriquedibello
 * Date: 9/23/13
 * Time: 10:56 PM
 * To change this template use File | Settings | File Templates.
 */
//Enrique Di Bello 9/23/13 Assignment Expressions Wacky


var paperSheets = parseInt(prompt("Please enter the aprx. sheets of paper your bathroom paper have"));
var sheetsUsed = parseInt(prompt("Enter aprx. how many times you take paper from the roll after you ..."));

var rollSheets = sheetsUsed * 4;
var timesBathroom = paperSheets / rollSheets  ;
console.log(timesBathroom);




