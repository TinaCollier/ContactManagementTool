import React, { useEffect, useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
  Card,
  CardHeader
} from 'reactstrap';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const [ targetContact, setTargetContact ] = useState({})
  const handleclick = e => {

    console.log('what do you wnt to do?')
  }

  useEffect( () => {
    setThisContact();
  }, [contact])
  const getTodayString = () => {
    const [month, day, year] = new Date() 
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  
  const setThisContact = e => {
    const person = contacts.find( person => person.email === contact );
    console.log('person', person)
    setTargetContact( person );
  }
  console.log("traget", targetContact)
  return (
    <Card>
      <CardHeader>
        Schedule new appointment with { targetContact.name }
      </CardHeader>
      <Form>
        <Row>
          <Col md={ 6 }>
            <FormGroup>
              <Label>
                Name: { contact }
              </Label>
              <Input />
              <Button onClick={ handleclick }>clickme</Button>
            </FormGroup>
          </Col>
          <Col md={ 6 }>
            <FormGroup>
              <Label for="exampleDate">
                Date
              </Label>
              <Input
                id="exampleDate"
                name="date"
                placeholder="date placeholder"
                type="date"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={ 6 }>
            <FormGroup>
              <Label>
                Name: { contact }
              </Label>
              <Input />
              <Button onClick={ handleclick }>clickme</Button>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="exampleTime">
                Time
              </Label>
              <Input
                id="exampleTime"
                name="time"
                placeholder="time placeholder"
                type="time"
              />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};
