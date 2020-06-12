import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Tartan from '../images/icons/tartan.jpg'

class Event extends Component {
  render() {
    return (
      <div className='col-6 col-sm-4 col-lg-3 col-xl-2 mb-5'>
        <Link
          className='Event-btn shadow'
          to={`${this.props.gender}/${this.props.name}`}
          style={{
            backgroundImage: `url(${Tartan})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <span className='Event-name'>{this.props.name}</span>
        </Link>
      </div>
    )
  }
}

export default Event
