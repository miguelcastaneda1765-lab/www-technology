let cart = JSON.parse(localStorage.getItem("cart")) || [];

const table = document.getElementById("cartTable");

cart.forEach((item, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${item.title}</td>
        <td>$${item.price}</td>
        <td><input type="number" min="1" value="${item.qty}" data-index="${index}"></td>
        <td>${item.price * item.qty}</td>
        <td><button data-index="${index}">Remove</td>
    `;

    table.appendChild(row);
})

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", event => {

        const index = event.target.dataset.index;

        cart.splice(index, 1);

        localStorage.setItem("cart", JSON.stringify(cart));

        location.reload();

    });

});

document.querySelectorAll("input[type='number']").forEach(input => {

    input.addEventListener("change", event => {

        const index = event.target.dataset.index;

        const newQty = Number(event.target.value);

        cart[index].qty = newQty;

        localStorage.setItem("cart", JSON.stringify(cart));

        location.reload();

    });

});

//Total
const total = cart.reduce((suma, item) => {
    return suma + item.price * item.qty;
}, 0);

const totalElement = document.getElementById("total");
totalElement.textContent = `Total: $${total.toFixed(2)}`;