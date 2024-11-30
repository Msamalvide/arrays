function tip(array) {
    var tip;
    tip=array.length;
    console.log(tip);
 if(typeof array=="object" && array.length!=undefined){
    console.log(" 2 ");
 }
 
}
var array={};
tip(array);