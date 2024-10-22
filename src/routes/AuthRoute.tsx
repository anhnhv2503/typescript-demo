import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  const token = Cookies.get("token");
  if (token) {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
};

export default AuthRoute;
