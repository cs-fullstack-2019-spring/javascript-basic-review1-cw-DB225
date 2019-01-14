//Ask the user to input the temperature as a number (store in variable FTEMP), and convert it to celcius (store in variable CTEMP)
// Log the message FTEMP Fahrenheit equals CTEMP in Celcius
// Use the following line of code for the conversion (this uses a Math function which we will discuss more in future lessons):
//var CTEMP = Math.round((FTEMP - 32) * 5 / 9);
//BONUS: Keep prompting until the User actually enters a number (HINT: Look into using NaN)


var FTEMP =parseInt(prompt(" "));

}
while(isNaN(FTEMP)){
    FTEMP = parseInt(prompt("Enter the temperature:"));
}
var CTEMP = Math.round((FTEMP - 32) * 5 / 9);
console.log("FTEMP Fahrenheit equals "+ CTEMP +" in Celcius");

