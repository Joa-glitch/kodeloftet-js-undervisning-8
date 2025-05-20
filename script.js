// console refere
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

//
//

    function clickButton() {
      const h1Element = document.getElementById("changeText"); 
      // document.querySelector("#changeText") 
      console.log(h1Element); 
    
    

    const newText = "Velkommen til min side";

    h1Element.textContent = newText;
}
    clickButton();