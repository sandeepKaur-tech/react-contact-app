import React from "react";
import { Link } from "react-router-dom";


class AddContact extends React.Component{
  handleRedirect = () => {
    // Use window.location to navigate
    window.location.href = '/'; // or any path you want to navigate to
  };
  state={
    name:'',
    email:'',
  }
  add = (e)=>{
    e.preventDefault()
    if(this.state.name === '' && this.state.email==='')
    {
      alert('all fields are empty')
      return 
    }
  
    this.props.addContactHandler(this.state);
    this.setState({name:'', email:''})
  
  }
  render()  
{
        return(
            <div class='ui main'>
                <h4 style = {{paddingTop:'100px'}}>Add Contact</h4>
               
                <form onSubmit={this.add} class='ui form'>
                  
                    <div className="field">
                 
                        <label>Name</label>
                        <input type="text" value ={this.state.name} name= 'name' placeholder="name" onChange={(e)=>this.setState({name:e.target.value})}></input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email"  value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} name= 'email' placeholder="name"></input>
                    </div>
                    <button type='submit' onClick={this.handleRedirect} className="ui button blue">Add</button>
                    
                </form>
            </div>
        )
      }
}
export default AddContact;