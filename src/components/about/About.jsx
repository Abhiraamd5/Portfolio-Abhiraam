import React from 'react'
import './about.css';
import IMG from '../../assets/IMG_20230107_144935.jpg'
import {BiAward} from 'react-icons/bi'
import {FaStar,FaUserTie} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about' >
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={IMG} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiAward className='about__icon'/>
              <h5>7426</h5>
              <small>JEE Advanced rank</small>
            </article>
            <article className="about__card">
              <FaStar className='about__icon'/>
              <h5>Hackfest'23</h5>
              <small>1st prize for Parishram problem statement</small>
            </article>
            <article className="about__card">
              <FaUserTie className='about__icon'/>
              <h5>SEE</h5>
              <small>Member of Society of Electronics Engineers IIT(ISM)</small>
            </article>
          </div>
          <p>I am Duduka Abhiraam. I am currently pursuing B.Tech in ECE at IIT(ISM), Dhanbad. I have been into web development since 2 years and have implemented 
            numerous small and personal projects using different technologies like React, Express, Java, SQL, etc., I am good at front-end development and intermediate at back-end and a beginner 
            in app development. This is my portfolio </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About