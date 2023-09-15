import React from 'react'
import CV from '../../assets/20JE0351_Abhiraam_resume_II.pdf'

const CTA = () => {
  return (
    <div className="cta">

        <a href={CV} target='_blank' className='btn' >View CV</a>
        <a href="#contact" className='btn-primary btn' >Let's talk</a>
    </div>
  )
}

export default CTA