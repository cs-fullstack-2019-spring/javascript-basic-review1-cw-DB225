//Write a JavaScript program that does the following:
//
// Prompts the User to enter their outstanding loan amount as a number (LOANAMT)
// Prompts the User to enter the number of months in which they want to pay off the loan (NUMMONTHS)
// Calculates the monthly payment they need to make and logs it to the console as To pay of a loan of LOANAMT it will take NUMMONTHS months

do{
    var LOANAMT = parseInt(prompt("Enter your outstanding loan amount:"));
    var NUMMONTHS = parseInt(prompt("Enter the number of months of paying off the loan:"));
}
while (isNaN(LOANAMT) && isNaN(NUMMONTHS)) ;
var costPerMonth = Math.round(LOANAMT/NUMMONTHS);
console.log("To pay of a loan of "+LOANAMT+" ,it will take "+costPerMonth+" months");