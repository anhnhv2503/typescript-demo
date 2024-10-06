import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout } from "../../utils/apiClient";

const Logout = () => {
  const nav = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await logout();
      if (response) {
        localStorage.removeItem("token");
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
