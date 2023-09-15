import React from 'react'
import './portfolio.css'
import IMG7 from '../../assets/Screenshot (68).png'
import IMG2 from '../../assets/Screenshot (69).png'
import IMG3 from '../../assets/Screenshot (70).png'
// import IMG4 from '../../assets/Screenshot (71).png'
import IMG4 from '../../assets/Screenshot (72).png'
import IMG5 from '../../assets/Screenshot (73).png'
import IMG6 from '../../assets/Screenshot (74).png'
import IMG1 from '../../assets/Screenshot_2023-04-09-11-33-20-736_com.example.onboarding-edit.jpg'
import IMGT from '../../assets/521070.jpg'
import IMG8 from '../../assets/Screenshot (75).png'
import IMG9 from '../../assets/Screenshot (77).png'

import { useState } from 'react'

const data = [
  {
    id:1,
    image:IMG1,
    title:'Study Sphere',
    desc:'An Android app that helps students to view their course materials, submit assignments, track their progress and interact with professors.',
    live:'',
    github:'https://github.com/Prasanth-Tolety/AI-vengers'
  },
  {
    id:2,
    image:IMG2,
    title:'Drum-kit',
    desc:'A prototype of drums in which the user can make different sounds by clicking different buttons.',
    live:'https://prudhvimedapati1.github.io/drum-kit/',
    github:'https://github.com/prudhvimedapati1/drum-kit'
  },
  {
    id:3,
    image:IMG3,
    title:'Keeper App',
    desc:'A short note-taking web application using ReactJS which allows us to add and delete short notes with a heading and a description.',
    live:'https://prudhvi-notes.netlify.app/',
    github:'https://github.com/prudhvimedapati1/Notes-App'
  },
  {
    id:4,
    image:IMG4,
    title:'Search Extension',
    desc:'A google chrome extension that allows us to search the web through a small window in any tab without opening a new tab just for google search.',
    live:'',
    github:'#github'
  },
  {
    id:5,
    image:IMG5,
    title:'Spotify Clone',
    desc:'A basic prototype of a music player interface with functional play, pause, and forward song buttons and a banner of playing song is shown.',
    live:'https://prudhvimedapati1.github.io/webMusicPlayer/',
    github:'https://github.com/prudhvimedapati1/webMusicPlayer'
  },
  {
    id:6,
    image:IMG6,
    title:'To-Do list',
    desc:'A simple and beautiful looking to-do list application that allows us to add new to-do tasks, strike-through, and delete them.',
    live:'https://prudhvi-todolist.netlify.app/',
    github:'https://github.com/prudhvimedapati1/To-Do-list'
  },
  {
    id:7,
    image:IMG7,
    title:'Dice-game',
    desc:'A simple dice game which determines the winner between two players by comparing the numbers.',
    live:'https://prudhvimedapati1.github.io/diceegame/',
    github:'https://github.com/prudhvimedapati1/dicegame'
  },
  {
    id:8,
    image:IMG8,
    title:'Text Copier',
    desc:'A simple app which allows you to type some text, preview it and copy it to paste somewhere else.',
    live:'',
    github:'#github'
  },
  {
    id:9,
    image:IMG9,
    title:'Swiggato',
    desc:' A food delivery website from where users  can search between different dishes, add them to the cart and check them out.',
    live:'https://swiggato.netlify.app/',
    github:'https://github.com/prudhvimedapati1/SwiggyCloneMern'
  }
]

const Portfolio = () => {

  const [open, setOpen] = useState(0);

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container" >
        {
          data.map(({id,image,title,desc,live,github})=>{
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-img" onMouseOver={()=>{setOpen(id)}} onMouseLeave={()=>{setOpen(0)}}>
                  <div className="portfolio__item-desc">
                    <p>{open===id?desc:''}</p>
                  </div>
                  <img src={open===id?IMGT:image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__btns'><a href={github} className='btn portfolio__item-cta' target='_blank'>Github </a>
                <a href={live} className='btn portfolio__item-live' target='_blank'>Live Demo</a></div>
              </article> 
            )
          })
        } 
      </div>
    </section>
  )
}

export default Portfolio