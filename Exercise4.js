//Ask the user to input the temperature as a number (store in variable FTEMP), and convert it to celcius (store in variable CTEMP)
// Log the message FTEMP Fahrenheit equals CTEMP in Celcius
// Use the following line of code for the conversion (this uses a Math function which we will discuss more in future lessons):
//var CTEMP = Math.round((FTEMP - 32) * 5 / 9);
//BONUS: Keep prompting until the User actually enters a number (HINT: Look into using NaN)

var FTEMP;
var CTEMP = Math.round((FTEMP - 32) * 5 / 9);

do{
    FTEMP = parseInt(prompt("Enter the temperature:"));
}
while(isNaN(FTEMP) || FTEMP%1!==0);

console.log("FTEMP Fahrenheit equals "+ CTEMP +" in Celcius");

