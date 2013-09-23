/**
 * Created with JetBrains WebStorm.
 * User: enriquedibello
 * Date: 9/18/13
 * Time: 5:30 PM
 * To change this template use File | Settings | File Templates.
 */

//LAND TYPE
function landType(){
    var imp = Math.random();
    if (imp < .2){return "woods\t"}
    else if (imp < .4){return "city\t"}
    else if (imp < .6){return "ocean\t"}
    else if (imp < .8){return "valley\t"}
    else {return "Panama\t"}
}

var world = [];
for(j=0;j<10;j++) {
    world [j]=[];

    for(i=0;i<10;i++){
    world[j][i]=landType();
        //    console.log(world[j][i]) ;
    }
}

function tabGen (len){
    if(len>7){
        return "\t";
    } else if (len>3){
        return "\t\t"
    } else if (len<=3){
        return"\t\t\t"
    }


}

  var worldPresString = "" ;
for(outer=0; outer<10; outer++){

    for(inner=0; inner<10; inner++){
        worldPresString += world [outer][inner]; //+ "\t";
        worldPresString += tabGen(world[outer][inner].length);
//        if(world[outer][inner].length > 7){
//            worldPresString += "\t"
//        }
//        else if (world[outer][inner].length > 3){
//            worldPresString += "\t\t"
//        }
//        else if (world[outer][inner].length <= 3){
//            worldPresString += "\t\t"
//        }

    }
    console.log(worldPresString);
}