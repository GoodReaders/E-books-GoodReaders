'use strict';

// cart constructor function
const Cart = function () {
    this.books = [];
}
// constructor function for the cart book
const CartBook = function(bookName, bookImg, bookPrice) {
    this.bookName = bookName;
    this.bookImg = bookImg;
    this.bookPrice = bookPrice;
}


// declare a cart variable
let cart = new Cart();

let book1 = new CartBook("xxx", "../images/Art/book-1.jpg", 25);
let book2 = new CartBook("yyy", "../images/Art/book-2.jpg", 13);
let book3 = new CartBook("zzz", "../images/Art/book-3.jpg", 50);
let book4 = new CartBook("www", "../images/Art/book-4.jpg", 43);
cart.books.push(book1);
cart.books.push(book2);
cart.books.push(book3);
cart.books.push(book4);
saveToLocalStorage();

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
function saveToLocalStorage() {
    localStorage.setItem('cart',JSON.stringify(cart.books))
}

//let totalprices = calcTotalPrice();


// Handel the event of clicking on remove link
let divContainer = document.getElementById("main-div");
divContainer.addEventListener('click', removeBookFromCart);

function removeBookFromCart(event){
    if(event.target.nodeName ==='A'){
        let bookName = event.target.parentNode.children[0].textContent; 
        event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
        
        cart.removeBook(bookName);
        saveToLocalStorage();
        renderCart();
    }
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
    let totalPrice = calcTotalPrice();
    for(let i=0; i<cart.books.length; i++) {
        // create elements needed
        let containerDiv = document.getElementById("main-div");
        let divElement1 = document.createElement('div')
        let imgElement = document.createElement('img');
        let divElement2 = document.createElement('div')
        let h5Element = document.createElement('h5');
        let h6Element = document.createElement('h6');
        let aElement = document.createElement('a');
        
        // set attributes
        divElement1.setAttribute('class', 'item');
        imgElement.setAttribute('src', cart.books[i].bookImg);
        divElement2.setAttribute('class', 'details');
        aElement.setAttribute('class', 'remove-btn');

        // set elements' content
        h5Element.textContent = cart.books[i].bookName;
        h6Element.textContent = '$' + cart.books[i].bookPrice;
        aElement.textContent = "remove";

        // append childs
        divElement2.appendChild(h5Element);
        divElement2.appendChild(h6Element);
        divElement2.appendChild(aElement);
        divElement1.appendChild(imgElement);
        divElement1.appendChild(divElement2);
        containerDiv.appendChild(divElement1);
    }
    let pElement = document.getElementById('total');
    pElement.textContent = "Total Price: $" + totalPrice;
}

function calcTotalPrice() {
    let total = 1;
   for(let i=0; i<cart.books.length; i++) {
       total += cart.books[i].bookPrice;
   }
   return total;
}


showCart();