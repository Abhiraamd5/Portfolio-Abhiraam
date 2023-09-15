import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {AiFillSafetyCertificate} from 'react-icons/ai'
import {CgWebsite} from 'react-icons/cg'
import {AiOutlineMail} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  
  return (
    // <nav>
    //   <a href="#" onClick={()=>setActiveNav('#')} className={`${activeNav==='#'?'active':''} nav__home`}><AiOutlineHome /></a>
    //   <a href="#about" onClick={()=>setActiveNav('#about')}  className={activeNav==='#about'?'active':''+" nav__about"}><AiOutlineUser /></a>
    //   <a href="#experience" onClick={()=>setActiveNav('#experience')} className={`${activeNav==='#experience'?'active':''} nav__experience`}><BiBook /></a>
    //   <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={`${activeNav==='#portfolio'?'active':''} nav__portfolio`}><CgWebsite /></a>
    //   <a href="#contact" onClick={()=>setActiveNav('#contact')} className={`${activeNav==='#contact'?'active':''} nav__contact`}><AiOutlineMail /></a>
    // </nav>
    <nav>
      <a href="#" className= "nav__home"><AiOutlineHome /></a>
      <a href="#about"   className="nav__about"><AiOutlineUser /></a>
      <a href="#experience"  className="nav__experience"><BiBook /></a>
      <a href="#skills" className="nav__skills"><AiFillSafetyCertificate /></a>
      <a href="#portfolio"  className="nav__portfolio"><CgWebsite /></a>
      <a href="#contact"  className="nav__contact"><AiOutlineMail /></a>
    </nav>
  )
}

export default Nav