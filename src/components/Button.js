import React, { Component } from 'react'

export default class Button extends Component {
state={
  contacts:["soy component"]
}

  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>{this.props.children}</button>
      </div>
    )
  }
}
