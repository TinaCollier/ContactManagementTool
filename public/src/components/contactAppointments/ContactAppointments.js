import React from 'react';
import {
    Button,
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem
} from 'reactstrap';

export const ContactAppointments = ({ contact, contacts }) => {
    const listAppointments = () => {
        const person = contacts.find( person => person.email === contact );
        console.log('contact appt #', person.appointments.length)
        if ( person.appointments.length === 0 ) {
            return <ListGroupItem>No appointments</ListGroupItem>
        } else {
            return person.appointments.map( appointment => <ListGroupItem>Appointment</ListGroupItem>)
        }
    }

    const handleClick = e => {
        e.preventDefault();
        listAppointments();
    }
    
    return (
        <Card
            style={{
                width: '18rem'
            }}
            >
            <CardHeader>
                All appointments with { contact }
            </CardHeader>
            <ListGroup flush>
                { listAppointments() }
            </ListGroup>

        </Card>
    )
}