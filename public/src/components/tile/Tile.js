import React from "react";
import { 
  Card, 
  CardHeader, 
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  FormText
} from 'reactstrap';

export const Tile = ({ name, phone, email, appointments }) => {
  // const listAppointments = appointments.map( appointment => {
  //   return (
  //     <li key={ Math.random() }>Appointment</li>
  //   )
  // })

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
          {/* { appointments.length < 1 ? <FormText>No Appointments</FormText> : <ul>{ listAppointments() }</ul> } */}
          { console.log( 'appt', appointments)}
        </ListGroupItem>
        </ListGroup>
        <Button>Set Up Appointment</Button>
      </CardBody>
    </Card>
  );
};
