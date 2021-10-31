//================================================================================================
// ================================== check local storage data =================================
//================================================================================================
// console.log("check local storage data :",window.localStorage);

// ================------->>> setItem() <<<------is used to STORE_VALUE in local storage.
// 1) local storage work only with " String "
// 2) "Key & Value" must be needed & both values must be in string format.
// 3) window add or not it will be work.Because it's global.
// example:
window.localStorage.setItem("brother","Tamal");
localStorage.setItem("font","bold");

// ================------->>> removeItem() <<<------is used to REMOVE_VALUE from local storage.
window.localStorage.removeItem("font");

// ================------->>> clear() <<<------is used to REMOVE_ALL_VALUE from local storage.
// window.localStorage.clear();

// ================------->>> getItem() <<<------is used to READ_VALUE from local storage.
const brother = window.localStorage.getItem("brother"); //---- here 'brother' is key name
console.log("Read value from local storage :", brother);

//================================================================================================
// ==================================[ For object or Complex data ]===============================
//================================================================================================

// ================------->>> STORE_OBJECT_VALUE in local storage <<<------=======================

const studentInfo = {
      name : "Md Hamimul Haque",
      country: "Bangladesh",
      age : 22
}
// localStorage.setItem("info","studentInfo"); //----- xxx ------

// Note      : if we use this we can't get value,because it is an Object but we can store only String value.
// solution  : we need to use ------->>> JSON.stringify() <<<------to convert this value (Object to String).
//           1) convert object to string.
//           2) now store data in local storage.

const information = JSON.stringify(studentInfo);
// console.log("Type check after convert object to string :", typeof(information));
// console.log("Object information read after convert object to string :",information);
window.localStorage.setItem("StudentInfo",information) //---- store object data local storage

// ================------->>> READ_OBJECT_VALUE from local storage <<<------=======================
const info = window.localStorage.getItem("StudentInfo");
// console.log(info.name)  //----- xxx ------

// Note      : we can't read value.because, if we check this <<<--- typeOf --->>> we will see this is string.
// solution  : we need to use ------->>> JSON.parse() <<<------to convert this value (String to Object).
//           1) convert string to object.
//           2) now read data from local storage.
const infoConvertObject = JSON.parse(info);
console.log("Read  object value from local storage :",infoConvertObject);
console.log("Read  object value from local storage :",infoConvertObject.name);