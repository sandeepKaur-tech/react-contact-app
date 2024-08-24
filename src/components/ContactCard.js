import React from "react";
import user from '../images/user.png'
import { Link } from "react-router-dom";
function ContactCard(props){
  
    const {id,name,email} = props.contacts
    
    return(
       
        <div style= {{marginTop:'50px'}}>
            <div className="item">
                <img className="ui avatar image" src ={user}></img>
                <div className="content " >
                    {/* <Link to ={{
                        pathname:`/contact/${id}`,
                        state:{contact:props.contacts}
                        }}> */}
                        <Link to = "/contact/${id}"  state={{ contact:props.contacts}}>
                       <div className="header">{name}</div>
                       <div>{email}</div>
                    </Link>
                </div>
            <i style ={{marginTop:'8px', color:'red', float:'right'}}className="trash alternate outline icon" onClick={()=>props.clickHandler(id)}></i>
        </div>
        </div>
    )
}
export default ContactCard