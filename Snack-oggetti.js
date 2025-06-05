//1.
/*
const hamburger = { name: "Cheese Burger", wheight: 250 };
const secondBurger = hamburger;
secondBurger.name = "Double Cheese Burger";
secondBurger.wheight = 500;

console.log(hamburger.name); // ?
console.log(secondBurger.name); // ?

*/

//Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 1

//2.

/*
const hamburger = {
  name: "Cheese Burger",
  weight: 250,
  ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // ?
console.log(secondBurger.ingredients[0]); // ?

*/

//P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!
//Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? // 3

//3.
const hamburger = {
  name: "Cheese Burger",
  weight: 250,
  maker: {
    name: "Anonymous Chef",
    restaurant: {
      name: "Hyur's Burgers",
      address: "Main Street, 123",
      isOpen: true,
    },
    age: 29
  }
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 9

//4.
const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
}

const chefClone = { ...chef }

const restaurant = {
  name: "Hyur's Burgers",
  address: {
    street: 'Main Street',
    number: 123,
  },
  openingDate: new Date(2025, 3, 11),
  isOpen: false,
};

const restaurantClone = structuredClone(restaurant);
console.log(restaurantClone);


//Qual è il metodo migliore per clonare l’oggetto chef, e perché? spread operator meglio per oggetti senza proprietà annidate o funzioni complesse
//Qual è il metodo migliore per clonare l’oggetto restaurant, e perché? structuredClone per non perdere le proprietà annidate e i tipi di dato complessi come Date