import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (contacts)=>{
  console.log('www',contacts)

    const listItems = contacts.contacts.map(list=>
       <ContactCard contacts={list}/>
     )

    return(
        <div className="ui celled list">
            {listItems}
        </div>
    )
}
export default ContactList;