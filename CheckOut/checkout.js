let submitbtn = document.querySelector('.submitbtn');
let formAddress01 = document.querySelector('#formAddress');
let gfg = document.querySelector('#gfg');
let gfgTotal = document.querySelector('#gfgTotal');
let gfgQty = document.querySelector('#gfgQty');
let gfgTime = document.querySelector('#gfgTime');
let deliship = document.querySelector('#deliship');
let getDatafromCookie = document.querySelector('.getDatafromCookie');
let getDatafromCookie1 = document.querySelector('.getDatafromCookie1');
let reditothnxpage = document.querySelector('.reditothnxpage');

function rediHomePage(){
 location.assign('/');
}

let cartList= [];

function getCookie(){
  let newCookie = document.cookie
  .split(';')
  .find(row => row.startsWith('cartList='));
  if(newCookie){
    cartList = JSON.parse(newCookie.split('=')[1]);
  }else{
    cartList = [];
  }
}

getCookie();

function noToCom(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}


addCartToHTML();
function addCartToHTML(){
    // clear data default
    let orderProd = document.querySelector('.orderProd');
    let appnTheCookie = document.querySelector('.appnTheCookie');
    orderProd.innerHTML = '';
    appnTheCookie.innerHTML = '';
    let totalPriceHTML = document.querySelector('.orderssub .subtotalsub');
    let subtotalTotal = document.querySelector('.subtotalTotal');
    let subtotalship = document.querySelector('.subtotalship ');
    let insidedhk = document.querySelector('#insidedhk');
    let outdhk = document.querySelector('#outdhk');
    let totalQuantity = 0;
    let totalPrice = 0;
    // if has product in Cart
    if(cartList){
        cartList.forEach(product => {
            if(product){
                let newCart = document.createElement('div');
                let newCartcookie = document.createElement('div');
                newCart.classList.add('orders01');
                newCart.innerHTML = 
                    `
                      <div class="imgdata"><img src="${product.mainimage}">${product.name}</div>
              <div class="qtyimg">× ${product.quantity}</div>
              <div class="subtotalimg">৳ ${noToCom(product.quantity*product.sale)}</div> 
                    
                    `;
                    newCartcookie.innerHTML = `{"id":${product.id},"name":"${product.name}","sale":${product.sale},"image":"${product.mainimage}","quantity":${product.quantity}},`;
                orderProd.appendChild(newCart);
                appnTheCookie.appendChild(newCartcookie);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + (product.sale * product.quantity);
            }
        })
    }
    gfgQty.value = totalQuantity;
    let cookieString = appnTheCookie.innerText.slice(0,-1);
    getDatafromCookie.value = `${cookieString}`;
    totalPriceHTML.innerHTML = '৳' + ' ' + noToCom(totalPrice);
    subtotalTotal.innerHTML = `৳ ${noToCom(totalPrice)}`;
    fetch('/shipment.json') // Replace with the actual path to your JSON file
    .then(response => response.json())
    .then(shipmentData => {
        // Find the div where you want to append the ID
        // const productIdContainer = document.querySelector('.getProductIdFromJson');

        // Iterate over the JSON data
        shipmentData.forEach(price => {
            if (price.insideDhaka) {
              insidedhk.addEventListener('click',()=>{
                subtotalship.innerHTML = '৳' + ' ' + price.insideDhaka;
                subtotalTotal.innerHTML = `৳ ${noToCom(totalPrice + price.insideDhaka)}`;
                gfgTotal.value = totalPrice + price.insideDhaka;
                deliship.value = price.insideDhaka;
              })
              outdhk.addEventListener('click',()=>{
                subtotalship.innerHTML = '৳' + ' ' + price.outsideDhaka;
                subtotalTotal.innerHTML = `৳ ${noToCom(totalPrice + price.outsideDhaka)}`;
                gfgTotal.value = totalPrice + price.outsideDhaka;
                deliship.value = price.outsideDhaka;
              })
                      }
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));

    if(totalPrice <= 0){
      document.body.innerHTML = '';
      rediHomePage();
    }
    
    
}

function validateForm() {
            var number = document.getElementById('formNumber').value;
            var formName = document.querySelector('#formName').value;
            var formAddress = document.querySelector('#formAddress').value;
            var radioBtn = document.querySelector('.radioBtn');
            if (formName === '' || formName.length <= 3) {
                inputColorRedFormName('red');
                return false;
            }else{inputColorRedFormName('#000');}
            if (number === '' || !isValidBangladeshiNumber(number) || number.slice(0,-8) === '012' || number.slice(0,-8) === '011') {
                inputColorRedformNumber('red');
                return false;
            }else{inputColorRedformNumber('#000');}
            if (formAddress === '' || formAddress.length <= 7) {
                inputColorRedformAddress('red');
                return false;
            }else{inputColorRedformAddress('#000');}
            var radios = document.getElementsByName("Location");
            
    var formValid = false;
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        inputColorRedinoutdhk('#000');
        formValid = true;
        break;
      }
    }
    if (!formValid) {
      inputColorRedinoutdhk('red');
      return false;
    }
    getDatafromCookie1.value = `[{"cusName":"${formName}","cusNumber":"${number}","cusAddress":"${formAddress}","total":${gfgTotal.value},"delivery":${deliship.value}},${getDatafromCookie.value}]`;
    return true;
    
        }

        function isValidBangladeshiNumber(number) {
            // Your validation logic here
            // Example: Check if the number starts with +880 or 0 and has 11 digits
            return /^(\+)?(88)?01[0-9]{9}$/.test(number);
        }
        
function submitForm(){
if(validateForm() === true){
        loadingScrn('block');
        submitbtn.click();
        document.cookie = 'cartList=' + JSON.stringify(cartList) + "; expires=Thu, 31 Dec 2020 23:59:59 UTC; path=/;";
        setTimeout(()=>{
  reditothnxpage.click();
  // chngPageContent();
},2000)
const scriptURL = 'https://script.google.com/macros/s/AKfycbz46WZDhV7tzHA5ecqsUd3HzOiGjG8fQ4kHoblC0Y6RS5qqOzNiarxAOqcNLiUpkCBxVA/exec'
const form = document.forms['contact-form']
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.assign('https://bliss.tiiny.site'); })
  .catch(error => console.error('Error!', error.message))     
        }else{
loadingScrn('block');
setTimeout(()=>{
    loadingScrn('none');
    submitbtn.click();
  },2000)
  }
}

formAddress01.addEventListener('keypress', function(event){
  if (event.key === "Enter") {
    event.preventDefault();
    if(validateForm() === true){
      loadingScrn('block');
      submitbtn.click();
      document.cookie = 'cartList=' + JSON.stringify(cartList) + "; expires=Thu, 31 Dec 2020 23:59:59 UTC; path=/;";
      setTimeout(()=>{
  reditothnxpage.click();
  // chngPageContent();
},2000)
      const scriptURL = 'https://script.google.com/macros/s/AKfycbz46WZDhV7tzHA5ecqsUd3HzOiGjG8fQ4kHoblC0Y6RS5qqOzNiarxAOqcNLiUpkCBxVA/exec'
const form = document.forms['contact-form']
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(() => { window.location.assign('https://bliss.tiiny.site'); })
  .catch(error => console.error('Error!', error.message))
          
      }else{
loadingScrn('block');
setTimeout(()=>{
  loadingScrn('none');
},2000)
}
  }
})

function inputColorRedFormName(color){
let formName = document.querySelector('#formName');
let inputName = document.querySelector('.inputName');
formName.style = `border:1px solid ${color};`;
inputName.style = `color:${color};`;
document.body.scrollTop = 160;
document.documentElement.scrollTop = 160;
}

function inputColorRedformNumber(color){
let formNumber = document.querySelector('#formNumber');
let inputMobile = document.querySelector('.inputMobile');
formNumber.style = `border:1px solid ${color};`;
inputMobile.style = `color:${color};`;
document.body.scrollTop = 160;
document.documentElement.scrollTop = 160;
}
function inputColorRedformAddress(color){
let formAddress = document.querySelector('#formAddress');
let inputAddress = document.querySelector('.inputAddress');
formAddress.style = `border:1px solid ${color};`;
inputAddress.style = `color:${color};`;
document.body.scrollTop = 160;
document.documentElement.scrollTop = 160;
}
function inputColorRedinoutdhk(color){
let inoutdhk = document.querySelector('.inoutdhk');
let inputIndhkoutdhk = document.querySelector('.inputIndhkoutdhk');
inoutdhk.style = `border:1px solid ${color};`;
inputIndhkoutdhk.style = `color:${color};`;
document.body.scrollTop = 160;
document.documentElement.scrollTop = 160;
}

function loadingScrn(display){
let blkscrnload = document.querySelector('.blkscrnload');
blkscrnload.style = `display:${display};`;
}
        $(document).ready(()=>{
            $.getJSON("https://api.ipify.org?format=json",
            function (data) {

                // Displayin IP address on screen
                gfg.value = data.ip;
            })
        });
        
        
function getFormattedDateTime() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    
    const now = new Date();
    const day = now.getDate();
    const monthIndex = now.getMonth();
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const month = months[monthIndex];

    const formattedDateTime = `${day} ${month} ${year} - ${hours}:${minutes}:${seconds}`;
    return formattedDateTime;
}
gfgTime.value = getFormattedDateTime();


//reditothnxpage.click();


// function chngPageContent(){
//   document.body.innerHTML = `
//   <div class="bodychng">
//       <div class="logothx"><img src="/20240824_233534.jpg" alt=""></div>
//       <div class="thankyoutext">Thank you for shopping with us!</div>
//       <div class="thankyoutext2">Your order has been successfully received! We will call you to confirm the orders.</div>
//       <div class="keepshopping"><a href="/">Keep Shopping</a></div>
//   </div>
//   `;

//   window.onload = function() {
//     document.querySelector('.logothx').style = 'margin: 0px 0 0 0; transition: margin 1s ease;';
//     document.querySelector('.bodychng').style = 'opacity: 1; transition: opacity 1s ease;';
//   }
// }

  // Fetch JSON data from a local file
  fetch('/social-media-links-and-numbers-and-logos.json')
    .then(response => response.json())
    .then(data => {
      // Assuming the data is an array with one object
      const contactInfo = data[0];

      // if (contactInfo.logoLink) {
      //   document.querySelector('.datalinkhref-logo').href = contactInfo.logoLink;
      // }

      if (contactInfo.logoImage) {
        document.querySelector('.logo img').src = contactInfo.logoImage;
      }

      // Function to update anchor with href and target="_blank"
      // function updateAnchor(selector, url) {
      //   if (url) {
      //     const anchor = document.querySelector(selector);
      //     anchor.href = url;
      //     anchor.target = "_blank"; // Open in a new tab
      //   }
      // }

      // // Update anchor elements with the contact info and target blank
      // updateAnchor('.datalinkhref-whatsapp', contactInfo.whatsapp);
      // updateAnchor('.datalinkhref-fixed-whatsapp', contactInfo.whatsapp);
      // updateAnchor('.datalinkhref-imo', contactInfo.imo);
      // updateAnchor('.datalinkhref-number', contactInfo.phone);
      // updateAnchor('.datalinkhref-facebook', contactInfo.facebook);
      // updateAnchor('.datalinkhref-facebook-svg', contactInfo.facebook);
      // updateAnchor('.datalinkhref-instagram', contactInfo.instagram);
      // updateAnchor('.datalinkhref-instagram-svg', contactInfo.instagram);
      // updateAnchor('.datalinkhref-twitter', contactInfo.twitter);
      // updateAnchor('.datalinkhref-twitter-svg', contactInfo.twitter);


    })
    .catch(error => {
      console.error('Error fetching contact data:', error);
    });




  
