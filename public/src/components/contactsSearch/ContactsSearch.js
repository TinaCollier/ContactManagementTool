import React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

export const ContactsSearch = ({ contacts }) => {
    console.log(contacts)
    return (
    <Form>
        <FormGroup>
            <Label for="exampleSearch">
                Search Contacts
            </Label>
            <Input
                id="exampleSearch"
                name="search"
                placeholder="by name, email, or phone"
                type="search"
            />
        </FormGroup>
      </Form>
    )
}