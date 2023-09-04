import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'
import './NavBar.css'
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      <nav>
        <a href='#hero'>
          <span>
            <img
              src='https://liyanadigitalhealth.com/igliptoo/elementor/thumbs/liyanamainlogo-e1623873721458-p9t81ftc9f0f8q3r5rxjzj7z3oll5eqn7fks6x7p5g.png'
              title='liyanamainlogo'
              alt='liyanamainlogo'
              loading='lazy'
            />
          </span>
        </a>
        <div className='desktop-links'>
          <div className='sections'>
            <a href='#about'>About</a>
            <a href='#services'>Services</a>
            <a href='#testimonials'>Testimonials</a>
            <a href='#contact'>Contact Us</a>
          </div>
          <div className='login-signup'>
            <a href='login'>Login</a>
            <a className='nav-btn' href='signup'>
              Sign Up
            </a>
          </div>
        </div>
        <button className='menu-btn' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <HiX className='close' /> : <FaBars className='bars' />}
        </button>
        <div className={isMenuOpen ? 'menu' : 'menu  hidden'}>
          <div className='links'>
            <a href='#about'>About</a>
            <a href='#services'>Services</a>
            <a href='#testimonials'>Testimonials</a>
            <a href='#contact'>Contact Us</a>
            <a href='login'>Login</a>
            <a className='nav-btn' href='signup'>
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
export default NavBar
