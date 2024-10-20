import React, { Component } from 'react'

class Forms extends Component {
    state ={
        firstName:"",
        lastName:""
    }
handleChange = (event)=>{
  
    this.setState({
        [event.target.name]:event.target.value
        
    })
    
}

submitForm=()=>{
    console.log(this.state);
    
}
  render() {
    return (
      <form>
        <input type='text' name='firstName' value={this.state.firstName}  onChange={this.handleChange} ></input>
        <input type='text'name='lastName' value={this.state.lastName}  onChange={this.handleChange} ></input>

        <button type='button' onClick={this.submitForm}>submit

        </button>
      </form>
    )
  }
}
export default  Forms;