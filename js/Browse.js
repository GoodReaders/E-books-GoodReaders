let productDom = document.querySelector(".books");

function Products() {
}

Products.prototype.getProducts = async () => {
    try {
        let result = await fetch("../../books.json");
        let data = await result.json();
        let products = data.books;
        products = products[0]['self-help'];
        products = products.map( book => {
            const img = book['img-url'];
            const name = book.name;
            const author = book.author;
            const price = book.price;
            const publishedDate = book['published-date']
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
    // display product
    function UI() {
    
    }


UI.prototype.displayProducts = function(products) {
    let result = "";
    products.forEach( product => {
        result += `
        <article class="one-book">
        <div class="flip-card">
        <div class="flip-card-inner">
        <div class="flip-card-front">
        <img src=${product.img}
        alt="Avatar" >
        </div>
        <div class="flip-card-back">
        <p>
        ${product.intro} 
        </p> 
        </div>
        </div>
        </div>
        <div class="book-Info">
        <h6>${product.name}</h6>
        <h6>By ${product.author}</h6>
        <h6>${product.price}</h6>
        <h6>${product.publishedDate}</h6>
        <button class="contains-pdf">
        <a href=${product.pdf} class="button">Read as soft copy <i
        class="fas fa-book-reader"></i></a>
        </button>
        <button class="add-button">Add To My Library</button>
        </div>
        </article>
        `;
    }); 

    productDom.innerHTML = result;
}

document.addEventListener("DOMContentLoaded", function()
{
    const ui = new UI();
    const products = new Products();
    // const storage = new Storage();
    // // get all Products
    products.getProducts().then(function(products) {
        ui.displayProducts(products);
        // storage.saveProducts(products);
  
    // })
    // then( () => {
    //     ui.getButtons();
    });
     
} );
