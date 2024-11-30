function conver(array){
    for(var i=0; i<array.length;i++){
        array[i]=array[i].toUpperCase();
    }
    console.log(array);
}

var array=["string"];
conver(array);
