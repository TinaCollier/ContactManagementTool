import React from 'react';

export const SearchList = ({ filteredContacts }) => {
    console.log('filtered contacts', filteredContacts )
    const filtered = filteredContacts.map(contact =>  <p key={contact.email}>{ contact.name } | { contact.email } | { contact.phone }</p>)
    return (
        <div>
            { filtered }
        </div>
    )

}

