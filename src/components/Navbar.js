import React from 'react'
import {Link} from 'react-router-dom'
import Converter from '../routes/Converter'

import './Navbar.css'

const navbar = () => {
  return (
    <Link to='/'>
        <div className='navbar'>
            <h1 className='brand'> Crypto<span className='purple'>Vista </span></h1>

            <div  className='converterlink'>
              <Link to="/converter" element={Converter}>Converter</Link>
            </div>
        </div>

    </Link>
  )
}

export default navbar