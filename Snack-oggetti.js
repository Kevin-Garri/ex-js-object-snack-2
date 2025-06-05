//1.
const hamburger = { name: "Cheese Burger", wheight: 250 };
const secondBurger = hamburger;
secondBurger.name = "Double Cheese Burger";
secondBurger.wheight = 500;

console.log(hamburger.name); // ?
console.log(secondBurger.name); // ?


//Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 1

