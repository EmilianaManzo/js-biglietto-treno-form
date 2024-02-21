// dichiaro le variabili
let name;
let km;
let minorenne;
let standard;
let over65;
let price;
let message = '';


// dichiaro dati di partenza
const priceKm = 0.21 
const discountYounger = 20
const discountSenior = 40


console.log(priceKm,discountYounger,discountSenior );

// richiamo elementi html
// input 
name = document.querySelector('.name');
km = document.querySelector('.km');
età = document.querySelector('.età');
colHidden = document.querySelector('.colhidden')



// bottoni
const btngenerate = document.querySelector('.btngenerate');
const btncancel = document.querySelector('.btncancel');




btngenerate.addEventListener ('click', function(event){
  event.preventDefault
  price = priceKm * km.value;
  message = 'Biglietto standard'
  console.log(name.value, km.value, età.value, price);

  colHidden.classList.remove('d-none')
  
  if(età.value === minorenne){
  price = (price * discountYounger/100)
  message = 'Biglietto minori'

  } else if (età.value === over65){
  price = (price * discountSenior/100)
  message = 'Biglietto over 65'
  
  }
  document.querySelector('.passenger').innerHTML += name.value 
  document.querySelector('.offer').innerHTML += message
  document.querySelector('.cost').innerHTML += price
})

btncancel.addEventListener ('click', function(){
  name.value = '';
  km.value = '';
  età.value= '';
  colHidden.classList.add('d-none')
})














