import React, { Component } from 'react'
import '../components/home.scss'
import { Link } from 'react-router-dom'
import Hero from '../images/hero.jpg'

class Home extends Component {
  render() {
    console.log('test')
    return (
      <div className='Home'>
        <div
          className='container-fluid hero d-flex justify-content-center align-items-center'
          style={{
            backgroundImage: `url(${Hero})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1 className='Home-title'>The Fastest Times Ever</h1>
        </div>

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
              <h2 className='text-center mt-5 Home-category-title'>Choose a category ?</h2>
              <div className='Home-btn-section mt-5'>
                <Link className='button men' to='/men'>
                  Men
                </Link>
                <Link className='button women' to='/women'>
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
