const getInputValueById = id =>{
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    inputField.value = '';
    return inputFieldValue;
};

const productAdd = () =>{
    const product = getInputValueById('product-name-field');
    const quantity = getInputValueById('product-quantity-field');
    // console.log(product, quantity);
    displayProduct(product, quantity)

    // localStorage.setItem(product, quantity);
    saveToLocalStorage(product, quantity);
};

const getShopingCartFromLocatStorage = () =>{
    let saveCart = localStorage.getItem('cart');
    let cart = {};

    if(saveCart){
        cart = JSON.parse(saveCart);
    }
    return cart;
};

const saveToLocalStorage = (product, quantity) => {
    const cart = getShopingCartFromLocatStorage();
    cart[product] = quantity;
    cartStiringified = JSON.stringify(cart);

    localStorage.setItem('cart', cartStiringified);
};

const displayProduct = (product, quantity) =>{
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;

    productContainer.appendChild(li);
};