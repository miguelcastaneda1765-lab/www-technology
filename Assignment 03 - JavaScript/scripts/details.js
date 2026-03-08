let params = new URLSearchParams(document.location.search);
let productId = params.get("id");

console.log(productId);
const url = `https://fakestoreapi.com/products/${productId}`;
let product = null

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        product = data;

        //Insert data
        document.getElementById("productImage").src = data.image;
        document.getElementById("productTitle").textContent = data.title;
        document.getElementById("productDescription").textContent = data.description;
        document.getElementById("productPrice").textContent = `Price: $${data.price}`;
    });

document.getElementById("addtoCartBtn").addEventListener("click", () => {
    const qty = document.getElementById("quantity").value;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // TODO:
    // create a JSON object representing the product
    // add id, title, price, qty
    let item = {
        id: product.id,
        title: product.title,
        price: product.price,
        qty: Number(qty)
    }

    // TODO:
    // push the item into the cart array
    cart.push(item)

    // TODO:
    // save the cart into local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    // TODO:
    // notify the user of successful operation using an alert
    alert(`The product ${product.title} has been added to the cart!`)
});