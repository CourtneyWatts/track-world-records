import React, { Component } from 'react'
import '../components/home.scss'
import { Link } from 'react-router-dom'
import Hero from '../images/hero.jpg'

class Home extends Component {
  render() {
    console.log('test')
    return (
      <div className='Home container-fluid p-0'>
        <img src={Hero} />
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <p className='mt-5'>
                Welcome to my 'World Records' site. On this site, I have
                captured the biggest track world records, along with other
                interesting data to go along with each entry. The plan is to add
                to my current list bringing you more world records and more
                interesing supporting data as this site matures. For now, why
                not take a look at staggering world records Which category do
                you want to view select a category below to continue
              </p>
              <h2 className='text-center mt-5'>Choose a category ?</h2>
              <div className='Home-btn-section mt-5'>
                <Link className='btn btn-outline-secondary mr-5' to='/men'>
                  Men
                </Link>
                <Link className='btn btn-outline-secondary ml-5' to='/women'>
                  Women
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
