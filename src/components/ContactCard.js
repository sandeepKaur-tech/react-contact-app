import React from "react";
import user from '../images/user.png'
function ContactCard(props){
  
    const {id,name,email} = props.contacts
   
    return(
       
        <div>
            <div className="item">
                <img className="ui avatar image" src ={user}></img>
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i style ={{marginTop:'8px', color:'red'}}className="trash alternate outline icon"></i>
        </div>
        </div>
    )
}
export default ContactCard