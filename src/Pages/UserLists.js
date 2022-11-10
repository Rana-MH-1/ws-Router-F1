import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserLists = ({ Persons }) => {
  return (
    <div>
      {Persons.map((user) => (
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>           
            <Card.Link as={Link} to={`/Profile/${user.id}`}>GO TO MY PROFILE</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default UserLists;
