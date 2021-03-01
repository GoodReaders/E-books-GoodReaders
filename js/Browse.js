let productDom = document.querySelectorAll(".books");
console.log(productDom);
let categoriesArr=["self-help", "novel", "short-stories", "cookbooks", "fitness", "poetry", "science", "art"];

function Products() {
}

Products.prototype.getProducts = async (category) => {
    try {
        let result = await fetch("../books.json");
        let data = await result.json();
        let products = data.books;
        console.log(products[0][category]);
        products = products[0][category];
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
        //console.log(products);
        return products;
    } catch (error) {
        console.log(error)
    }
}
    // display product
    function UI() {
    
    }


UI.prototype.displayProducts = function(products,i) {
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
        ${product.intr} 
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

    productDom[i].innerHTML = result;
}

document.addEventListener("DOMContentLoaded", function()
{
    const ui = new UI();
    const products = new Products();
    // const storage = new Storage();
    // // get all Products
    for (let i = 0; i < categoriesArr.length; i++) {
        
        products.getProducts(categoriesArr[i]).then(function(products) {
            ui.displayProducts(products,i);
            // storage.saveProducts(products);
        
        })
    }


  
    // then( () => {
    //     ui.getButtons();
    // });
    
} )

// let readPDF = document.getElementsByClassName("contains-pdf")
// let openBook
// readPDF.addEventListener("click", onclick);

// function onclick(event){
//     event.perventDefault();
//     openBook = Product.getProducts.pdf;

// }