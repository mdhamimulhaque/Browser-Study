const wrapper = document.getElementById('products_wrapper');

// ---->  input value collector
const getInputValue = (id) => {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    inputField.value = '';
    return inputFieldValue;
}

// ---> add product items
const addProduct = () => {
    const productName = getInputValue('product_name');
    const productPrice = getInputValue('product_price');
    showProducts(productName, productPrice)

    //! --->save local storage ---
    set_LocalStorageData(productName, productPrice)
}

// !==========> get data from local storage ===========
const get_LocalStorageData = () => {
    let data = localStorage.getItem('cart');
    let cart = {};
    if (data) {
        cart = JSON.parse(data)
    }
    return cart;
}
// !==========> set data from local storage ===========
const set_LocalStorageData = (productName, productPrice) => {
    const cart = get_LocalStorageData();
    //  ---> add product to the object as property
    cart[productName] = productPrice;
    const cartStringify = JSON.stringify(cart)
    // --->set data to local storage
    localStorage.setItem('cart', cartStringify)
}

// ---> show product ui
const showProducts = (productName, productPrice) => {
    const itemsWrapper = document.getElementById('items_wrapper');
    const li = document.createElement('li');
    li.innerText = `${productName} : ${productPrice}`;
    itemsWrapper.appendChild(li);
}


//! ==========> show product data(value) from local storage <==========

const transferDataFromLocalStorage = () => {
    const cart = get_LocalStorageData();
    for (const product in cart) {
        const price = cart[product];
        showProducts(product, price)
    }
}

transferDataFromLocalStorage()