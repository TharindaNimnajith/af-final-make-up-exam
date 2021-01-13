const apiBaseUrl = "http://localhost:5000/";
const authStoreKey = "@bookStore";

// APIs
const userAPI = `${apiBaseUrl}api/users`;
const authAPI = `${apiBaseUrl}api/auth`;
const bookAPI = `${apiBaseUrl}api/books`;
const fileGetAPI = `${apiBaseUrl}public/uploads`;


export {
  apiBaseUrl,
  userAPI,
  authAPI,
  authStoreKey,
  bookAPI,
  fileGetAPI
}
