// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {
  state = {
    name: ""
  }

  handleOnChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ""
    })
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleOnSubmit}>
          <label>Band Name</label>
          <input 
            type="text"
            onChange={this.handleOnChange}
            value={this.state.author}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default BandInput
