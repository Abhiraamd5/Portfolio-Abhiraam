import React,{useEffect} from 'react'
import './App.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Skills from './components/skills/skills';

function App() {

  useEffect(()=>{
    const containers = document.querySelectorAll(".container");
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
       const clsList = (entry.target.classList);
       if(entry.isIntersecting){
        console.log(clsList.contains("header__container"));
        if(clsList.contains("about__container")){
          document.querySelector(".nav__about").classList.add("active");
          document.querySelector(".nav__home").classList.remove("active");
          document.querySelector(".nav__experience").classList.remove("active");
          document.querySelector(".nav__skills").classList.remove("active");
          document.querySelector(".nav__portfolio").classList.remove("active");
          document.querySelector(".nav__contact").classList.remove("active");
          
        }
        else if(clsList.contains("header__container")){
          document.querySelector(".nav__about").classList.remove("active");
          document.querySelector(".nav__home").classList.add("active");
          document.querySelector(".nav__experience").classList.remove("active");
          document.querySelector(".nav__skills").classList.remove("active");
          document.querySelector(".nav__portfolio").classList.remove("active");
          document.querySelector(".nav__contact").classList.remove("active");
        }
        else if(clsList.contains("services__container")){
          document.querySelector(".nav__about").classList.remove("active");
          document.querySelector(".nav__home").classList.remove("active");
          document.querySelector(".nav__experience").classList.add("active");
          document.querySelector(".nav__skills").classList.remove("active");
          document.querySelector(".nav__portfolio").classList.remove("active");
          document.querySelector(".nav__contact").classList.remove("active");
        }
        else if(clsList.contains("skills__container")){
          document.querySelector(".nav__about").classList.remove("active");
          document.querySelector(".nav__home").classList.remove("active");
          document.querySelector(".nav__experience").classList.remove("active");
          document.querySelector(".nav__skills").classList.add("active");
          document.querySelector(".nav__portfolio").classList.remove("active");
          document.querySelector(".nav__contact").classList.remove("active");
        }
        else if(clsList.contains("portfolio__container")){
          document.querySelector(".nav__about").classList.remove("active");
          document.querySelector(".nav__home").classList.remove("active");
          document.querySelector(".nav__experience").classList.remove("active");
          document.querySelector(".nav__skills").classList.remove("active");
          document.querySelector(".nav__portfolio").classList.add("active");
          document.querySelector(".nav__contact").classList.remove("active");
        }
        else if(clsList.contains("contact__container")){
          document.querySelector(".nav__about").classList.remove("active");
          document.querySelector(".nav__home").classList.remove("active");
          document.querySelector(".nav__experience").classList.remove("active");
          document.querySelector(".nav__skills").classList.remove("active");
          document.querySelector(".nav__portfolio").classList.remove("active");
          document.querySelector(".nav__contact").classList.add("active");
        }
       }
      
      
    })

  },{
    threshold:0.5
  })



  containers.forEach(container=>{
    observer.observe(container);
  })

},[])

  

  return (
    <>
      <Header />
      <Nav />
      <About ></About>
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
