import React from 'react';
import './skills.css'
import IMG1 from '../../assets/skills/c++.png'
import IMG2 from '../../assets/skills/c.png'
import IMG3 from '../../assets/skills/Java Script.png'
import IMG4 from '../../assets/skills/HTML.png'
import IMG5 from '../../assets/skills/CSS.png'
import IMG6 from '../../assets/skills/BootStrap.png'
import IMG7 from '../../assets/skills/JQuery.png'
import IMG9 from '../../assets/skills/NodeJs.png'
import IMG10 from '../../assets/skills/MySQL.png'
import IMG11 from '../../assets/skills/MangoDB.png'
import IMG12 from '../../assets/skills/concept.png'
import { useState } from 'react'

const data = [
  {
    id:1,
    image:IMG1,
    title:'C++',

  },
  {
    id:2,
    image:IMG2,
    title:'C',
  },
  {
    id:3,
    image:IMG3,
    title:'Java Script',
  },
  {
    id:4,
    image:IMG4,
    title:'HTML',
  },
  {
    id:5,
    image:IMG5,
    title:'CSS',
  },
  {
    id:6,
    image:IMG6,
    title:'BootStrap',
  },
  {
    id:7,
    image:IMG7,
    title:'JQuery',
  },
  {
    id:8,
    image:IMG12,
    title:'EJS',
  },
  {
    id:9,
    image:IMG9,
    title:'NodeJs',
  },
  {
    id:10,
    image:IMG10,
    title:'MySQL',
  },
  {
    id:11,
    image:IMG11,
    title:'MangoDB',
  },
  {
    id:12,
    image:IMG12,
    title:'DSA',
  },
  {
    id:13,
    image:IMG12,
    title:'DBMS',
  },
  {
    id:14,
    image: IMG12,
    title:'OS',
  },
  {
    id:15,
    image: IMG12,
    title:'OOPS',
  }
]

const Skills = () => {

  const [open, setOpen] = useState(0);

  return (
    <section id='skills'>
      <h5>What I can Do</h5>
      <h2>Skills</h2>

      <div className="container skills__container" >
        {
          data.map(({id,image,title})=>{
            return(
              <article key={id} className="skills__item">
                <div className="skill__item-img" >
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
              </article> 
            )
          })
        } 
      </div>
    </section>
  )
}
export default Skills;