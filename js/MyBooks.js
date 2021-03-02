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

    if(event.target.nodeName ==='A'){
        event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
        let bookName = event.target.parentNode.children[0].textContent;
        console.log(bookName);
        cart.removeBook(bookName)
    }
    cart.saveToLocalStorage();
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
}

function calcTotalPrice() {
   let total = 0;
   for(let i=0; i<cart.books.length; i++) {
       total += cart.books[i].bookPrice;
   }
   return total;
}

( function( $ ) {

	$( '.dropdown-toggle' ).click( function( e ) {
		var _this = $( this );
		e.preventDefault();
		_this.toggleClass( 'toggle-on' );
		_this.parent().next( '.sub-menu' ).toggleClass( 'toggled-on' );
		_this.attr( 'aria-expanded', _this.attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );
		_this.html( _this.html() === '<span class="screen-reader-text">Expand child menu</span>' ? '<span class="screen-reader-text">Collapse child menu</span>' : '<span class="screen-reader-text">Expand child menu</span>' );
	} );

})( jQuery );
