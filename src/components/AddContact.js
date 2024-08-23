import React from "react";

class AddContact extends React.Component{
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
                <h2>Add Contact</h2>
                <form onSubmit={this.add} class='ui form'>
                  
                    <div className="field">
                 
                        <label>Name</label>
                        <input type="text" value ={this.state.name} name= 'name' placeholder="name" onChange={(e)=>this.setState({name:e.target.value})}></input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email"  value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} name= 'email' placeholder="name"></input>
                    </div>
                    <button type='submit'  className="ui button blue">Add</button>
                </form>
            </div>
        )
      }
}
export default AddContact;