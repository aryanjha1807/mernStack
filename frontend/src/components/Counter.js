import React, { Component } from 'react'

 class Counter extends Component {
    constructor() {
      super()
    
      this.state = {
         count:0
      }
    }
increment(){
  //  this.setState({
    //    count:this.state.count+1
    //},()=>console.log("callback value="+this.state.count))
    //console.log(this.state.count)
    this.setState((prevState)=>({
        count: prevState.count+1
    }))

}
incrementfive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
}
  render() {
    return (
      <center><h1>count: {this.state.count}</h1>
      <button onClick={()=>this.incrementfive()}>increment</button>
      </center>
    )
  }
}

export default Counter