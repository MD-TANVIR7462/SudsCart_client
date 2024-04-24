import { AuthKey } from "./AuthKey/AuthKey"
import { accessTokenDecode } from "./JwtDecode"
import { setLocalstorage } from "./SetDataLocalstorage"




export const storeUserInfoinLocalStorage = (token:string) =>{
return  setLocalstorage(AuthKey, token)
}

export const getAccessTokenFormlocalStorage = () =>{
const authToken = localStorage.getItem(AuthKey)
if(authToken){
   const userInfo = accessTokenDecode(authToken)
   return userInfo
}
}