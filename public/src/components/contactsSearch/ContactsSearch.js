import React, { useState } from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu
} from 'reactstrap';
import { SearchList } from './SearchList';
import { Scroll } from './Scroll';

export const ContactsSearch = ({ contacts }) => {
    const [ searchField, setSearchField ] = useState( '' );
    const [ showSearch, setShowSearch ] = useState( false );

    const filteredContacts = contacts.filter(
        contact => {
            return (
                contact.name.toLowerCase().includes( searchField.toLowerCase() ) ||
                contact.email.toLowerCase().includes( searchField.toLowerCase() ) ||
                contact.phone.includes( searchField )
            );
        }
    );

    const searchList = () => {
        console.log('search list', filteredContacts)
        return (
            <Scroll>
                <SearchList filteredContacts={ filteredContacts } />
            </Scroll>
        )
    }

    const handleChange = e => {
        setSearchField( e.target.value );
        if( e.target.value === '' ) {
            setShowSearch( false );
        } else {
            setShowSearch( true );
        }
    }
    return (
        <div>
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
                        onChange={ handleChange }
                    />


                </FormGroup>
            </Form>
            <div>
                { showSearch ? searchList() : <FormText>Begin typing to search</FormText> }
            </div>
        </div>
    )
}