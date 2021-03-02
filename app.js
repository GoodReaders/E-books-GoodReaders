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




// getting the products
function Products() {

}

Products.prototype.getProducts = async () => {
    try {
        let result = await fetch("../books.json");
        let data = await result.json();
        let products = data.books;
        products = products[0]['self-help'];
        products = products.map( book => {
            const img = book['img-url'];
            const name = book.name;
            const author = book.author;
            const price = book.price;
            const publishedDate = book['published=date']
            const pdf = book['book-url'];
            const intro = book.introduction;
            // const image = book.image-url;
            return {img,name,author,price,publishedDate,pdf,intro};
        })
        console.log(products);
        return products;
    } catch (error) {
        console.log(error)
    }
}



const Cart = function (items) {
    this.items = items;
  };
  
  Cart.prototype.addItem = function () {
     let newItem  = new Products();
     this.items.push(newItem);
  
  };
  
  Cart.prototype.saveToLocalStorage = function () {
    localStorage.setItem('cart',JSON.stringify(this.items))
  };
  
  
  
  Products();




  let counter=0;

const cart = new Cart([]);



function handleSubmit(event) {
  event.preventDefault();

   


  counter++;
  addSelectedItemToCart(event);
  cart.saveToLocalStorage();
  updateCounter();
  

}



function updateCounter() {
  let upper = document.getElementsByClassName('add-button');
  

  
  upper.textContent=counter;
}




