// ====> value collector (common function)
const inputValueCollector = (id) => {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    inputField.value = '';
    return inputFieldValue;
}

// !=====> set data to localStorage ======
const setLocalStorageData = (v) => {
    localStorage.setItem('name', v)
}
const setLocalStorageDataEmail = (v) => {
    localStorage.setItem('email', v)
}
const setLocalStorageDataTextComment = (v) => {
    localStorage.setItem('comments', v)
}



// name field
const nameSubmit = () => {
    const nameValue = inputValueCollector('name');
    setLocalStorageData(nameValue)
}
// email
const emailSubmit = () => {
    const emailValue = inputValueCollector('email');
    setLocalStorageDataEmail(emailValue)
}
//  textarea
const textSubmit = () => {
    const textValue = inputValueCollector('comment');
    setLocalStorageDataTextComment(textValue)
}



// !===> delete items
const deleteName = () => {
    localStorage.removeItem('name')
}
const deleteEmail = () => {
    localStorage.removeItem('email')
}
const deleteComment = () => {
    localStorage.removeItem('comments')
}

// =========== all values Together =============
// =============================================
// ---> get value from localStorage
const getLocalStorageValue = () => {
    let data = localStorage.getItem('info');
    let info = [];
    if (data) {
        info = JSON.parse(data)
    }
    return info;
}
// ---> collect all values together
const allValue = () => {
    let nameV = inputValueCollector('name');
    let emailV = inputValueCollector('email');
    let commentV = inputValueCollector('comment');

    saveAllValue(nameV, emailV, commentV)
}

// ---> set all values
const saveAllValue = (x, y, z) => {
    const info = getLocalStorageValue()
    const obj = {}
    obj.name = x;
    obj.email = y;
    obj.comment = z;
    info.push(obj)
    const infoStringify = JSON.stringify(info)
    localStorage.setItem('info', infoStringify)
}


//---> reset all
const resetValue = () => {
    localStorage.removeItem('info')
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    localStorage.removeItem('comment')
}