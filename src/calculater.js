
function add(num1, num2){
 return num1+num2;
}
function add(){
    var result = 0;
    for (var i =0; i < arguments.length; i++){
        result += arguments[i];

    }
    return result;
}
function multiply(num1,num2){
    return num1 * num2;
}

function multiply(){
   let result = 1;
   for (let i = 0; i < arguments.length; i++){
       result *= parseFloat(arguments[i]);
      
   }
   return result;
}