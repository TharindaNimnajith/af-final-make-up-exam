import {authStoreKey} from '../configs/config'

const setLocalStorageItem = (key, obj) => {
  try {
    localStorage.setItem(key, JSON.stringify(obj))
    return true
  } catch (e) {
    return false
  }
}

const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key)
    return true
  } catch (ex) {
    return false
  }
}

const getFromLocalStorage = (key) => {
  try {
    const data = localStorage.getItem(key)
    return JSON.parse(data)
  } catch (ex) {
    return false
  }
}

const checkUserInLocalStorage = () => {
  try {
    const data = getFromLocalStorage(authStoreKey)
    if (data)
      return {status: true, result: data}
    else
      return {status: false}
  } catch (ex) {
    return {status: false}
  }
}

export {
  setLocalStorageItem,
  removeFromLocalStorage,
  checkUserInLocalStorage,
  getFromLocalStorage
}
