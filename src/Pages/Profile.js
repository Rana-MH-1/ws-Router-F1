import React from "react";
import { Button, Card } from "react-bootstrap";
import { useParams,useNavigate } from "react-router-dom";

const Profile = ({ Persons }) => {
  const navigate = useNavigate()
  const { iddUser } = useParams();
  const found = Persons.find((user) => user.id === +iddUser);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title> {found.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{found.age}</Card.Subtitle>
          <Card.Text>{found.Adresse}</Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
          <Button onClick={()=> navigate('/')}>GO To Home</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
