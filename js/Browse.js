let productDom = document.querySelector(".books");
console.log(productDom);

function Products() {
}

Products.prototype.getandRenderProducts = async () => {
    try {
        let result = await fetch("../../books.json");
        let data = await result.json();
        let products = data.books;
        let categoriesArr=["self-help", "cookbooks", "poetry", "fitness", "Novel", "shortStories", "science", "Art"];
        // let mytest = products[0];
        // console.log(categoriesArr[1]);
        let Allproducts = [];
        let Allnewproducts =[];
        for (let i =0;i<categoriesArr.length;i++) {
            Allproducts = products[0][categoriesArr[i]];
                Allnewproducts = Allproducts.map( book => {
                const img = book['img-url'];
                const name = book.name;
                const author = book.author;
                const price = book.price;
                const publishedDate = book['published-date']
                const pdf = book['book-url'];
                const intro = book.introduction;
                return {img,name,author,price,publishedDate,pdf,intro};
             
                
            })
            console.log(Allnewproducts)
            let result = "";
            Allnewproducts.forEach( product => {
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
                
            }
                )
                // let newheading = document.createElement('h2');
                // productDom.appendChild(newheading);
                // newheading.innerHTML = categoriesArr[i];
                result = result + `<h2> ${categoriesArr[i]} <h2> `;
                result+=`<div><div>`
                console.log(result);
                productDom.innerHTML+= result;

        }

    } catch (error) {
        console.log(error)
    }
}



document.addEventListener("DOMContentLoaded", function()
{
    const products = new Products();
    products.getandRenderProducts();
    // .then(function(products) {
        // storage.saveProducts(products);
  
    // })
    // then( () => {
    //     ui.getButtons();
    // });
     
} );
