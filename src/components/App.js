import React, { useEffect, useState } from "react";
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

function App() {
   const LOCAL_STORAGE_KEY= "contacts";
    const [contacts, setContact] = useState(()=>{
        return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
    }) 
 

const addContactHandler = (contact)=>{
    console.log(contacts)
    setContact([...contacts,contact]);
}
// useEffect(()=>{
//     const myData = localStorage.getItem(LOCAL_STORAGE_KEY);
//     if(myData){
//         setContact(JSON.parse(myData))
//     }
// },[]);

useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
},[contacts])
   

return(
    <div className="ui container">
        <Header />
        <AddContact addContactHandler={addContactHandler}/>
        < ContactList contacts= {contacts} />
    </div>)
    
}

export default App;
