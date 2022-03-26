
let num = parseInt(prompt("Ingrese un numero"));

while(isNaN(num)){
    alert("No es un numero");
    num =  parseInt(prompt("Ingrese un numero"));
 }
 
for(var i = 1; i <= num; i++){
    console.log(i);
};
