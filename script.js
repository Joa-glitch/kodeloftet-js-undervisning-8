// console refererer til inspiser vinduet. log gir en beskjed til console
console.log('Hello World!');

// datatyper:
// string = streng/tekst
// number = tall
// boolean = true/false value

// Variabler:
// let = kan bytte verdi
// const = kan ikke bytte verdi

// erklærer en variabel:
// let ? = ?;


let userName = "Joachim";
console.log(userName);
userName = "Infection";
console.log(userName);

let userAge = 44;
console.log(userAge);

let userPresent = true;
console.log(userPresent);

const firstName = "Joachim";
const lastName = "Gjøvåg Liseth";
const fullName = firstName + " " + lastName; // Variable chaining
const wholeName = `${firstName} ${lastName}! `; // Template litteral
console.log(fullName);
console.log(wholeName);

function businessCard() {
    const firstName = "Joachim";
    console.log(firstName);
    const lastName = "Gjøvåg Liseth";
    console.log(lastName);
    const fullName = firstName + " " + lastName;
    console.log(fullName);

    const body = document.querySelector("h1");
    body.textContent = fullName;
}
businessCard();

function band() {
    const fullName = "Fredrik Thordendal";
    console.log(fullName);
    const bandName = "Meshuggah";
    const bandRole = `Gitarist`
}