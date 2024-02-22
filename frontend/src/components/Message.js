import React, { Component } from 'react'

class Message extends Component {
    constructor() {
      super()
    
      this.state = {
         message:"welcome to the visitor"
         
      }
    }
changemessage(){
    this.setState({
        message:"thank you for subscribing"
    })
}
  render() {
    return (
      <center><h1>{this.state.message}</h1>
      <button onClick={()=>this.changemessage()}>subscribe</button>
      </center>
    )
  }
}

export default Message