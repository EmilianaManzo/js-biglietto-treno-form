// dichiaro le variabili
let name;
let km;
let minorenne;
let standard;
let over65;
let price;
let message = '';
let carriage;
let code;
let isValidForm = true;

// dichiaro dati di partenza
const priceKm = 0.21 
const discountYounger = 20
const discountSenior = 40


console.log(priceKm,discountYounger,discountSenior );


// bottoni
const btngenerate = document.querySelector('.btngenerate');
const btncancel = document.querySelector('.btncancel');





btngenerate.addEventListener ('click', function(event){
  event.preventDefault
  
  // richiamo elementi html con i rispettivi value  
  // input 
  name = document.querySelector('.name').value;
  km = parseInt(document.querySelector('.km').value) ;
  età = document.querySelector('.età').value;
  // add/remove variabili 
  colHidden = document.querySelector('.colhidden')
  texHidden = document.querySelector('.texhidden')
  gif= document.querySelector('.gif');



  price = parseInt(priceKm * km);
  message = 'Biglietto standard'
  
  console.log(name, km, età, price);

  console.log(isNaN(km));
  isValidForm = !isNaN(km)

  if(isValidForm){
    colHidden.classList.remove('d-none')
    texHidden.classList.remove('d-none')
    gif.classList.add('d-none')



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
    code=Math.floor(Math.random() * 100000) + 1;
    console.log(carriage, code);



    document.querySelector('.passenger').innerHTML += " " + name.value 
    document.querySelector('.offer').innerHTML += " " + message
    document.querySelector('.cost').innerHTML += " " + price.toFixed(2) + '&euro;'
    document.querySelector('.carriage').innerHTML += " " + carriage
    document.querySelector('.code').innerHTML += " " + code

  }else {
    alert('Inserire dati corretti');
  }



})



btncancel.addEventListener ('click', function(){
  name.value = '';
  km.value = '';
  età.value= '';
  colHidden.classList.add('d-none')
  texHidden.classList.add('d-none')
  gif.classList.remove('d-none')
})














