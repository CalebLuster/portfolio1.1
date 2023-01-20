import React from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'
import Project from '../Project'
import DBDLogo from './portfolioImages/dbdlogo.jpg'
import DevTubeLogo from './portfolioImages/devtube.png'
import WeatherAppLogo from './portfolioImages/weather-app.png'
import ToDoAppLogo from './portfolioImages/todo-app.png'


const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])


  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div className="images-container">
          <Project
            title="DEAD BY DAYLIGHT SOCIAL MEDIA APP"
            image={DBDLogo}
            description="A fan made social media app for the game Dead By Daylight"
            btn="https://dbdsma.vercel.app/"
          />
          <Project
            title="DEVTUBE"
            description="A Youtube clone for all the developers out there"
            btn="https://devtubeclone.netlify.app/"
            image={DevTubeLogo}
          />
          <Project
            title="WEATHER OUT"
            description="A simple weather app all portfolios need"
            btn="https://timely-queijadas-638b49.netlify.app/"
            image={WeatherAppLogo}
          />
          <Project
            title="WHAT TO DOS"
            description="A simple to-do app to help you keep track of all your tasks"
            btn="https://rad-croissant-1316a7.netlify.app/"
            image={ToDoAppLogo}
          />
        </div>
      </div>

      <Loader type="ball-scale-ripple-multiple" />
    </>
  )
}

export default Portfolio
