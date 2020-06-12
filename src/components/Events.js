import React, { Component } from 'react'
import '../components/events.scss'
import Event from './Event.js'

class Events extends Component {
  render() {
    const events = this.props.events[
      this.props.match.params.gender
    ].map((ev) => (
      <Event name={ev.event} gender={this.props.match.params.gender} />
    ))

    return (
      <div className='Events mt-5'>
        <div className='container text-center'>
          <h3 className='mb-5'>
            {this.props.match.params.gender === 'men' ? 'Mens ' : 'Womens '}
            World Records
          </h3>
          <div className='row'>{events}</div>
        </div>
      </div>
    )
  }
}

export default Events
