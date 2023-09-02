let searchForm=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');  //active could be any class name. this will do the task mentioned in the class named active. 
     // The toggle() method toggles between hide() and show() for the selected elements. the selected elements for visibility. show() is run if an element is hidden. hide() is run if an element is visible - 
    // The classList property returns the CSS classnames of an element.
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}

let shoppingCart=document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>
{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');  
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}

let loginForm=document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active'); 
    searchForm.classList.remove('active');  
    shoppingCart.classList.remove('active');
    navBar.classList.remove('active');
}

let navBar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>
{
    navBar.classList.toggle('active');
    searchForm.classList.remove('active');  
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>             /*The onscroll event occurs when an element's scrollbar is being scrolled.*/
{
    searchForm.classList.remove('active');  
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}

/*code for product slidder starts */
var swiper = new Swiper(".product-slider", {
    loop:true,      //we want infinte slidding
    spaceBetween: 20,
    autoplay:{              //webpage load ho to slidder active ho jaae
        delay: 7500,        //approximately 7.5sec after sliding
        disableOnInteraction:false,         //jab cusor ya kuchh interaction ho to slide rukega - false means nahi rukna hai
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
  /*code for product slider ends */


/*code for review slidder starts */
var swiper = new Swiper(".review-slider", {
  loop:true,      
  spaceBetween: 20,
  autoplay:{              
      delay: 7500,       
      disableOnInteraction:false,         
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
/*code for review slider ends */