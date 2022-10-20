//COMPARISON OPERATORS
console.log(1 > 2);
console.log(1 < 2);
console.log(1 >=2);
console.log(1 <= 2);
10 !== '10';
let rating = 2;
if (rating ===3) {
    console.log("YOU ARE A SUPERSTAR!");
}
else if (rating === 2)  {
    console.log("MEETS EXPECTIONS");
}
//Declare a variable called days and give it a default of value of 7
//use if and if else statements to print the 7 days of the week
let days = 7;
if (days ===7) {
    console.log("sunday");
}
else if (days === 6){
    console.log("saturday")
}
//create a variable with the name PASSWORD and give it any value
// the value of the password must be a string
// value of password must be greater than or equals to six characters 
//ensure that value of the password has no spaces between
let password = 'celestine';
if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("THE PASSWORD IS CORRECT");
    }
}
else{
    console.log("INCORRECT");
}
let age = 20;
console.log(age === 20 ? 'correct age' : 'wrong age');






