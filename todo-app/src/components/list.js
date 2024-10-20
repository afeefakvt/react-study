import React, { PureComponent } from 'react'

class List extends PureComponent {


    state = {
        scrore:10,
        data:[
            {
                id:1,
                name:"afeefa"
            },
            {
                id:2,
                name:"razik"
            }
        ]
    };
    // componentDidMount(){
    //     alert()
    // }
    // componentWillUnmount(){
    //     console.log("this page exited");
        
    // }
    
 incrementScore=()=>{
    this.setState({
        scrore :this.state.scrore+1
    })
 }
  render() {
    console.log(this.state.scrore);
    
    return (
      <div>
      
      <h1>{this.state.scrore}</h1>

        <button onClick={this.incrementScore}>click</button>
        <ul>
            {this.state.data.map((value,index)=>{
                return(
                    <li key={index}>
                        {value.id}:{value.name}
                    </li>
                )

            })}
        </ul>
      </div>
    )
  }
}
export default List