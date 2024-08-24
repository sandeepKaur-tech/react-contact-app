import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props)=>{
 
    const deleteHandler= (id)=>{
       props.getContactId(id)
        
    }; 
    const listItems = props.contacts.map(list=>
        
       <ContactCard contacts={list} clickHandler= {deleteHandler} key = {list.id}/>
     )

    return(
        <div className="ui celled list">

<Link to = "/add"> <button style ={{marginTop:'50px'}} className="ui button right blue"> Add Contact</button></Link>
            {listItems}
        </div>
    )
}
export default ContactList;