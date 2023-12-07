let main = document.querySelector('main');

// Load existing items from local storage or initialize an empty array
let cart = JSON.parse(localStorage.getItem('product')) || [];


main.innerHTML = cart.map(function(item, index) {
    return `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">image</th>
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
                    <td><input type='number'></td>
                    <td><input type='number'></td>
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