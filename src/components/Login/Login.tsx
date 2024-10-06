import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { login } from "../../utils/apiClient";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    if (username.trim() === "") {
      alert("Username is required");
      return;
    } else if (password.trim() === "") {
      alert("Password is required");
      return;
    } else {
      try {
        setLoading(true);
        const response = await login(username, password);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Username
          </Form.Label>
          <Col sm="10">
            <Form.Control
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
        </Form.Group>
        {loading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-grow text-primary" role="status"></div>
            <div className="spinner-grow text-secondary" role="status"></div>
            <div className="spinner-grow text-success" role="status"></div>
            <div className="spinner-grow text-danger" role="status"></div>
            <div className="spinner-grow text-warning" role="status"></div>
            <div className="spinner-grow text-info" role="status"></div>
            <div className="spinner-grow text-light" role="status"></div>
            <div className="spinner-grow text-dark" role="status"></div>
          </div>
        ) : (
          <div className="d-flex justify-content-center">
            <Button variant="primary" onClick={handleLogin}>
              Login
            </Button>
          </div>
        )}
      </Form>
    </Container>
  );
};

export default Login;
