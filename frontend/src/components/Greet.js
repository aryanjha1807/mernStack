import React, { Component } from 'react'

 class Greet extends Component {
  render() {
    return (
      <div>
        <center><h1>welcome to {this.props.name}<br></br> id is {this.props.id}</h1></center>
      </div>
    )
  }
}

export default Greet