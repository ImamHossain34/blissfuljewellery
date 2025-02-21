const transecc = .5; // transition seconds
const bottommm = -70; // bottom of checkout-footer

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}


///////////////////////////////////////  code ///////////////////////////////
function noToCom(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x))
    x = x.replace(pattern, "$1,$2");
  return x;
}

let addtocart = document.querySelector(".add-to-cart");
let buyitnow = document.querySelector(".buy-it-now");
let cartclick = document.querySelector("header .cart");
let totalPriceInCart = document.querySelector(".subtotal-price .total-price-foot");
let ThechkerFott = document.querySelector(".product-container .check-out");
let rmCartFoot = document.querySelector(".rmCartFoot");
const firstProductInSlider = document.querySelector('.products-in-the-slider:first-of-type');
const ProductInSlider = document.querySelector('.product-Slider');
const pslideContainer = document.querySelector('.pslideContainer');
let productContainerListing = document.querySelector('.listing-product');


 let products = null;
 fetch('images.json')
 .then(response => response.json())
 .then(data => {
   products = data;
   dataToHtml();
 })
 
 function dataToHtml(){
    let productTitle = document.querySelector('.product-title');
    let priceTags = document.querySelector('.priceTags');
    let secretAddtocartandBuyitnowButton = document.querySelector('.secretAddtocartandBuyitnowButton');
    if(products != null){
      products.forEach(item =>{
        let saveMoney = item.price - item.sale;
        productTitle.innerHTML = `${item.name}`;
        priceTags.innerHTML = `
        <div class="itemidappend" style="display: none;">${item.id}</div>
            <div class="priceStrike"><s>Tk.${noToCom(item.price)}</s></div>
			<div class="priceSale">Tk.${noToCom(item.sale)}</div>
			<div class="priceSave">Save Tk.${noToCom(saveMoney)}</div>
        `;
        secretAddtocartandBuyitnowButton.innerHTML = `
        <div class="unique-button-addtocart" onclick="btnBoomaddtocart(${item.id})">addtoocarrt</div>
        <div class="unique-button-buyitnow" onclick="btnBoomorderbuyitnow(${item.id})">buyyyitnoww</div>
        `
      })
    }

    /////////////////////////////////////////////////
    let itemidappend = document.querySelector('.itemidappend');
    function bbc(){
      //firstProductInSlider.style =  `margin-left:0px;`;
      ProductInSlider.style =  `opacity:1;`;
      pslideContainer.style =  `margin:0;`;
    }
    
    // Function to change the body background color
    function changeBackgroundColor() {
      if (window.scrollY > 700) {
        bbc().click();
      }
    }
    
    // Add the scroll event listener
    window.addEventListener('scroll', changeBackgroundColor);
    
    
            // URL of the server endpoint
            const url = '/products.json'; // Replace with your API endpoint
    
            // Fetch the product data
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    // Filter out the item with id 108
                    const filteredData = data.filter(product => product.id !== Number(itemidappend.innerText));
                    
                    // Function to get a random sample of items
                    function getRandomSample(arr, num) {
                        const shuffled = arr.slice(0); // Copy array
                        let i = arr.length, temp, index;
                        while (i--) {
                            index = Math.floor((i + 1) * Math.random());
                            temp = shuffled[index];
                            shuffled[index] = shuffled[i];
                            shuffled[i] = temp;
                        }
                        return shuffled.slice(0, num);
                    }
    
                    // Get 6 random items from the filtered data
                    const randomItems = getRandomSample(filteredData, 6);
                    
                    // Render the items
                    const pslideContainer = document.querySelector('.pslideContainer');
                    pslideContainer.innerHTML = '';
                    randomItems.forEach(product => {
                        const productElement = document.createElement('div');
                        productElement.className = 'products-in-the-slider';
    
                        productElement.innerHTML = `
                        <div class="slider-image"><a href="${product.link}" class="datalinkhref"><img src="${product.mainimage}" alt="${product.name}"></div>
            <div class="products-in-the-slider-name">${product.name}</div>
            <div class="products-in-the-slider-price">
              <div class="products-in-the-slider-priceStrike"><s>Tk.${product.price}</s></div>
              <div class="products-in-the-slider-priceSale">Tk.${product.sale}</div>
              <div class="products-in-the-slider-priceSave">Save Tk.${product.price - product.sale}</div>	
            </div></a>
                        `;
                        console.log(product.id);
    
                        pslideContainer.appendChild(productElement);
                    });
                })
                .catch(error => {
                    console.error('Error fetching the product list:', error);
                });
    
    /////////////////////////////////////////////////

    let uniquebuttonaddtocart = document.querySelector(".unique-button-addtocart");
    let uniquebuttonbuyitnow = document.querySelector(".unique-button-buyitnow");
    addtocart.addEventListener('click', () => {
        setTimeout(() => {
            uniquebuttonaddtocart.click();
            uniquebuttonbuyitnow.click();
            cartclick.click();
        }, 1000);
    });

    buyitnow.addEventListener('click', () => {
        setTimeout(() => {
            uniquebuttonbuyitnow.click();
        }, 1000);
    });
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

  function addCartToShop(){
    let listingProduct = document.querySelector('.listing-product');
    listingProduct.innerHTML = '';
    let totalHTML = document.querySelector('.cartCount span');
    let totalQuantity = 0;
    let totalpp = 0;
    if(cartList){
      cartList.forEach(data => {
        if(data){
          let ittem = document.createElement('div');
          ittem.classList.add('image-price-and-counter');
          ittem.innerHTML = `
          	        <div class="image">
						<a class="datalinkhref" href="${data.link}"><img src="${data.mainimage}" alt="${data.name}"></a>
					</div>
					<div class="namecounterprice">
						<a class="datalinkhref" href="${data.link}"><div class="name">${data.name}</div></a>
						<div class="counterprice">
							<div class="counter">
								<div class="minus" onclick="cngQ(${data.id},'-')"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-minus" viewBox="0 0 20 20"><path fill="" d="M17.543 11.029H2.1A1.032 1.032 0 0 1 1.071 10c0-.566.463-1.029 1.029-1.029h15.443c.566 0 1.029.463 1.029 1.029 0 .566-.463 1.029-1.029 1.029z"></path></svg></div>
								<div class="value">${data.quantity}</div>
								<div class="plus" onclick="cngQ(${data.id},'+')"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-plus" viewBox="0 0 20 20"><path fill="" d="M17.409 8.929h-6.695V2.258c0-.566-.506-1.029-1.071-1.029s-1.071.463-1.071 1.029v6.671H1.967C1.401 8.929.938 9.435.938 10s.463 1.071 1.029 1.071h6.605V17.7c0 .566.506 1.029 1.071 1.029s1.071-.463 1.071-1.029v-6.629h6.695c.566 0 1.029-.506 1.029-1.071s-.463-1.071-1.029-1.071z"></path></svg></div>
							</div>
							<div class="price">Tk.${noToCom(data.sale)}</div>
						</div>
					</div>
          `;
                    listingProduct.appendChild(ittem);
                      
                      totalQuantity = totalQuantity + data.quantity;
                      totalpp = totalpp + data.sale*data.quantity;   
                        
                                              
        }
      });
    }
    totalHTML.innerText = totalQuantity;
    totalPriceInCart.innerText = `Tk.${noToCom(totalpp)}`;
    if (totalpp <= 0) {
      productContainerListing.innerHTML = `<div class="whencartempty">Your cart is currently empty.</div>`;
      //rmCartFoot.click();
      ThechkerFott.style = `bottom: ${bottommm-170}px; display:block; opacity:1;  transition: bottom ${transecc}s ease, opacity ${transecc}s ease;`;

    } else {
      //ThechkerFott.style = `bottom: ${bottommm+210}px; opacity:1;  transition: bottom ${transecc}s ease, opacity ${transecc}s ease;`;
     // setTimeout(() => {
        ThechkerFott.style = `bottom: 0; display: block; opacity:1;  transition: bottom ${transecc}s ease, opacity ${transecc}s ease;`;
     // }, 270);


    }
   
  }

  addCartToShop();

  function btnBoomaddtocart(newVar) {
    let layOut = JSON.parse(JSON.stringify(products));
    if (!cartList[newVar]) {
        cartList[newVar] = layOut.filter(layer => layer.id == newVar)[0];
        cartList[newVar].quantity = 1;
    } else {
        if (cartList[newVar].quantity < 1) { // Add this check
            cartList[newVar].quantity++;
        }
    }

   // document.cookie = 'cartList=' + JSON.stringify(cartList) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
   setCookie('cartList', JSON.stringify(cartList), 365 * 2); // 2 years = 365 * 2 days

    addCartToShop();
}

  function btnBoomorderbuyitnow(newVar) {
    let layOut = JSON.parse(JSON.stringify(products));
    if (!cartList[newVar]) {
        cartList[newVar] = layOut.filter(layer => layer.id == newVar)[0];
        cartList[newVar].quantity = 1;
    } else {
        if (cartList[newVar].quantity < 1) { // Add this check
            cartList[newVar].quantity++;
        }
    }

   // document.cookie = 'cartList=' + JSON.stringify(cartList) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
   setCookie('cartList', JSON.stringify(cartList), 365 * 2); // 2 years = 365 * 2 days

    addCartToShop();
}


  function cngQ(var1, type) {
    switch(type) {
        case '+':
            if (cartList[var1].quantity < 6) { // Add this check
                cartList[var1].quantity++;
            }
            break;
        case '-':
            cartList[var1].quantity--;
            if (cartList[var1].quantity <= 0) {
                delete cartList[var1];
            }
            break;
        default:
            break;
    }

  //  document.cookie = 'cartList=' + JSON.stringify(cartList) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
  setCookie('cartList', JSON.stringify(cartList), 365 * 2); // 2 years = 365 * 2 days

    addCartToShop();
}

// rmCartFoot.addEventListener('click', ()=>{
//      ThechkerFott.style = `bottom: ${bottommm-170}px; display:none; opacity:1;  transition: bottom ${transecc}s ease, opacity ${transecc}s ease;`;
//     });

function updateCopyrightYear() {
  const currentYear = new Date().getFullYear();
  document.getElementById('currentYear').textContent = currentYear;
}

// Call the function to set the year when the page loads
window.onload = updateCopyrightYear;



////////--------adding contact and social media link --START


  // Fetch JSON data from a local file
  fetch('/social-media-links-and-numbers-and-logos.json')
    .then(response => response.json())
    .then(data => {
      // Assuming the data is an array with one object
      const contactInfo = data[0];

      if (contactInfo.logoLink) {
        document.querySelector('.datalinkhref-logo').href = contactInfo.logoLink;
      }
      if (contactInfo.logoImage) {
        document.querySelector('header .logo img').src = contactInfo.logoImage;
      }

      // Function to update anchor with href and target="_blank"
      function updateAnchor(selector, url) {
        if (url) {
          const anchor = document.querySelector(selector);
          anchor.href = url;
          anchor.target = "_blank"; // Open in a new tab
        }
      }

      // Update anchor elements with the contact info and target blank
      updateAnchor('.datalinkhref-whatsapp', contactInfo.whatsapp);
      updateAnchor('.datalinkhref-fixed-whatsapp', contactInfo.whatsapp);
      updateAnchor('.datalinkhref-imo', contactInfo.imo);
      updateAnchor('.datalinkhref-number', contactInfo.phone);
      updateAnchor('.datalinkhref-facebook', contactInfo.facebook);
      updateAnchor('.datalinkhref-facebook-svg', contactInfo.facebook);
      updateAnchor('.datalinkhref-instagram', contactInfo.instagram);
      updateAnchor('.datalinkhref-instagram-svg', contactInfo.instagram);
      updateAnchor('.datalinkhref-twitter', contactInfo.twitter);
      updateAnchor('.datalinkhref-twitter-svg', contactInfo.twitter);
    })
    .catch(error => {
      console.error('Error fetching contact data:', error);
    });


////////--------adding contact and social media link --END