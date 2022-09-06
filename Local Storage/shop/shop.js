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
}

// ---> display product
const showProducts = (productName, productPrice) => {
    const itemsWrapper = document.getElementById('items_wrapper');
    const li = document.createElement('li');
    li.innerText = `${productName} : ${productPrice}`;
    itemsWrapper.appendChild(li);
}
