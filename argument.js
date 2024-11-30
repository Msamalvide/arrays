function argumento(){
    console.log(arguments);
    var i,prod;
    for(i=1;i<arguments.length;i++){
        prod=arguments[i]*arguments[i-1]
    }
    console.log(prod);
}
argumento(2,2);