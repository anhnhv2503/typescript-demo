import { useState } from "react";
import { Button, Nav, Offcanvas } from "react-bootstrap";
import Logout from "../Logout/Logout";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const [show, setShow] = useState<boolean>(false);
  const nav = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="mx-3 my-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </Button>

      <Offcanvas show={show} onHide={handleClose} className="bg-light">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link
              onClick={() => {
                nav("/home");
                handleClose();
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                nav("/profile");
                handleClose();
              }}
            >
              Profile
            </Nav.Link>
            <Logout />
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SideBar;
