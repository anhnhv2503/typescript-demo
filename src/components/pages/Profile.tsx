import { useDocumentTitle } from "@uidotdev/usehooks";
import React, { useEffect, useState } from "react";
import { getProfile } from "../../utils/apiClient";
import { Card, ListGroup, Row, Col } from "react-bootstrap";
import { ProfileType } from "./data/ProfileData";

const Profile: React.FC = () => {
  useDocumentTitle("Profile");

  const [profile, setProfile] = useState<ProfileType>({});

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await getProfile();
        setProfile(response);
      } catch (error) {
        console.log(error);
      }
    };
    getInfo();
  }, []);

  const { username, firstName, lastName, dob, email, roles } = profile;

  return (
    <Row className="justify-content-center">
      <Col xs={12} md={6}>
        <Card className="mt-5">
          <Card.Header as="h5">Profile</Card.Header>
          <Card.Body>
            <Card.Title>
              {firstName} {lastName}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              @{username}
            </Card.Subtitle>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Date of Birth:</strong>{" "}
                {new Date(dob).toLocaleDateString()}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Email:</strong> {email}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Roles:</strong> {roles}
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Profile;
