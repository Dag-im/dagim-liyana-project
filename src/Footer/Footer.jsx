import React from 'react'
import './Footer.css'
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaApple,
} from 'react-icons/fa'
import playstore from '../assets/playstore.svg'
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className='footer'>
        <span className='footer-logo'>
          <img
            src='https://liyanadigitalhealth.com/igliptoo/elementor/thumbs/liyanamainlogo-e1623873721458-p9t81ftc9f0f8q3r5rxjzj7z3oll5eqn7fks6x7p5g.png'
            title='liyanamainlogo'
            alt='liyanamainlogo'
            loading='lazy'
          />
        </span>
        <div className='footer-links'>
          <a href='#about'>About</a>
          <a href='#services'>Services</a>
          <a href='#testimonials'>Testimonials</a>
          <a href='#contact'>Contact Us</a>
        </div>
        <div className='download-app'>
          <h2>Download App</h2>
          <div className='download-btns'>
            <button>
              <img className='playstore' src={playstore} alt='' />
              <a href='https://play.google.com/store/apps/details?id=com.liyanadigitalhealth.liyanacare'>
                Google Play
              </a>
            </button>
            <button>
              <FaApple className='applestore' />
              <a href='https://apps.apple.com/us/app/liyana-care/id1572231448'>
                App Store
              </a>
            </button>
          </div>
        </div>
        <div className='socials'>
          <a href='https://www.facebook.com/LiyanaDHS/'>
            <FaFacebookF className='social' />
          </a>
          <a href='https://www.instagram.com/liyana_virtual_care/'>
            <FaInstagram className='social' />
          </a>
          <a href='https://www.youtube.com/channel/UCd3BEpPhoTIctLldQppAEeQ'>
            <FaYoutube className='social' />
          </a>
          <a href='https://www.linkedin.com/company/liyana-digital-healthcare-solutions/about/?viewAsMember=true'>
            <FaLinkedinIn className='social' />
          </a>
        </div>
        <h3>
          &copy; Copyright {year}, Liyana Digital Healthcare Solutions S.C,
          <br />
          All rights Reserved
        </h3>
      </div>
    </footer>
  )
}

export default Footer
