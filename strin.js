function tras(texto){
    var str,x=texto.split(""),cant=x.length,temp=0;
    for(var i=0;i<Math.trunc(x.length/2);i++){
      console.log(x[i]);
    }
    console.log(x.join(""));
}

var str="hola como";
tras(str);