import React from "react";
import { 
  Card, 
  CardHeader, 
  CardBody,
  ListGroup,
  ListGroupItem,
  Button 
} from 'reactstrap';

export const Tile = ({ name, phone, email }) => {

  return (
    <Card     
    className="my-2"
    color="secondary"
    outline
    style={{
      width: '18rem'
    }}>
      <CardHeader>
        Name: { name }
      </CardHeader>
      <CardBody>
        <ListGroup>
          <ListGroupItem>
          Phone: { phone }
        </ListGroupItem>
        <ListGroupItem>
          Email: { email }
        </ListGroupItem>
        <ListGroupItem>
          List appointment dates here
        </ListGroupItem>
        </ListGroup>
        <Button>Set Up Appointment</Button>
      </CardBody>
    </Card>
  );
};
