import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import { nanoid } from 'nanoid';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

function App() {
   const LOCAL_STORAGE_KEY= "contacts";
    const [contacts, setContact] = useState(()=>{
        return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
    }) 
 

const addContactHandler = (contact)=>{
    console.log({id: nanoid, ...contact})
    setContact([...contacts,{id: nanoid(), ...contact}]);
}

const removeContactHandler = (id)=>{
    const newList = contacts.filter((contact)=>{
        return contact.id !==id
    })
    setContact(newList)
}


useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
},[contacts])
   

return(
    <div className="ui container">
       <Router>
       <Header />
            <Routes>
            <Route path="/" element={<ContactList contacts= {contacts} getContactId ={removeContactHandler}/>} />
            <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>} />
            </Routes>
       </Router>
    </div>)
    
}

export default App;
       {/* <AddContact addContactHandler={addContactHandler}/>
        < ContactList contacts= {contacts} getContactId ={removeContactHandler} /> */}