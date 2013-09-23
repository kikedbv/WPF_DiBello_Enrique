/**
 * Created with JetBrains WebStorm.
 * User: enriquedibello
 * Date: 9/20/13
 * Time: 9:57 PM
 * To change this template use File | Settings | File Templates.
 */
//Enrique Di Bello 9/19/13 Assignment Conditionals Waky

//Is asking to user to enter the grade of the first exam
var firstGrade = prompt("Enter your first's exam grade", "Enter your grade here!");
//Is asking to user to enter the grade of the second exam
var secondGrade = prompt("Enter your second's exam grade", "Enter your grade here!");
//Is adding the first grade and the second one to then divided them and get the final grade
var finalGrade = (firstGrade/2 + secondGrade/2);

//Is telling that if the user got 90 or more as the final grade, he/she pass the class.
if(finalGrade >= 90){
    console.log("Congratulations, you pass the course.");
}
//Is telling that if the user got 80 or more as the final grade, he/she pass the class but need to keep working in order to get better.
else if (finalGrade >= 80 && finalGrade < 90){
    console.log("Congratulations, you pass the course. Keep working to get better.");
}
//Is telling that if the user got 70 or more as the final grade, he/she pass the class but need to practice more in order to get better.
else if (finalGrade >= 70 && finalGrade < 80) {
    console.log("You pass the course, but need to practice more.");
}
//Is telling that if the user got less than 70 as the final grade, he/she fail the class.
else if(finalGrade < 70){
    console.log("You fail the class, need to take it again next month.");
}
//If the user doesn't enter any value, is gonna ask him/her to do so.
else if(firstGrade == "" || secondGrade == ""){
    console.log("Please, check the grades and enter the values again.")
}

//Finish