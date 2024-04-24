import { jwtDecode } from "jwt-decode";
export const accessTokenDecode = (token: string)=>{
return jwtDecode(token);
}