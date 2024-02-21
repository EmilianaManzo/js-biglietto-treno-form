// dichiaro le variabili
let name;
let km;
let minorenne;
let standard;
let over65;
let price;
let finalPrice;
let message = '';


// dichiaro dati di partenza
const priceKm = 0.21 
const discountYounger = 20
const discountSenior = 40


console.log(priceKm,discountYounger,discountSenior );

// richiamo elementi html
// input 
name = document.querySelector('name');
km = document.querySelector('km');
minorenne = document.querySelector('minorenne');
standard = document.querySelector('standard');
over65 = document.querySelector('over65');

// bottoni
const btngenerate = document.querySelector('btngenerate');
const btncancel = document.querySelector('btncancel');


btngenerate.addEventListener ('click', function(event){
  event.preventDefault;
  console.log(name.value, km.value, minorenne.value, maggiorenne.value, over65.value);

})

price = km * pricekm
finalPrice = price


if (minorenne){
  finalPrice -= ()
}





