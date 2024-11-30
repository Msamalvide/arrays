function obtenerElementoAleatorio(array) {
    // Devuelve un elemento aleatorio del arreglo array.
    // PISTA: Usa el método Math.random().
    // Tu código:
    var pos,x;
    if(array.length>1){
       console.log(Math.random); 
       pos=Math.trunc(Math.random()*array.length);
       console.log(pos);
       x=array[pos];
       console.log(x);
    }
    return array[0];
    
 }
  var array=[3,9,2,5,1,76,4,8,9,6]
  obtenerElementoAleatorio(array);