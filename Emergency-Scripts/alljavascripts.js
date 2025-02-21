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
const cartclick = document.querySelector("header .cart");
const totalPriceInCart = document.querySelector(".subtotal-price .total-price-foot");
const numberonbag = document.querySelector('.cartCount .spannum');
// const addtocart = document.querySelector(".add-to-cart");
//const ThechkerFott = document.querySelector(".product-container .check-out");
const rmCartFoot = document.querySelector('.rmCartFoot');
const marginConst = 20;
const delayTimeCartHeader = 200; // delay milli seconds
const delayTimeProductContainer = 300; // delay milli seconds
const transec = .5; // transition seconds
const bottomm = -70; // bottom of checkout-footer

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
  //   checkOut.style = `bottom: 0; opacity:1;  transition: bottom ${transec}s ease, opacity ${transec}s ease;`;
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
  //checkOut.style = `bottom: ${bottomm}px; opacity:1;  transition: bottom ${transec}s ease, opacity ${transec}s ease;`;
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


function showLoading3(button) {
    button.classList.add('loading');
    button.innerText = "";

    setTimeout(function() {
        button.classList.remove('loading');
        checkOutBtn.innerText = "CHECK OUT";
    }, 1000); // Remove loading state after 3 seconds (adjust as needed)
}

  //button progress or loading animation -----END




  ///////////adding cookies and cart and etc///////////////////






// let addtocart = document.querySelector(".add-to-cart");
// let cartclick = document.querySelector("header .cart");
// let totalPriceInCart = document.querySelector(".subtotal-price .total-price-foot");
// let ThechkerFott = document.querySelector(".product-container .check-out");
// let rmCartFoot = document.querySelector(".rmCartFoot");




  
// function setCookie(name, value, days) {
//   let expires = "";
//   if (days) {
//     const date = new Date();
//     date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//     expires = "; expires=" + date.toUTCString();
//   }
//   document.cookie = name + "=" + (value || "") + expires + "; path=/";
// }


///////////////////////////////////////  code ///////////////////////////////





function noToCom(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

let btn = document.querySelector('.bag');
let slide = document.querySelector('.blkScrn');
let slideCart = document.querySelector('.cart');
let cross = document.querySelector('.cross');
let totalprice = document.querySelector('.totalprice');
let cartFoot = document.querySelector('.cartFoot');
//let rmCartFoot = document.querySelector('.rmCartFoot');

  
 let products = null;
 fetch('images.json')
 .then(response => response.json())
 .then(data => {
   products = data;
   dataToHtml();
 })
 
 function dataToHtml(){
  let container = document.querySelector('.nextContainer');
  container.innerHTML = '';
  if(products != null){
    products.forEach(item =>{
      let cards = document.createElement('div');
      cards.classList.add('name-and-prices');
      cards.innerHTML = `

		<div class="product-title">
    ${item.name}
		</div>

		<div class="priceTags">
			<div class="priceStrike"><s>Tk.${noToCom(item.price)}</s></div>
			<div class="priceSale">Tk.${noToCom(item.sale)}</div>
			<div class="priceSave">Save Tk. ${noToCom(item.price - item.sale)}</div>
		</div>
		<hr>

		<div class="add-to-cart-and-buy-it-now-buttons">
			<div class="btn-add-to-cart">
				<button class="add-to-cart" onclick="btnBoom(${item.id})">ADD TO CART</button>
			</div>
			<div class="btn-buy-it-now">
				<button class="buy-it-now" onclick="btnBoomorder(${item.id})">BUY IT NOW</button>
			</div>
		</div>

		<div class="description-of-product">
			<div class="description-and-sizes">
				<div class="description">
					Introducing our Blue Luxe CZ Chain Bracelet, a stunning addition to elevate any ensemble. Crafted with meticulous attention to detail, this bracelet features exquisite blue cubic zirconia stones that exude sophistication and charm. Each stone is carefully set along the chain, creating a dazzling display of shimmering allure.
				</div>
				<div class="sizes">
					Size: 18cm
				</div>
			</div>
		</div>

		<div class="sharing-socialmedia">
			<div class="socialMedia">
				<div class="facebook-follow">
					<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-facebook" viewBox="0 0 14222 14222"><path d="M14222 7112c0 3549.352-2600.418 6491.344-6000 7024.72V9168h1657l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4968.72C2600.418 13603.344 0 10661.352 0 7112 0 3184.703 3183.703 1 7111 1s7111 3183.703 7111 7111zm-8222 7025c362 57 733 86 1111 86-377.945 0-749.003-29.485-1111-86.28zm2222 0v-.28a7107.458 7107.458 0 0 1-167.717 24.267A7407.158 7407.158 0 0 0 8222 14137zm-167.717 23.987C7745.664 14201.89 7430.797 14223 7111 14223c319.843 0 634.675-21.479 943.283-62.013z"></path></svg>
					<div class="namefacebook">Follow</div>
				</div>
				<div class="instagram-follow">
					<svg data-name="Instagram w/circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.2 19.2"><path d="M13.498 6.651a1.656 1.656 0 0 0-.95-.949 2.766 2.766 0 0 0-.928-.172c-.527-.024-.685-.03-2.02-.03s-1.493.006-2.02.03a2.766 2.766 0 0 0-.929.172 1.656 1.656 0 0 0-.949.95 2.766 2.766 0 0 0-.172.928c-.024.527-.03.685-.03 2.02s.006 1.493.03 2.02a2.766 2.766 0 0 0 .172.929 1.656 1.656 0 0 0 .95.949 2.766 2.766 0 0 0 .928.172c.527.024.685.029 2.02.029s1.493-.005 2.02-.03a2.766 2.766 0 0 0 .929-.171 1.656 1.656 0 0 0 .949-.95 2.766 2.766 0 0 0 .172-.928c.024-.527.029-.685.029-2.02s-.005-1.493-.03-2.02a2.766 2.766 0 0 0-.171-.929zM9.6 12.168A2.568 2.568 0 1 1 12.168 9.6 2.568 2.568 0 0 1 9.6 12.168zm2.669-4.637a.6.6 0 1 1 .6-.6.6.6 0 0 1-.6.6zM11.267 9.6A1.667 1.667 0 1 1 9.6 7.933 1.667 1.667 0 0 1 11.267 9.6zM9.6 0a9.6 9.6 0 1 0 9.6 9.6A9.6 9.6 0 0 0 9.6 0zm4.97 11.661a3.67 3.67 0 0 1-.233 1.214 2.556 2.556 0 0 1-1.462 1.462 3.67 3.67 0 0 1-1.213.233c-.534.024-.704.03-2.062.03s-1.528-.006-2.062-.03a3.67 3.67 0 0 1-1.213-.233 2.556 2.556 0 0 1-1.462-1.462 3.67 3.67 0 0 1-.233-1.213c-.024-.534-.03-.704-.03-2.062s.006-1.528.03-2.062a3.67 3.67 0 0 1 .232-1.213 2.556 2.556 0 0 1 1.463-1.463 3.67 3.67 0 0 1 1.213-.232c.534-.024.704-.03 2.062-.03s1.528.006 2.062.03a3.67 3.67 0 0 1 1.213.232 2.556 2.556 0 0 1 1.462 1.463 3.67 3.67 0 0 1 .233 1.213c.024.534.03.704.03 2.062s-.006 1.528-.03 2.062z"/></svg>
					<div class="nameinstagram">Share</div>
				</div>
				<div class="twitter-follow">
					<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-twitter" viewBox="0 0 32 32"><path fill="#000" d="M31.281 6.733q-1.304 1.924-3.13 3.26 0 .13.033.408t.033.408q0 2.543-.75 5.086t-2.282 4.858-3.635 4.108-5.053 2.869-6.341 1.076q-5.282 0-9.65-2.836.913.065 1.5.065 4.401 0 7.857-2.673-2.054-.033-3.668-1.255t-2.266-3.146q.554.13 1.206.13.88 0 1.663-.261-2.184-.456-3.619-2.184t-1.435-3.977v-.065q1.239.652 2.836.717-1.271-.848-2.021-2.233t-.75-2.983q0-1.63.815-3.195 2.38 2.967 5.754 4.678t7.319 1.907q-.228-.815-.228-1.434 0-2.608 1.858-4.45t4.532-1.842q1.304 0 2.51.522t2.054 1.467q2.152-.424 4.01-1.532-.685 2.217-2.771 3.488 1.989-.261 3.619-.978z"></path></svg>
					<div class="nametwitter">Tweet</div>
				</div>
			</div>
		</div>

`;
      container.appendChild(cards);
    })
  }
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
  let cartContent = document.querySelector('.listing-product');
  cartContent.innerHTML = '';
  let totalHTML = document.querySelector('.cartCount .spannum');
  let totalQuantity = 0;
  let totalpp = 0;
  if(cartList){
    cartList.forEach(data => {
      if(data){
        let ittem = document.createElement('div');
        ittem.classList.add('image-price-and-counter');
        ittem.innerHTML = `
        <div class="image">
						<img src="${data.mainimage}" alt="">
					</div>
					<div class="namecounterprice">
						<div class="name">${data.name}</div>
						<div class="counterprice">
							<div class="counter">
								<div class="minus" onclick="cngQ(${data.id},'-')"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-minus" viewBox="0 0 20 20"><path fill="" d="M17.543 11.029H2.1A1.032 1.032 0 0 1 1.071 10c0-.566.463-1.029 1.029-1.029h15.443c.566 0 1.029.463 1.029 1.029 0 .566-.463 1.029-1.029 1.029z"></path></svg></div>
								<div class="value">${data.quantity}</div>
								<div class="plus" onclick="cngQ(${data.id},'+')"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-plus" viewBox="0 0 20 20"><path fill="" d="M17.409 8.929h-6.695V2.258c0-.566-.506-1.029-1.071-1.029s-1.071.463-1.071 1.029v6.671H1.967C1.401 8.929.938 9.435.938 10s.463 1.071 1.029 1.071h6.605V17.7c0 .566.506 1.029 1.071 1.029s1.071-.463 1.071-1.029v-6.629h6.695c.566 0 1.029-.506 1.029-1.071s-.463-1.071-1.029-1.071z"></path></svg></div>
							</div>
							<div class="price">Tk.${noToCom(data.sale)}</div>
						</div>
					
        `;
                       cartContent.appendChild(ittem);
                    
                    totalQuantity = totalQuantity + data.quantity;
                    totalpp = totalpp + data.sale*data.quantity;   
                      
                                            
      }
    });
  }
  totalHTML.innerText = totalQuantity;
  totalPriceInCart.innerText = `Tk.${noToCom(totalpp)}`;
  
  if(totalpp <= 0){
    rmCartFoot.click();
    //cartContent.innerHTML = ``;
  }else{
    checkOut.style.display = "block";
  }  
}
addCartToShop();

function btnBoom(newVar){
  let layOut = JSON.parse(JSON.stringify(products));
  checkOut.style.display = "block";
  if(!cartList[newVar]){
    cartList[newVar] = layOut.filter(layer => layer.id == newVar)[0];
    cartList[newVar].quantity = 1;
  }else{
    cartList[newVar].quantity++;
  }
  
  
  document.cookie = 'cartList=' + JSON.stringify(cartList) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
  
  addCartToShop();
}

function btnBoomorder(newVar){
  let layOut = JSON.parse(JSON.stringify(products));
  checkOut.style.display = "block";
  if(!cartList[newVar]){
    cartList[newVar] = layOut.filter(layer => layer.id == newVar)[0];
    cartList[newVar].quantity = 1;
  }else{
    cartList[newVar].quantity++;
  }
  
  
  document.cookie = 'cartList=' + JSON.stringify(cartList) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
  
  addCartToShop();
}
 
 function cngQ(var1, type){
  switch(type){
   case '+':
   cartList[var1].quantity++;
   break;
   case '-':
   cartList[var1].quantity--;
   if(cartList[var1].quantity <= 0){
     delete cartList[var1];
   }
   break;
   
   default:
            break;
  }
  
  
  document.cookie = 'cartList=' + JSON.stringify(cartList) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
  
  addCartToShop();
  
}

function removeFromCart(removeCartProduct){
   delete cartList[removeCartProduct];
   
   document.cookie = 'cartList=' + JSON.stringify(cartList) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
   
   addCartToShop();
}

rmCartFoot.addEventListener('click',()=>{
  checkOut.style.display = "none";
});























<!DOCTYPE html>
<html lang="en" >
<head>
	<meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet">
    <title>Blissful Jewelleries | BD</title>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.3.7/css/swiper.min.css'>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe.min.css'>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/default-skin/default-skin.min.css'>
	<link rel="stylesheet" href="./style.css">

</head>
<body>

	<header>
        <div class="BD">
            <div class="flag">
                <div class="circle"></div>
            </div>
        </div>
        <div class="logo"><img src="20240824_233534.jpg" alt="blissful jewelleries | BD" width="190"></div>
        <div class="cart">
            <div class="bagg">
				<svg viewBox="0 0 32 32" id="i-bag" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 9 L5 29 27 29 27 9 Z M10 9 C10 9 10 3 16 3 22 3 22 9 22 9"></path> </g></svg>
                <div class="cartCount">
                    <div class="spannum">0</div>
                </div>
			</div>
        </div>
    </header>



	<div class="blur-screen"></div>

	
	
	
	<div class="centerMid">
		<div class="imageContainerSection">
			<!-- ------------------------------- -->
<!-- swiper                    (img) -->
<!-- ------------------------------- -->
<div class="swiper-container">
	<!-- Wrapper (additional required) -->
	<ul class="swiper-wrapper my-gallery" id="pushingImagesFromJson" itemscope itemtype="http://schema.org/ImageGallery">

		<!-- Slides -->
		<li id="1" class="swiper-slide" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
			<a title="zoom" href="1.png" itemprop="contentUrl" data-size="1080x1440"><img src="1.png" itemprop="thumbnail" alt=""></a>
		</li>
		
		<li id="2" class="swiper-slide" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
			<a title="zoom" href="2.png" itemprop="contentUrl" data-size="1080x1440"><img src="2.png" itemprop="thumbnail" alt=""></a>
		</li>
		
		<li id="3" class="swiper-slide" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
			<a title="zoom" href="3.png" itemprop="contentUrl" data-size="1080x1440"><img src="3.png"thumbnail" alt=""></a>
		</li>

	</ul>

	<!-- Pagination (optional) -->
	<div class="swiper-pagination | swiper-pagination2"></div>

	<!-- Navigation (optional) -->
	<div class="swiper-button-prev"></div>
	<div class="swiper-button-next"></div>
</div><!-- swiper-container -->

<!-- ------------------------------- -->
<!-- photoswipe	(element)   				 -->
<!-- ------------------------------- -->
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

	<!-- Background of PhotoSwipe -->
	<div class="pswp__bg"></div>
	
	<!-- Slides wrapper with overflow:hidden. -->
	<div class="pswp__scroll-wrap">

		<!-- Container that holds slides. 
  					PhotoSwipe keeps only 3 of them in the DOM to save memory.
  					Don't modify these 3 pswp__item elements, data is added later on. -->
		<div class="pswp__container">
			<div class="pswp__item"></div>
			<div class="pswp__item"></div>
			<div class="pswp__item"></div>
		</div>

		<!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
		<div class="pswp__ui pswp__ui--hidden">
			<div class="pswp__top-bar">
				<!--  Controls are self-explanatory. Order can be changed. -->
				<div class="pswp__counter"></div>

				<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
				<button class="pswp__button pswp__button--share" title="Share"></button>
				<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
				<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

				<!-- Preloader demo //codepen.io/dimsemenov/pen/yyBWoR -->
				<!-- element will get class pswp__preloader--active when preloader is running -->
				<div class="pswp__preloader">
					<div class="pswp__preloader__icn">
						<div class="pswp__preloader__cut">
							<div class="pswp__preloader__donut"></div>
						</div>
					</div>
				</div><!-- .pswp__preloader -->
			</div><!-- .pswp__top-bar -->
			
			<div class="pswp__loading-indicator">
				<div class="pswp__loading-indicator__line"></div>
			</div>

			<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
				<div class="pswp__share-tooltip">
					<a href="#" class="pswp__share--facebook"></a>
					<a href="#" class="pswp__share--twitter"></a>
					<a href="#" class="pswp__share--pinterest"></a>
					<a href="#" download class="pswp__share--download"></a>
				</div>
			</div><!-- pswp__share-modal -->

			<button class="pswp__button pswp__button--arrow--left" title="Last"></button>
			<button class="pswp__button pswp__button--arrow--right" title="Next"></button>
			
			<div class="pswp__caption">
				<div class="pswp__caption__center"></div>
			</div>

		</div><!-- .pswp__ui pswp__ui--hidden -->
	</div><!-- .pswp__scroll-wrap -->
</div><!-- .pswp -->

<!-- ---------------------------------------------------------------------- -->
<!-- Docs			                                                              -->
<!-- ---------------------------------------------------------------------- -->

<!-- partial -->

</div><!--------------.imageContainerSection------IMAGE CONTAINER SECTION-->
</div><!--.centerMid-->

<div class="nextContainer">
	<!--.name-and-prices-START-->
	<div class="name-and-prices">
		<div class="product-title">
			BLUE LUXE CZ CHAIN BRACELET
		</div>
		
		<div class="priceTags">
			<div class="priceStrike"><s>Tk.4,200</s></div>
			<div class="priceSale">Tk.3,800</div>
			<div class="priceSave">Save Tk.400</div>
		</div>
		<hr>

		<div class="add-to-cart-and-buy-it-now-buttons">
			<div class="btn-add-to-cart">
				<button class="add-to-cart" onclick="showLoading(this); ">ADD TO CART</button>
			</div>
			<div class="btn-buy-it-now">
				<button class="buy-it-now" onclick="showLoading2(this)">BUY IT NOW</button>
			</div>
		</div>

		<div class="description-of-product">
			<div class="description-and-sizes">
				<div class="description">
					Introducing our Blue Luxe CZ Chain Bracelet, a stunning addition to elevate any ensemble. Crafted with meticulous attention to detail, this bracelet features exquisite blue cubic zirconia stones that exude sophistication and charm. Each stone is carefully set along the chain, creating a dazzling display of shimmering allure.
				</div>
				<div class="sizes">
					Size: 18cm
				</div>
			</div>
		</div>

		<div class="sharing-socialmedia">
			<div class="socialMedia">
				<div class="facebook-follow">
					<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-facebook" viewBox="0 0 14222 14222"><path d="M14222 7112c0 3549.352-2600.418 6491.344-6000 7024.72V9168h1657l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4968.72C2600.418 13603.344 0 10661.352 0 7112 0 3184.703 3183.703 1 7111 1s7111 3183.703 7111 7111zm-8222 7025c362 57 733 86 1111 86-377.945 0-749.003-29.485-1111-86.28zm2222 0v-.28a7107.458 7107.458 0 0 1-167.717 24.267A7407.158 7407.158 0 0 0 8222 14137zm-167.717 23.987C7745.664 14201.89 7430.797 14223 7111 14223c319.843 0 634.675-21.479 943.283-62.013z"></path></svg>
					<div class="namefacebook">Follow</div>
				</div>
				<div class="instagram-follow">
					<svg data-name="Instagram w/circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.2 19.2"><path d="M13.498 6.651a1.656 1.656 0 0 0-.95-.949 2.766 2.766 0 0 0-.928-.172c-.527-.024-.685-.03-2.02-.03s-1.493.006-2.02.03a2.766 2.766 0 0 0-.929.172 1.656 1.656 0 0 0-.949.95 2.766 2.766 0 0 0-.172.928c-.024.527-.03.685-.03 2.02s.006 1.493.03 2.02a2.766 2.766 0 0 0 .172.929 1.656 1.656 0 0 0 .95.949 2.766 2.766 0 0 0 .928.172c.527.024.685.029 2.02.029s1.493-.005 2.02-.03a2.766 2.766 0 0 0 .929-.171 1.656 1.656 0 0 0 .949-.95 2.766 2.766 0 0 0 .172-.928c.024-.527.029-.685.029-2.02s-.005-1.493-.03-2.02a2.766 2.766 0 0 0-.171-.929zM9.6 12.168A2.568 2.568 0 1 1 12.168 9.6 2.568 2.568 0 0 1 9.6 12.168zm2.669-4.637a.6.6 0 1 1 .6-.6.6.6 0 0 1-.6.6zM11.267 9.6A1.667 1.667 0 1 1 9.6 7.933 1.667 1.667 0 0 1 11.267 9.6zM9.6 0a9.6 9.6 0 1 0 9.6 9.6A9.6 9.6 0 0 0 9.6 0zm4.97 11.661a3.67 3.67 0 0 1-.233 1.214 2.556 2.556 0 0 1-1.462 1.462 3.67 3.67 0 0 1-1.213.233c-.534.024-.704.03-2.062.03s-1.528-.006-2.062-.03a3.67 3.67 0 0 1-1.213-.233 2.556 2.556 0 0 1-1.462-1.462 3.67 3.67 0 0 1-.233-1.213c-.024-.534-.03-.704-.03-2.062s.006-1.528.03-2.062a3.67 3.67 0 0 1 .232-1.213 2.556 2.556 0 0 1 1.463-1.463 3.67 3.67 0 0 1 1.213-.232c.534-.024.704-.03 2.062-.03s1.528.006 2.062.03a3.67 3.67 0 0 1 1.213.232 2.556 2.556 0 0 1 1.462 1.463 3.67 3.67 0 0 1 .233 1.213c.024.534.03.704.03 2.062s-.006 1.528-.03 2.062z"/></svg>
					<div class="nameinstagram">Share</div>
				</div>
				<div class="twitter-follow">
					<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-twitter" viewBox="0 0 32 32"><path fill="#000" d="M31.281 6.733q-1.304 1.924-3.13 3.26 0 .13.033.408t.033.408q0 2.543-.75 5.086t-2.282 4.858-3.635 4.108-5.053 2.869-6.341 1.076q-5.282 0-9.65-2.836.913.065 1.5.065 4.401 0 7.857-2.673-2.054-.033-3.668-1.255t-2.266-3.146q.554.13 1.206.13.88 0 1.663-.261-2.184-.456-3.619-2.184t-1.435-3.977v-.065q1.239.652 2.836.717-1.271-.848-2.021-2.233t-.75-2.983q0-1.63.815-3.195 2.38 2.967 5.754 4.678t7.319 1.907q-.228-.815-.228-1.434 0-2.608 1.858-4.45t4.532-1.842q1.304 0 2.51.522t2.054 1.467q2.152-.424 4.01-1.532-.685 2.217-2.771 3.488 1.989-.261 3.619-.978z"></path></svg>
					<div class="nametwitter">Tweet</div>
				</div>
			</div>
		</div>
		
	</div><!--.name-and-prices-END-->
</div><!--.nextContainer-->

<div class="cart-holder">
	<div class="cart-header">
		<div class="cart-name">CART</div>
		<div class="cross-svg">
			<svg fill="#000000" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve" stroke="#000000" stroke-width="0.0049"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.9600000000000002"></g><g id="SVGRepo_iconCarrier"> <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon> </g></svg>
		</div>
	</div>
	<hr>
	<div class="product-container">
		<div class="listing-product">
			<div class="image-price-and-counter">
				<div class="image">
					<img src="1.png" alt="">
				</div>
				<div class="namecounterprice">
					<div class="name">Gilded Tearwave Bracelet </div>
					<div class="counterprice">
						<div class="counter">
							<div class="minus"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-minus" viewBox="0 0 20 20"><path fill="" d="M17.543 11.029H2.1A1.032 1.032 0 0 1 1.071 10c0-.566.463-1.029 1.029-1.029h15.443c.566 0 1.029.463 1.029 1.029 0 .566-.463 1.029-1.029 1.029z"></path></svg></div>
							<div class="value">4</div>
							<div class="plus"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-plus" viewBox="0 0 20 20"><path fill="" d="M17.409 8.929h-6.695V2.258c0-.566-.506-1.029-1.071-1.029s-1.071.463-1.071 1.029v6.671H1.967C1.401 8.929.938 9.435.938 10s.463 1.071 1.029 1.071h6.605V17.7c0 .566.506 1.029 1.071 1.029s1.071-.463 1.071-1.029v-6.629h6.695c.566 0 1.029-.506 1.029-1.071s-.463-1.071-1.029-1.071z"></path></svg></div>
						</div>
						<div class="price">Tk.1,500</div>
					</div>
				</div>
			</div>
			
			
			
			
		</div>
		<div class="check-out">
			<div class="checkout-btns-and-totals">
				<div class="containing-all-checkouts">
					<div class="subtotal-price">
						<div class="subtotal-text">subtotal</div>
						<div class="total-price-foot">Tk.1,500</div>
					</div>
					<div class="shipp-cost">Delivery Charge Inside Dhaka Tk.80 and Outside Dhaka Tk.100</div>
					<div class="checkout-btn"><button class="check-out-btn" onclick="showLoading3(this)">check out</button></div>
				</div>
			</div>
		</div>
	</div>
</div>

<button class="rmCartFoot">cjkfdslfhejfshaldjh</button>


<!-- Other script includes -->
<script src='https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.3.7/js/swiper.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe-ui-default.min.js'></script>
<script src="./script.js"></script>
<script src="cart-and-products.js"></script>
<script src="addtocartandcookies.js"></script>
</body>
</html>

