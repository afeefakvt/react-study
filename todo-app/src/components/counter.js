import React ,{Component} from "react";

class Counter extends Component{

state = {
    Counter :0
}

    onIncrement = ()=>{
        this.setState({
            Counter:this.state.Counter+1
        })
        
    }
    onDecrement=()=>{
        this.setState({
            Counter:this.state.Counter-1
        })
    }
    render() {
      return (
        <div>
          <h2>
            counter Component
          </h2>
          <h4> {this.state.Counter}</h4>
          <button type="button" onClick={this.onIncrement}>+</button>
          <button type="button" onClick={this.onDecrement}>-</button>


        </div>
      )
    }
}
export default Counter