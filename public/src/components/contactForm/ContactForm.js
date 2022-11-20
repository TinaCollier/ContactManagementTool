import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
        <Form onSubmit={ handleSubmit }>
          <FormGroup>
            <Label>
              Name:
              <Input 
              type="text" 
              name="name" 
              value={ name } 
              onChange={ e => setName( e.target.value ) } 
              placeholder="Clark Kent" 
              required />
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              Phone: 
              <Input 
              type="text" 
              name="phone" 
              value={ phone } 
              onChange={ e => setPhone( e.target.value ) } 
              placeholder="(999) 999-999" 
              required />
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              Email:
              <input 
              type="email" 
              name="email" 
              value={ email } 
              onChange={ e => setEmail( e.target.value ) } 
              placeholder="clark.kent@krypton.com" 
              required />
            </Label>
          </FormGroup>
          <Button type="submit">Add Contact</Button> 
        </Form>
  );
};
