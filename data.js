// Define a constructor function for product objects
function Product(title, price, description, image) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
}

const productArray = [];

// Fetch data from the Fake Store API and create product objects
fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
        // Create product objects and push them to the array
        data.slice(0, 20).forEach((productData) => {
            const product = new Product(
                productData.title,
                productData.price,
                productData.description,
                productData.image
            );
            productArray.push(product);
        });

        // Render product cards in the main section
        renderProducts(productArray);
    })
    .catch((error) => console.error("Error fetching data:", error));

// Function to render product cards in the main section
function renderProducts(products) {
    const main = document.querySelector(".bbs");

    products.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        const productTitle = document.createElement("h2");
        productTitle.textContent = product.title;

        const productPrice = document.createElement("p");
        productPrice.textContent = `Price: $${product.price.toFixed(2)}`;

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;

        const productImage = document.createElement("img");
        productImage.setAttribute("src", product.image);
        productImage.setAttribute("alt", product.title);

        card.appendChild(productTitle);
        card.appendChild(productPrice);
        card.appendChild(productDescription);
        card.appendChild(productImage);

        main.appendChild(card);
    });
}
