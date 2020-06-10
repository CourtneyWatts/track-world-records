import React, { Component } from 'react'
import '../components/record.scss'
import SVG from 'react-inlinesvg'

class Record extends Component {
  render() {
    let allEvents = this.props.records[this.props.match.params.gender]
    const eventIndex = allEvents.findIndex(
      (ev) => ev.event === this.props.match.params.event
    )
    const event = allEvents[eventIndex]

    // Add in redirect if event is not found
    return (
      <div className='Record'>
        <div className='container'>
          <div className='Record-container'>
            <div className='row mt-5'>
              <div className='col'>
                <h1>
                  {this.props.match.params.gender === 'men'
                    ? 'Mens '
                    : 'Womens '}
                  {event.event} World Record
                </h1>
              </div>
            </div>
            <div className='row mt-5'>
              <div className='col-3'>
                <div className='row'>
                  <div className='col-2'>
                    <SVG src={`/flags/${event.wonFor}.svg`} />
                  </div>
                  <div className='col-10'>
                    <p className='Record-name'>{event.recordHolder}</p>
                  </div>
                </div>
                <div className='Record-holder'>
                  <p className='Record-time'>{event.record}</p>
                </div>
              </div>

              <div className='col-5'>
                <div className='Record-details'>
                  <ul>
                    <li>
                      <span>Competition:</span> {event.competition}
                    </li>
                    <li>
                      <span>Location:</span> {event.competitionLocation}
                    </li>
                    <li>
                      <span>Date Set:</span> {event.dateSet}
                    </li>
                    <li>
                      <span>Previous record holder:</span>{' '}
                      {event.previousRecordHolder}
                    </li>
                    <li>
                      <span>Previous world record:</span> {event.previousRecord}
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-4'>
                <img src={event.image} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Record
