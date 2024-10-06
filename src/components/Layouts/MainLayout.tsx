import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar";
import "./index.css";

const MainLayout: React.FC = () => {
  return (
    <Container fluid className="main-layout">
      <Row className="h-100">
        <Col xs={1} className="sidebar-column p-0">
          <SideBar />
        </Col>
        <Col xs={11} className="main-content p-3">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
