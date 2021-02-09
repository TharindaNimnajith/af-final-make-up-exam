import {authStoreKey} from '../config/main.config'

const setLocalStorageItem = (key, obj) => {
  try {
    localStorage.setItem(key, JSON.stringify(obj))
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

const removeFromLocalStorage = key => {
  try {
    localStorage.removeItem(key)
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

const getFromLocalStorage = key => {
  try {
    const data = localStorage.getItem(key)
    return JSON.parse(data)
  } catch (error) {
    console.error(error)
    return false
  }
}

const checkUserInLocalStorage = () => {
  try {
    const data = getFromLocalStorage(authStoreKey)
    if (data) {
      return {
        status: true,
        result: data
      }
    } else {
      return {
        status: false
      }
    }
  } catch (error) {
    console.error(error)
    return {
      status: false
    }
  }
}

export {
  setLocalStorageItem,
  removeFromLocalStorage,
  checkUserInLocalStorage,
  getFromLocalStorage
}
