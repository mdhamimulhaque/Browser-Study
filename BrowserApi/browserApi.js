// ! ===== browser api doesn't work without html file

//*========= alert ==========
const alertFun = () => {
    alert("hii...")
}

//*========= confirm ==========
// ---> alert returns truthy or false value
const confirmFun = () => {
    const res = confirm();
    console.log(res)
}

//*========= prompt ==========
const promptFun = () => {
    const res2 = prompt()
    console.log(res2)
}


//! ====== fetch also one kind of browser api =====