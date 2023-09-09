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
            <a
              className='playstore'
              target='_blank'
              href='https://play.google.com/store/apps/details?id=com.liyanadigitalhealth.liyanacare&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
            >
              <img
                alt='Get it on Google Play'
                src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
              />
            </a>
            <a
              className='appstore'
              target='_blank'
              href='https://apps.apple.com/us/app/liyana-care/id1572231448?itsct=apps_box_badge&amp;itscg=30200'
            >
              <img
                src='https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1624406400'
                alt='Download on the App Store'
              />
            </a>
          </div>
        </div>
        <div className='socials'>
          <a target='_blank' href='https://www.facebook.com/LiyanaDHS/'>
            <FaFacebookF className='social' />
          </a>
          <a
            target='_blank'
            href='https://www.instagram.com/liyana_virtual_care/'
          >
            <FaInstagram className='social' />
          </a>
          <a
            target='_blank'
            href='https://www.youtube.com/channel/UCd3BEpPhoTIctLldQppAEeQ'
          >
            <FaYoutube className='social' />
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/company/liyana-digital-healthcare-solutions/about/?viewAsMember=true'
          >
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
