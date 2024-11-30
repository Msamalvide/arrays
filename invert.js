function invertirArray(array) {
    // Invierte el arreglo array recibido por argumento.
    // Tu código:
    var i,temp,mitad,ult;
    mitad=Math.trunc((array.length)/2)
    ult=array.length;
    for(i=0; i<mitad;i++){
      temp=array[i];
      array[i]=array[ult-i-1];
      array[ult-1-i]=temp;
    }
    console.log(array);
  }

  var array=[1,2,3];
  invertirArray(array);
  