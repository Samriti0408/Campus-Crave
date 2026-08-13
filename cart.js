// ===============================
// Campus Crave Cart System
// ===============================

// Get cart from Local Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save cart
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Add Item to Cart
function addToCart(name, price) {

    let item = cart.find(food => food.name === name);

    if (item) {
        item.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    saveCart();

    alert(name + " added to cart!");
}

// Display Cart
function displayCart() {

    let table = document.getElementById("cartTable");

    if (!table) return;

    table.innerHTML = "";

    let grandTotal = 0;

    cart.forEach((item, index) => {

        let total = item.price * item.quantity;

        grandTotal += total;

        table.innerHTML += `

<tr>

<td>${item.name}</td>

<td>₹${item.price}</td>

<td>

<button onclick="decreaseQuantity(${index})">-</button>

${item.quantity}

<button onclick="increaseQuantity(${index})">+</button>

</td>

<td>₹${total}</td>

<td>

<button onclick="removeItem(${index})">

Remove

</button>

</td>

</tr>

`;

    });

    document.getElementById("grandTotal").innerHTML = grandTotal;

}

// Increase Quantity
function increaseQuantity(index){

    cart[index].quantity++;

    saveCart();

    displayCart();

}

// Decrease Quantity
function decreaseQuantity(index){

    if(cart[index].quantity>1){

        cart[index].quantity--;

    }else{

        cart.splice(index,1);

    }

    saveCart();

    displayCart();

}

// Remove Item
function removeItem(index){

    cart.splice(index,1);

    saveCart();

    displayCart();

}

// Clear Cart
function clearCart(){

    if(confirm("Clear entire cart?")){

        cart=[];

        saveCart();

        displayCart();

    }

}

// Place Order
function placeOrder(){

    if(cart.length==0){

        alert("Your cart is empty!");

        return;

    }
    function placeOrder(){

    let name=document.getElementById("name").value;
    let roll=document.getElementById("roll").value;
    let block=document.getElementById("block").value;
    let room=document.getElementById("room").value;
    let phone=document.getElementById("phone").value;
    let address=document.getElementById("address").value;
    let time=document.getElementById("time").value;
    let note=document.getElementById("note").value;

    let payment=document.querySelector('input[name="payment"]:checked');

    if(name=="" || roll=="" || block=="" || room=="" || phone=="" || address=="" || payment==null){
        alert("Please fill all the required details.");
        return;
    }

    alert(
        "🎉 Order Placed Successfully!\n\n"+
        "Name : "+name+
        "\nRoll No : "+roll+
        "\nBlock : "+block+
        "\nRoom : "+room+
        "\nPhone : "+phone+
        "\nPayment : "+payment.value+
        "\nDelivery Time : "+time+
        "\n\nThank you for ordering from Campus Crave!"
    );
}

    cart=[];

    saveCart();

    displayCart();

    window.location.href="index.html";

}

// Load Cart Automatically
displayCart();
