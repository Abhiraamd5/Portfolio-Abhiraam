import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/IMG_20230107_144935-removebg-preview.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header >
        <div className="container header__container" >
            <h3>
                Hello I'm
            </h3>
            <h1>Abhiraam </h1>
            <h5 className="text-light">Fullstack developer</h5>
            <CTA />
            <HeaderSocials/>

            <div className="me">
                <img src={ME} alt="" />
            </div>

            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header