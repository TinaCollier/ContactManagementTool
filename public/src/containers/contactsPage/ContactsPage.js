import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { ContactPicker } from "../../components/contactPicker/ContactPicker";
import { ContactsSearch } from "../../components/contactsSearch/ContactsSearch"
import { 
  Card,
  CardHeader, 
  CardBody, 
  CardTitle, 
  Button, 
  CardFooter, 
  Row, 
  Col ,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
export const ContactsPage = ({ contacts, setContacts }) => {
  
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [ name, setName ] = useState( '' );
  const [ phone, setPhone ] = useState( '' );
  const [ email, setEmail ] = useState( '' );
  const [ appointments, setAppointments ] = useState( [] );
  const [ submitting, setSubmitting ] = useState( false );
  const [ showSearch, setShowSearch ] = useState( false );
  
  const addContact = ( name, phone, email, appointments ) => {
    if ( contacts.find( contact => contact.email === email ) ) {
      console.log( 'that email already exists' )
      } else {
      setContacts( [ ...contacts, { 
        name: name, 
        phone: phone, 
        email: email,
        appointments: appointments
      } ] )
    }
  }

  useEffect( () => {
    console.log( 'ue', contacts );
  }, [submitting])

  const handleSubmit = ( e ) => {
    e.preventDefault();
    addContact( name, phone, email, appointments );
    setSubmitting( true );
    setName( '' );
    setPhone( '' );
    setEmail( '' );
    setAppointments( [] );
    setTimeout( () => {
      setSubmitting( false );
    }, 3000 )
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  const handleSearchClick = e => {
    e.preventDefault();
    setShowSearch( true );
  }

  const handleHideSearchClick = e => {
    e.preventDefault();
    setShowSearch( false );
  }

  return (
    <div>
      <Row xs="2">
        <Col>
          <Card>
            <CardTitle>
              <h2>Add a contact:</h2>
            </CardTitle>
            <CardBody>
              <ContactForm 
              name={ name }
              setName={ setName }
              phone={ phone }
              setPhone={ setPhone }
              email={ email }
              setEmail={ setEmail }
              appointments={ appointments }
              setAppointments={ setAppointments }
              handleSubmit={ handleSubmit } />
            </CardBody>
            <CardFooter>
            { submitting && <div>Contact added!</div>}
            </CardFooter>
          </Card>
        </Col>
        <Col>
          {showSearch ? <ContactsSearch contacts={ contacts } /> : <Button onClick={ handleSearchClick }>Search Contacts</Button>}
        </Col>
      <hr />

      </Row>
      <Row>
        <Col>
          <section>

            <h2>Contacts</h2>
            <ContactPicker contacts={ contacts } setContacts={ setContacts } />
          </section>
        </Col>
      </Row>
    </div>
  );
};
