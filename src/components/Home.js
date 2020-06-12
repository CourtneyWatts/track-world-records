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
            <div className='col-12 text-center'>
              <p className='mt-5'>
                Welcome to my 'World Records' site, chronicling athletics most
                infamous world records.
              </p>
              <p>
                On this site you can explore the biggest world records in
                athletics, along their record holders, location set and other
                interesting pieces of information.
              </p>
              <p>
                As time passes, I aim to bring you more world records along with
                more interesing supporting data. For now, why not have a browse
                of the current world records I have on the site.
              </p>
              <h2 className='text-center mt-5 Home-category-title'>
                Choose a category ?
              </h2>
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
