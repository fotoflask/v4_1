import axios from "axios";
import { useCookies } from "react-cookie";

const verifySession = async (cookies, removeCookie, navigate) => {
  if (!cookies.jwt) {
    navigate("/login");
    return false;
  } else {
    try {
      const { data } = await axios.post("http://localhost:4000", {}, {
        withCredentials: true,
      });

      if (!data.status) {
        removeCookie("jwt");
        navigate("/login");
        return false;
      } else {
        return true;
      }
    } catch (ex) {
      console.log(ex);
      return false;
    }
  }
};

export default verifySession;
