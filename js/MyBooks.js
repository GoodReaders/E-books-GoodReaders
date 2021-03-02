'use strict';

// cart constructor function
const Cart = function (books) {
    this.books = books;
}

// declare a cart variable
let cart;

// Add book to the cart
Cart.prototype.addBook = function(bookName, bookImg, bookPrice) {
    let newBook = new CartBook(bookName, bookImg, bookPrice);
    this.books.push(newBook)
}

// remove book from the cart
Cart.prototype.removeBook = function (bookName) {
    let bookIndex;
    for(let i=0; i<this.books.length; i++) {
      if(this.books[i].bookName == bookName) {
        bookIndex = i;
        break;
      }
    }
    this.books.splice(bookIndex, 1);
}

// save carts' books in the local storage
Cart.prototype.saveToLocalStorage = function () {
    localStorage.setItem('cart',JSON.stringify(this.books))
}

// constructor function for the cart book
const CartBook = function(bookName, bookImg, bookPrice) {
    this.bookName = bookName;
    this.bookImg = bookImg;
    this.bookPrice = bookPrice;
}


// Handel the event of clicking on remove link
let divContainer = document.getElementById("main-div");
divContainer.addEventListener('click', removeBookFromCart);

function removeBookFromCart(event){
    event.preventDefault();
    let itemDom = document.querySelectorAll("item");
    console.log(event.target.nodeName);
    if(event.target.nodeName ==='A'){
        console.log(event.target.parentNode.parentNode);
        event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
        console.log(event.target);
        //siblings
        cart.removeBook(/*book name*/)
    }
    // cart.saveToLocalStorage();
    renderCart();
}



// render all books from the cart onto the page
function renderCart(){
    loadCart();
    clearCart();
    showCart();
}

function loadCart(){
    const cartBooks = JSON.parse(localStorage.getItem('cart')) || [];
    cart = new Cart(cartBooks);
}

function clearCart() {
    let subContainerDiv = document.getElementsByClassName("sub-container");
    subContainerDiv.textContent = "";                               
}

function showCart(){
    let subContainerDiv = document.getElementsByClassName('sub-container');
    for(let i=0; i<cart.books.length; i++) {
        /*code to render the cart*/
    }
}