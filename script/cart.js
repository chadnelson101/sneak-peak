let main = document.querySelector('main');

// Load existing items from local storage or initialize an empty array
let cart = JSON.parse(localStorage.getItem('product')) || [];

// Assuming you have a function to handle the purchase and updates the cart
// This is just a simplified example; replace it with your actual logic
function purchaseProduct(index) {
    cart[index].quantity += 1;
    updateLocalStorage();
    inputDisplay(cart[index]);
}

// Function to display quantity and total for a product
function inputDisplay(product) {
    let quantityInput = document.getElementById(`quantity-amount${index}`);
    let totalInput = document.getElementById(`total-amount${index}`);

    // Calculate total for the current product
    let productTotal = product.price * product.quantity;

    // Display quantity and total in their respective inputs
    quantityInput.value = quantity-amount;
    totalInput.value.innerHTML = productTotal;

    // You can update other parts of your UI as needed
}

main.innerHTML = cart.map(function(item, index) {
    return `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><button class='remove-btn' data-index='${index}'>Remove</button></td>
                    <td> <img src="${item.url}"></td>
                    <td>${item.name}</td>
                    <td>R${item.price}</td>
                    <td><input type='number' id='quantity-amount${index}'></td>
                    <td><input type='number' id='total-amount${index}'></td>
                </tr>
            </tbody>
        </table>`;
}).join('');

// Add event listeners to the Remove buttons
document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', function() {
        let indexToRemove = this.getAttribute('data-index');
        cart.splice(indexToRemove, 1);
        updateLocalStorage();
        location.reload(); // Refresh the page to reflect the changes
    });
});

function updateLocalStorage() {
    localStorage.setItem('product', JSON.stringify(cart));
}