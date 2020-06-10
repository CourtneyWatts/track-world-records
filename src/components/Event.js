import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Event extends Component {
  render() {
    return (
      <div className='col-2'>
        <Link to={`${this.props.gender}/${this.props.name}`}>
          <div className='Event-btn'>
            <span className='Event-name'>{this.props.name}</span>
          </div>
        </Link>
      </div>
    )
  }
}

export default Event
 