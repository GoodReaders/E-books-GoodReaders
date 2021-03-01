// let productDom = document.querySelector(".books");

// // getting the products
// function Products() {

// }

// Products.prototype.getProducts = async () => {
//     try {
//         let result = await fetch("../books.json");
//         let data = await result.json();
//         let products = data.books;
//         products = products[0]['self-help'];
//         products = products.map( book => {
//             const img = book['img-url'];
//             const name = book.name;
//             const author = book.author;
//             const price = book.price;
//             const publishedDate = book['published=date']
//             // const image = book.image-url;
//             return {img,name,author,price,publishedDate};
//         })
//         console.log(products);
//         return products;
//     } catch (error) {
//         console.log(error)
//     }
// }


// // display product
// function UI() {

// }

// UI.prototype.displayProducts = function(products) {
//     let result = "";
//     products.forEach( product => {
//         result += `
//         <article class="one-book">
//             <img src=${product.img}
//             alt="book1" 
//             class="imgs"/>
//             <div class="bookInfo">
//             <h6>${product.name}</h6>
//             <h6>By ${product.author}</h6>
//             <h6>${product.price}</h6>
//             <h6>1/1/1994</h6>
//             <button class="read-button" data-id=${product.id} >Read  <i class="fas fa-book-reader"></i></button><br>
//             <button class="add-button">Add To My Library  <i class="fas fa-plus-square"></i></button>
//             </div>
//     </article>
//         `;
//     }); 
//     productDom.innerHTML = result;
// }

// document.addEventListener("DOMContentLoaded", function()
//  {
//     const ui = new UI();
//     const products = new Products();
//     // const storage = new Storage();
//     // // get all Products
//     products.getProducts().then(function(products) {
//         ui.displayProducts(products);
//         // storage.saveProducts(products);
  
//     })
//     // then( () => {
//     //     ui.getButtons();
//     // });
    
// } )
