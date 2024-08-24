import React from "react";
import user from '../images/user.png'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const ContactDetails=(props)=>{
    const location = useLocation();
    
    return(
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user}/>
                </div>
                <div  className="content">
                    <div className="header">{location.state.contact.name}</div>
                    <div className="description">{location.state.contact.email}</div>
                </div>

            </div>

        </div>
    )
}
export default ContactDetails