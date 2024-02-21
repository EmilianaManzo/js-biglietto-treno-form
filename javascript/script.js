// dichiaro le variabili
let name;
let km;
let minorenne;
let standard;
let over65;
let price;
let message = '';
let form;
let carriage;
let code;

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
form = document.querySelector('form');


// bottoni
const btngenerate = document.querySelector('.btngenerate');
const btncancel = document.querySelector('.btncancel');





btngenerate.addEventListener ('click', function(event){
  event.preventDefault
  price = parseInt(priceKm * km.value);
  message = 'Biglietto standard'
  console.log(name.value, km.value, età.value, price);

  colHidden.classList.remove('d-none')

  if(name.value === ''){
    alert('Attenzione! Inserire nome e cognome.')
  } else if (km.value === ''){
    alert('Attenzione! Inserire km.')

  }if(età.value === ''){
    alert('Attenzione! Scegliere range età.')
  }

  
  
  if(età.value === minorenne){
  price = (price * discountYounger/100)
  message = 'Biglietto minori'

  } else if (età.value === over65){
  price = (price * discountSenior/100)
  message = 'Biglietto over 65'
  
  }

  carriage=Math.floor(Math.random() * 10) + 1;
  code=Math.floor(Math.random() * 1000) + 1;
  console.log(carriage, code);



  document.querySelector('.passenger').innerHTML += '' + name.value 
  document.querySelector('.offer').innerHTML += '' + message
  document.querySelector('.cost').innerHTML += '' + price.toFixed(2) + '&euro;'
  document.querySelector('.carriage').innerHTML += '' + carriage
  document.querySelector('.code').innerHTML += '' + code

})

  



btncancel.addEventListener ('click', function(){
  name.value = '';
  km.value = '';
  età.value= '';
  colHidden.classList.add('d-none')
})














