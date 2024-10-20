
import React, { Component } from 'react'

 class Todo extends Component {
 

  render() {
    return (
      <div>
        <h1>
            to do
            
        </h1>
        <h2>
            {this.props.myAge}
            
        </h2>

      </div>
    )
  }
}

export default Todo;
