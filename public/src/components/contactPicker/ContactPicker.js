import React, { useEffect } from "react";
import { Tile } from "../tile/Tile";
import { 
  Card,
  CardTitle,
  CardBody,
  CardGroup 
} from 'reactstrap'


export const ContactPicker = ({ contacts }) => {
  useEffect(() => {
    console.log('picker', contacts)
  }, [])
 const listContacts = contacts.map( contact => {
  return (
    <Tile key={ contact.email } name={ contact.name } phone={ contact.phone } email={ contact.email} />
  )
   
 })
  const handleClick = () => {
    console.log('picker', contacts)
  }
  return (
    <div>
      <div class="contactsContainer">

        { listContacts }

        </div>
      <button onClick={ handleClick }>click me</button>
    </div>
  );
};
