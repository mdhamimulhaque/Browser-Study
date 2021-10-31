const themeSelector = document.getElementById("themeSelector");
const body = document.querySelector("body");

themeSelector.addEventListener("change",(e)=>{
    handleThemeColor(e.target.value); //----->>> function for color changing logic
    window.localStorage.setItem("theme",e.target.value);
})


const handleThemeColor = (theme) =>{
    if(theme === "dark"){
        body.style.backgroundColor = "#2B2A30";
    }else if(theme === "light"){
        body.style.backgroundColor = "#DCDCDD";
    }else if(theme === "darkslategray"){
        body.style.backgroundColor = "#2f4f4f";
    }else{
        body.style.backgroundColor = "#fff";
    }
}

//=======>>> Event call on local storage <<<=======

window.addEventListener("storage",(e)=>{
   //console.log(e) 
   //----->>> when we change theme that time we can't see this event call inside console.log in current Tab/Window.
   //----->>> at the same time, if we open another Tab/Window and check console.log , we can see event called. This console.log show us, which theme we change last time (oldValue) & which theme is current theme (newValue).
  
   //---->>> (for safety perpas use condition). So that,it event doesn't run when our work doing
   if(e.key === "theme"){  
      handleThemeColor(e.newValue) //----->>> this theme is came from newValue which is stored at local storage....
   }
})


//================== set theme from get local storage.so that, after refresh value doesn't change.
//---->>> Here 'theme' is key name,which is came from local storage.
const themeKey = localStorage.getItem("theme"); 
handleThemeColor(themeKey);



//===================================================================================
//===========================>>>>  error handling <<<<===============================
//===================================================================================

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        let x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness

    console.log('Yeppe!! working.');
  }
  else {
    // Too bad, no localStorage for us
    console.log('OOPS!! Not working.');
  }