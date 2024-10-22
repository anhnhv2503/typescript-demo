import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout } from "../../utils/apiClient";
import Cookies from "js-cookie";

const Logout = () => {
  const nav = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await logout();
      if (response) {
        Cookies.remove("token");
        nav("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button variant="danger" type="submit" onClick={handleLogout}>
        Logout
      </Button>
    </>
  );
};

export default Logout;
