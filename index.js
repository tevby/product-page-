let menu = document.querySelector('.nav-logo');
let closeMenu = document.querySelector('.close-nav');
let navMenu = document.querySelector('.navbar-menu');
let cart = document.querySelector('.cart-ctn');
let cartBody = document.querySelector('.cart-info');

menu.addEventListener("click", () => {
    navMenu.classList.add("active")
} )
 closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("active")
 })

 cart.addEventListener("click", () => {
    if(cartBody.classList.contains('present')){
        cartBody.classList.remove('present')
    } else {
        cartBody.classList.add('present')
    }
 })
 let productImages = document.querySelectorAll('.product');
 let prevBtn = document.querySelector('.prev-img');
 let nextBtn = document.querySelector('.next-img');
 let imageIndex = 0
  
 function reset () {
    for ( i = 0; i < productImages.length; i++){
        productImages[i].style.display = 'none'
    }
 }
 function showImage () {
    reset ()
    productImages[imageIndex].style.display = 'block'
 }
 function slideLeft (){
    reset()
    productImages[imageIndex-1].style.display ='block'
    imageIndex--
 }
 function slideright(){
    reset()
    productImages[imageIndex + 1].style.display = 'block'
    imageIndex++
 }
 prevBtn.addEventListener("click", () => {
    if (imageIndex === 0){
        imageIndex = productImages.length
    }
    slideLeft()
 })
 nextBtn.addEventListener("click", () => {
    if (imageIndex === productImages.length - 1){
        imageIndex = -1
    }
    slideright()

 })
 showImage()

let modalImages = document.querySelectorAll('.modal-product');
 
function clearImages(){
    for (let i = 0; i < modalImages.length; i++){
        modalImages[i].style.display = 'none'
    }
}
function modalImage (imageIndex){
    clearImages()
    modalImages[imageIndex].style.display = 'block'
}
    
modalImage(imageIndex)
    
let modalBox = document.querySelector('.modal-box');
let closeImg = document.querySelector('.close-modal');
let productBox = document.querySelector('.product-image');

function viewModal() {
    modalBox.style.display = 'flex'
}
function closeModal(){
    modalBox.style.display = 'none'
}


function showThumbimg (imageIndex) {
    reset ()
    productImages[imageIndex].style.display = 'block'
}
function showthumb (imageIndex){
    showThumbimg(imageIndex - 1)
    modalImage(imageIndex-1)
}
let prev_mBtn = document.querySelector('.prev-mimg');
let next_mBtn = document.querySelector('.next-mimg');

function goLeft (){
    reset()
    clearImages()
    productImages[imageIndex-1].style.display ='block'
    modalImages[imageIndex - 1] .style .display = 'flex'
    imageIndex--
 }
 function goright(){
    reset()
    clearImages()
    productImages[imageIndex + 1].style.display = 'block'
    modalImages[imageIndex + 1] .style .display = 'flex'
    imageIndex++
 }

 prev_mBtn.addEventListener("click", () => {
    if (imageIndex === 0){
        imageIndex = modalImages.length
    }
    goLeft()
 })
 next_mBtn.addEventListener("click", () => {
    if (imageIndex === modalImages.length - 1){
        imageIndex = -1
    }
    goright()

 })

  let incrementBtn = document.querySelector('.increment-img');
  let decrementBtn = document.querySelector('.decrement-img');
  let product_quantity = document.querySelector('.number');
  let cart_quantity = document.querySelector('.cart-no');
  let index = 0

function increment (){
    index++
    product_quantity.textContent = index
    // cart_quantity.textContent = index
}
function decrement (){
    if( index === 0){
        product_quantity.textContent = 0
    } else{
        index--
        product_quantity.textContent = index
        // cart_quantity.textContent = index
    }
}

let empty = document.querySelector('.cart-empty');
let cartContent = document.querySelector('.cart-content');
let deleteBtn = document.querySelector('.delete-btn');

function addCart() {
    product_quantity.textContent = 0
    cart_quantity.innerHTML = `<p>${index}</p>`
    let total = 125.00 * index;
    if (index > 0) {
        empty.style.display = 'none';
        cartContent.innerHTML = `
        <div class="cart-product">
            <div class="cart-flex">
                <img src="./ecommerce-product-page-main/images/image-product-1-thumbnail.jpg" alt="" class="cart-pimg">
                <div class="cart-pCtn">
                    <p class="cart-pTitle">
                       Fall limited Edition Sneakers
                    </p>
                    <p>
                       <span> $125.00 </span> x <span class="p-no"> ${index}</span> <b class="total">$${total}</b>
                    </p>
                </div>
                <button class="delete-btn" onclick="deleteCart()"><img src="./ecommerce-product-page-main/images/icon-delete.svg" alt=""></button>
            </div>
            <button class="checkout-btn">Checkout</button>
        </div>`
    }
}

function deleteCart(){
    let quantityNo = document.querySelector('.p-no');
    let cTotal = document.querySelector('.total');
    console.log('delete')
    if (index === 0){
        cartContent.innerHTML = " "
        cartContent.innerHTML = `<p> Your Cart is empty</p>`
    } else {
        index--
        let sum = 125.00 * index;
        cart_quantity.innerHTML = `<p>${index}</p>`
        quantityNo.innerHTML =`<span class ="p-number">${index}</span>`
        cTotal.innerHTML = `<b>$${sum}</b>`
    }
}