import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Events from './components/Events'
import Record from './components/Record'
import dataset from './data/dataset'
import '../src/App.scss'

class App extends Component {
  static defaultProps = {
    records: dataset,
  }
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            exact
            path='/:gender'
            render={(routeProps) => (
              <Events {...routeProps} events={this.props.records} />
            )}
          />
          <Route
            exact
            path='/:gender/:event'
            render={(routeProps) => (
              <Record {...routeProps} records={this.props.records} />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default App
