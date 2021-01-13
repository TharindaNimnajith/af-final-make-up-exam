import {authStoreKey} from "../configs/config";

const isEmpty = (value) => {
  if (value === "" || value === null || value === undefined || value === "null" || value === "undefined") {
    return true;
  } else {
    return false;
  }
}

const dateToString = (value, format = "dd-mm-YY") => {
  const dateObj = new Date(value);

  switch (format) {
    case "dd-mm-YY":
      return `${dateObj.getDate().toString().padStart(2, "0")}-${(dateObj.getMonth() + 1).toString().padStart(2, "0")}-${dateObj.getFullYear().toString()}`;

    default:
      return value;
  }
}

// Local storage helper methods

const setLocalStorageItem = (key, obj) => {
  try {
    localStorage.setItem(key, JSON.stringify(obj));
    return true;
  } catch (e) {
    return false;
  }
}

const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (ex) {
    return false;
  }
}

const getFromLocalStorage = (key) => {
  try {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  } catch (ex) {
    return false;
  }
}

const checkUserInLocalStorage = () => {
  try {
    const data = getFromLocalStorage(authStoreKey);

    if (data) {
      return {status: true, result: data}
    } else {
      return {status: false}
    }
  } catch (ex) {
    return {status: false}
  }
}


export {
  isEmpty,
  setLocalStorageItem,
  dateToString,
  removeFromLocalStorage,
  checkUserInLocalStorage,
  getFromLocalStorage
}
