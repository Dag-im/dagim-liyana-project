import './Hero.css'
import heroImg from '../assets/medicine.svg'
import { GoHome } from 'react-icons/go'
import { BiWebcam } from 'react-icons/bi'
function Hero() {
  return (
    <div className='hero'>
      <header>
        <div className='header-text'>
          <h1>
            Liyana Digital <span>Healthcare</span> Solutions S.C
          </h1>
          <p>
            Liyana Digital Healthcare Solutions Share Company (LDHCS) is an
            Ethiopian telehealth company that provides remote medical treatment
            through its Liyana Care app and a team of home-based care providers.
          </p>
          <div className='header-btns'>
            <a className='btn-1' href=''>
              <BiWebcam /> Book Virtual Care
            </a>
            <a className='btn-2' href='tel:+251905007755'>
              <GoHome className='home' /> Book Home Care
            </a>
          </div>
        </div>
        <img className='header-img' src={heroImg} alt='doctor' />
      </header>
    </div>
  )
}

export default Hero
