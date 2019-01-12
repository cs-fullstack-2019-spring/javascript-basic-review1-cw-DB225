
// User inputs the ending maximum value (e.g. 100)
// Your code should start at 1 and then iterate (count) each number up to the maximum number entered by the User.
//     If the current number is evenly divisible by 3 you should log FIZZ and the number
// If the current number is evenly divisible by 5 you should log BUZZ and the number
// If the current number is evenly divisible by both 3 and 5 you should log FIZZBUZZ and the number
// Otherwise, just print the current number

var a = parseInt(prompt("Enter your maximum number:"));

for(i=1; i<=a; i++){
    if(i%15===0){
        console.log("FIZZBUZZ");
    }
    else if(i%5===0){
        console.log("BUZZ");
    }
    else if(i%3===0){
        console.log("FIZZ");
    }
    else{
        console.log(i);
    }
}