let cart = []

function addToCart(productName) {
    cart.push(productName)
    // if you right click on the page + choose inspect -> console you can see the logs!!!!
    console.log("added " + productName + " to cart")
    let cartlist = document.getElementById("cartUl")
    const newProduct = document.createElement("li")
    newProduct.textContent = productName
    cartlist.appendChild(newProduct)
}

function clearCart() {
    cart = []
}