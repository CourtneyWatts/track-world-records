import React, { Component } from 'react'
import '../components/record.scss'
import { ReactComponent as Stopwatch } from '../images/icons/stopwatch.svg'
import { ReactComponent as Eastgermany } from '../images/flags/East_Germany.svg'
import { ReactComponent as Czechrepublic } from '../images/flags/Czech_Republic.svg'

import Flag from 'react-world-flags'

class Record extends Component {
  render() {
    let allEvents = this.props.records[this.props.match.params.gender]
    const eventIndex = allEvents.findIndex(
      (ev) => ev.event === this.props.match.params.event
    )
    const event = allEvents[eventIndex]
    const flag = () => {
      if (event.wonFor === 'East_Germany') {
        return <Eastgermany />
      } else if (event.wonFor === 'Czech_Republic'){
        return <Czechrepublic />
      } else {
        return <Flag className='flag' code={event.wonFor} />
      }
    }

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
              <div className='col-12 col-sm-5 col-lg-3'>
                <div className='row'>
                  <div className='col-1 col-sm-2'>
                    {flag()}
                  </div>
                  <div className='col-11 col-sm-10'>
                    <p className='Record-name'>{event.recordHolder}</p>
                  </div>
                </div>
                <div className='d-flex align-items-baseline'>
                  <Stopwatch />
                  <p className='Record-time'>{event.record}</p>
                </div>
              </div>

              <div className='col-12 col-sm-7 col-lg-5'>
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
                      <span>Previous holder:</span> {event.previousRecordHolder}
                    </li>
                    <li>
                      <span>Previous world record:</span> {event.previousRecord}
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col col-sm-8 offset-sm-2 col-md-6 offset-md-3 offset-lg-0 col-lg-4'>
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
