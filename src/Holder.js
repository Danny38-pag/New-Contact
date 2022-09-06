import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Container } from 'react-bootstrap';
import FormCom from './FormCom';
import Contact from './Contact';
import "./holder.css";

const Holder = () => {
    const [usersContact, setUsersContact] = useState([
		// { name: " Naa", contact: " 024443536", location: " Ghana", id: "vsdvsdvc " },
		// { name: " Wini", contact: " +1 244535645", location: " USA", id: "sesfsdv" },
	]);
   const addContact = (user) => {
		setUsersContact([...usersContact, user]);
    
	};
  const deleteUser = (id) => {
    setUsersContact(
      usersContact.filter((usersContact) => {
        if (usersContact.id !== id) {
          return usersContact;
        }
      })
    )
  }
  const Edituser = (id, newData) => {
    setUsersContact(
      usersContact.map((user) => {
        if (user.id === id) {
          return newData
        }
        return user;
      })
    )
  }

  return (
    <div className='holder'>
        <Container>
            <FormCom newContact={addContact} />
            <Contact contactData={usersContact} delete={deleteUser} editUser={Edituser} />
        </Container>
      
    </div>
  )
}

export default Holder
