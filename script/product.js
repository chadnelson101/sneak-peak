document.addEventListener("DOMContentLoaded", function() {
    let menuToggle = document.querySelector('.menuToggle');
    let sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        sidebar.classList.toggle('active');
    });
});

let product = []
let main = document.querySelector('main');

let items = JSON.parse(localStorage.getItem('products'));

main.innerHTML = items.map(function(item, index) {
    return`
    <div class="card">
         <div class="image">
            <img class='move'src="${item.url}">
        </div>
        <div class="title">${item.name}</div>
        <div class="price">R${item.price}</div>
        <button  id='add' data-cart value='${index}'><span>Add to cart</span></button>
    </div>`
}).join('');


function addToCart(index) {
    product.push(items[index]);
    localStorage.setItem('product',JSON.stringify(product));
}

// add to cart function for button
main.addEventListener('click',function(event) {
    if(event.target.hasAttribute('data-cart')){
        // alert('button clicked')
        addToCart(event.target.value)
    }
})