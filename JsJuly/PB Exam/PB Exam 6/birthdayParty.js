function birthdayParty(input){

let rentRoom = Number(input);

let cake = rentRoom * 0.20;
let drinks = cake - cake * 0.45;
let animator = rentRoom / 3

let sumTotal = rentRoom + cake + drinks + animator

console.log(sumTotal.toFixed(1));

}
birthdayParty([`2250`])