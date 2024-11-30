    var ar2=[];
    //var ar1=[3,2,1];
   //console.log(ar1);
   var i=0,condicion;
   while(i<4){
    ar2[i]=1;
    i++;
   }
   console.log(ar2);
   //ar2.push(17);
   //console.log(ar2);
   //ar2.pop();
   //console.log(ar2);
   //console.log(ar2.includes(16));
   condicion=ar2[0];
   var cond=ar2.every((num)=>{
    return(num===condicion)
   });
   console.log(cond);
   //console.log(ar2);
   //ar2.forEach(num=>{
    //if(num<10){console.log(num+1)}
   //});
   //console.log(ar2);
   //var x=ar2.map(num=>{
    //if(num%2==0){
    //return num;
    //}
    //});
    //console.log(x);

    var arr2=[];
    var pos=0;

    for(var i=0; i<ar2.length;i++){
        if(ar2[i]%2==0){
            arr2[pos]=ar2[i];
            pos++;
        }
    }
    console.log(arr2);
    