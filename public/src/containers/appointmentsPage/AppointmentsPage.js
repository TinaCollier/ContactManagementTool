import React, { useState } from "react";
import { 
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col
} from 'reactstrap';
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { ContactAppointments } from "../../components/contactAppointments/ContactAppointments";

export const AppointmentsPage = ({ contacts, appointments, setAppointments, direction, ...args }) => {
  const [ showForm, setShowForm ] = useState( false );
  const [ contact, setContact ] = useState( '' );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */    
  };

  const handleContactSelect = e => {
    setContact( e.target.value );
  }


  const handleClick = e => {
    e.preventDefault();
    console.log('appt', contacts)
    setShowForm( true );
  }

  return (
    <div>
      <section>
        <h3>Add Appointment</h3>
        <Row>
          <div className="d-flex p-5">
            <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction} onClick={handleClick}>
              <DropdownToggle caret>Add Appointment</DropdownToggle>
              <DropdownMenu {...args}>
                { contacts.length !== 0 ? contacts.map( contact => <DropdownItem key={ contact.email } value={ contact.email } onClick={ handleContactSelect }>{contact.name}</DropdownItem>) : <DropdownItem>No contacts</DropdownItem>}
              </DropdownMenu>
            </Dropdown>
          </div>
        </Row>
        <Row>
          <Col s={ 4 }>
            <AppointmentForm contact={ contact } contacts={ contacts }/>
          </Col>
          <Col s={ 4 }>
            <ContactAppointments contact={ contact } contacts={ contacts }/>
          </Col>
        </Row>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};
