import React from 'react'
import './About.css'
import introImg from '../assets/intro-image.jpg'
import visionImg from '../assets/vision-image.jpg'
const About = () => {
  return (
    <section id='about' className='about'>
      <h1>About Us</h1>
      <div className='about-container'>
        <div className='intro'>
          <div className='intro-text'>
            <h3>Who Are We?</h3>
            <p>
              Liyana Digital Healthcare Solutions Share Company (LDHCS) is the
              first telehealth company in Ethiopia to be licensed by the Addis
              Ababa city FMHACA in September 2020. The Company was founded by
              Drs. Girma Ababi, Liul Birhanu, and Dawit Lemecha.
            </p>
            <a
              className='btn'
              href='https://liyanadigitalhealth.com/igliptoo/2023/06/Liyana-Profile.html'
            >
              See Portfolio
            </a>
          </div>
          <img className='intro-image' src={introImg} alt='' />
        </div>
        <div className='vision'>
          <img className='vision-image' src={visionImg} alt='' />
          <div className='vision-text'>
            <h3>Our Vision</h3>
            <p>
              Revolutionizing healthcare using digital technology. We aim to
              bring healthcare wherever you are, providing services such as
              online virtual consultations, therapy, and home-based care.
            </p>
            <a className='btn' href='#contact'>
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className='about-bg'></div>
    </section>
  )
}

export default About
