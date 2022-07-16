import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import { UserP } from "../../Redux/Interfaces/User";
// import { getSession } from "next-auth/react";

export const getUser = async (name: string) => {
  const cookie = Cookies.get(name);
  if (cookie) {
    const data = await JSON.stringify(cookie);
    const user = await jwt_decode<UserP>(data);
    return user;
  }
};

export const getUser_server = async (token: string, session: string) => {
  if (!token) {
    return session;
  }
  const data = await JSON.stringify(token);
  const user = await jwt_decode(data);
  return user;
};

// export default async (router) => {
//   Cookies.remove("refreshToken");
//   Cookies.remove("accessToken");
//   router.reload();
// };
