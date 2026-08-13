// ==========================
// Campus Crave JavaScript
// ==========================

let cart = [];
let total = 0;

// Add Item to Cart
function addToCart(itemName, price) {

    cart.push({
        name: itemName,
        price: price
    });

    total += price;

    displayCart();
}

// Display Cart
function displayCart() {

    const cartItems = document.getElementById("cartItems");
    const totalAmount = document.getElementById("total");

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {

        let li = document.createElement("li");

        li.innerHTML = `
            ${item.name} - ₹${item.price}
            <button onclick="removeItem(${index})"
            style="
                float:right;
                background:red;
                color:white;
                border:none;
                padding:5px 10px;
                border-radius:5px;
                cursor:pointer;
            ">
            Remove
            </button>
        `;

        cartItems.appendChild(li);

    });

    totalAmount.innerText = total;
}

// Remove Item
function removeItem(index){

    total -= cart[index].price;

    cart.splice(index,1);

    displayCart();
}

// Search Food
const search = document.getElementById("search");

search.addEventListener("keyup", function(){

    let value = search.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        let title = card.querySelector("h3").innerText.toLowerCase();

        if(title.includes(value)){
            card.style.display="block";
        }
        else{
            card.style.display="none";
        }

    });

});

// Place Order
function placeOrder(){

    if(cart.length===0){

        alert("🛒 Your cart is empty!");

        return;
    }

    alert(
`🎉 Order Placed Successfully!

Thank you for ordering from Campus Crave.

Total Amount : ₹${total}

Your food will be ready in 10-15 minutes.

Enjoy your meal! 🍕`
    );

    cart=[];

    total=0;

    displayCart();

}

// Cart Button Scroll
document.getElementById("cartBtn").addEventListener("click",function(){

    document.querySelector(".cart").scrollIntoView({

        behavior:"smooth"

    });

});