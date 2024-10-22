import Cookies from "js-cookie";
import { Button } from "react-bootstrap";
import { refreshToken } from "../../utils/apiClient";

const Refresh = () => {
  const handleRefresh = async () => {
    const token = Cookies.get("token");
    try {
      const response = await refreshToken(token);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button onClick={handleRefresh}>Refresh</Button>
    </div>
  );
};

export default Refresh;
