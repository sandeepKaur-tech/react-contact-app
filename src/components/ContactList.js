import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props)=>{
 
    const deleteHandler= (id)=>{
       props.getContactId(id)
        
    }; 
    const listItems = props.contacts.map(list=>
        
       <ContactCard contacts={list} clickHandler= {deleteHandler} key = {list.id}/>
     )

    return(
        <div className="ui celled list">
            {listItems}
        </div>
    )
}
export default ContactList;