const cart = document.querySelector('.cart');
const blurScreen = document.querySelector('.blur-screen');
const cartHolder = document.querySelector('.cart-holder');
const cartHeaderCrossSvg = document.querySelector('.cart-header .cross-svg');
const cartHeader = document.querySelector('.cart-header');
const productContainer = document.querySelector('.product-container');
const checkOut = document.querySelector('.product-container .check-out');
const addToCart = document.querySelector('.add-to-cart');        
const buyItNow = document.querySelector('.buy-it-now');
const checkOutBtn = document.querySelector('.check-out-btn');
const marginConst = 20;
const delayTimeCartHeader = 200; // delay milli seconds
const delayTimeProductContainer = 300; // delay milli seconds
const transec = .5; // transition seconds
const bottomm = -70; // bottom of checkout-footer
const checkOutPage = `${window.location.href}checkout`;
const checkOutPageForCheckOut = "/checkout"

cart.addEventListener('click', () => {
  blurScreen.classList.add('visible');  // Show the blur screen
  document.body.classList.add('no-scroll');  // Disable scrolling

  // Remove any 'returning' class to use the slower transition
  cartHolder.classList.remove('returning');
  cartHolder.style.right = '0';  // Slide in the cart-holder
  setTimeout(() => {
    cartHeader.style = `margin: 0 0 0 0; opacity:1;  transition: margin ${transec}s ease, opacity ${transec}s ease;`;
  }, delayTimeCartHeader);

  setTimeout(() => {
    productContainer.style = `margin: 0 0 0 0; opacity:1;  transition: margin ${transec}s ease, opacity ${transec}s ease;`;
  }, delayTimeProductContainer);

  // setTimeout(() => {
  //  // checkOut.style = `bottom: 0; opacity:1;  transition: bottom ${transec}s ease, opacity ${transec}s ease;`;
  // }, 270);
  
});

// Optional: Hide cart-holder and blur screen when blur-screen is clicked
blurScreen.addEventListener('click', () => {
  blurScreen.classList.remove('visible');  // Hide the blur screen
  document.body.classList.remove('no-scroll');  // Enable scrolling

  // Add the 'returning' class to use the faster transition
  cartHolder.classList.add('returning');
  cartHolder.style.right = '-346px';  // Slide out the cart-holder
  cartHeader.style = `margin: ${marginConst}px 0 0 0; opacity: 0;`;
  productContainer.style = `margin: ${marginConst}px 0 0 0; opacity: 0;`;
 // checkOut.style = `bottom: ${bottomm}px; opacity:1;  transition: bottom ${transec}s ease, opacity ${transec}s ease;`;
});

// Hide cart-holder and blur screen when the cross SVG is clicked
cartHeaderCrossSvg.addEventListener('click', () => {
    blurScreen.classList.remove('visible');  // Hide the blur screen
    document.body.classList.remove('no-scroll');  // Enable scrolling
    cartHeader.style = `margin: ${marginConst}px 0 0 0; opacity: 0;`;
    productContainer.style = `margin: ${marginConst}px 0 0 0; opacity: 0;`;
   // checkOut.style = `bottom: ${bottomm}px; opacity:1;  transition: bottom ${transec}s ease, opacity ${transec}s ease;`;  
    // Add the 'returning' class to use the faster transition
    cartHolder.classList.add('returning');
    cartHolder.style.right = '-346px';  // Slide out the cart-holder
  });


  //button progress or loading animation -----START

  function showLoading(button) {
    button.classList.add('loading');
  button.innerText = "";
    
    // Simulate a delay for the loading state
    setTimeout(function() {
        button.classList.remove('loading');
      addToCart.innerText = "add to cart";
    }, 1000); // Remove loading state after 3 seconds (adjust as needed)
}

function showLoading2(button) {
    button.classList.add('loading');
  button.innerText = "";

    setTimeout(function() {
        button.classList.remove('loading');
      buyItNow.innerText = "buy it now";
      window.location.href = checkOutPage;
    }, 1000); // Remove loading state after 3 seconds (adjust as needed)
}

function showLoading3(button) {
    button.classList.add('loading');
    button.innerText = "";

    setTimeout(function() {
        button.classList.remove('loading');
        checkOutBtn.innerText = "CHECK OUT";
        window.location.href = checkOutPageForCheckOut;
    }, 1000); // Remove loading state after 3 seconds (adjust as needed)
}

  //button progress or loading animation -----END