/**
 * Created with JetBrains WebStorm.
 * User: enriquedibello
 * Date: 9/25/13
 * Time: 9:43 PM
 * To change this template use File | Settings | File Templates.
 */
//Enrique Di Bello V.  09/25/2013  Functions Industrial
var height = parseInt(prompt("Please enter the desire width for the Football field in meters", "Ex.: 150m"));
var width = parseInt(prompt("Now, enter the desire height in meters", "Ex.: 60m"));

function area(r, areaCircle, areaRectangle){
    r = height / 2;
    areaCircle = Math.PI * (r * r);
    areaRectangle = width * height;
    return Math.round(areaCircle + areaRectangle);
}
console.log("You will need " + area() + " meters squared of grass to put on the field.");

function perimeter(circumfCircle, perimRectangle){
    circumfCircle = Math.PI * height;
    perimRectangle = (width * height) * 2;
    return Math.round(circumfCircle + perimRectangle);
}
console.log("You will need grass paint to paint about " + perimeter() + " meters of the field perimeter");

