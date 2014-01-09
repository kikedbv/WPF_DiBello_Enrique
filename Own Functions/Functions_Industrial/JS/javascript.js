/**
 * Created with JetBrains WebStorm.
 * User: enriquedibello
 * Date: 9/25/13
 * Time: 9:43 PM
 * To change this template use File | Settings | File Templates.
 */
//Enrique Di Bello V.  09/25/2013  Functions Industrial
    //variable for the aprox. height for the field
var height = parseInt(prompt("Please enter the desire width for the Football field in meters", "Ex.: 150m"));
//variable for the aprox. width for the fild
var width = parseInt(prompt("Now, enter the desire height in meters", "Ex.: 60m"));
//function to calculate the area of the whole field.
function area(r, areaCircle, areaRectangle){
//  calculation to get the radius for the circle
    r = height / 2;
//  calculation to get the area of the circle
    areaCircle = Math.PI * (r * r);
//  calculation to get the area of the rectangle
    areaRectangle = width * height;
//  calculation to get the total area of the whole field
    return Math.round(areaCircle + areaRectangle);
}
//is displaying the total area of the field
console.log("You will need " + area() + " meters squared of grass to put on the field.");

//function to calculate the perimeter of the field
function perimeter(circumfCircle, perimRectangle){
//  calculation to get the circumference of the circle
    circumfCircle = Math.PI * height;
//  culaculation to get the perimeter of the rectangle
    perimRectangle = (width * height) * 2;
//  calculation of the circumference of the circle and the perimeter of the rectangle in order to get the perimeter of the whole field
    return Math.round(circumfCircle + perimRectangle);
}
//is displaying the user the perimeter of the field.
console.log("You will need grass paint to paint about " + perimeter() + " meters of the field perimeter");

