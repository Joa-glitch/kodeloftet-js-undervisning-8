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

/* Setter opp en funksjon med navnet clickButton som tar en blokk med kode som skal gjøres samtidig */

    function clickButton() {

        /* Lager en variabel med navnet h1Element som henter et element fra HTML med id-navn changeText */
      const h1Element = document.getElementById("changeText"); 
      // document.querySelector("#changeText") 

      /* Logger variabelen h1Element til console for å sjekke at vi henter riktig HTML element */
      console.log(h1Element); 
    
    
      /*Lager en variabel med navnet newText som lagrer en string med tekst */
    const newText = "Velkommen til min side";
      /* Variablelen h1Element får tekst innhold fra variabelen newText */
    h1Element.textContent = newText;
    }
    
     /* Lager en variabel med navnet buttonElement som henter et element fra HTML med id-navn button, og logger buttonElement til console for å se om det er riktig */
    const buttonElement = document.getElementById("button");
    console.log(buttonElement);

    /* Bruker variabelen buttonElement for å legge til en hendelseslytter som lytter etter et klikk for å kjøre funksjonen clickButton */
    buttonElement.addEventListener("click", clickButton);

    /*function ?(){
        const ? = document.getElementById("?");
        const ? = "?";

        ?.textContent = ?;
    }*/

    //
    //

    const addText = document.getElementById("addText");
    console.log(addText);

    addText.addEventListener("click", function (){
     console.log("Button clicked?");
     // Steg 1: Lag en variabel som henter elementet med id-navn receiveText
     const receiveText = document.getElementById("receiveText");
     // Steg 2: Lag en variabel som het text med en string med valgfri tekst
     const text = "Det er SOOOL";
     // Steg 3: Gjør at variabel receiveText mottar innholdet til text med textContent
     receiveText.textContent = text;
    });