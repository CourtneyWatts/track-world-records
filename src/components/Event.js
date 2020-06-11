import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Event extends Component {
  render() {
    return (
      <div className='col-6 col-sm-4 col-lg-3 col-xl-2 mb-5'>
        <Link className='Event-btn' to={`${this.props.gender}/${this.props.name}`}>
            <span className='Event-name'>{this.props.name}</span>
        </Link>
      </div>
    )
  }
}

export default Event
 