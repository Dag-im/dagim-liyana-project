import React from 'react'
import './Contact.css'
import { FaPhoneAlt, FaMap } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
const services = [
  {
    img: <FaMap className='logo' />,
    title: 'Address',
    desc: '22 Golagol area near Awraris Hotel Ababa, Ethiopia',
  },
  {
    img: <FaPhoneAlt className='logo' />,
    title: 'Phone',
    desc: '+(251) 905 007 755',
  },
  {
    img: <HiMail className='logo' />,
    title: 'Email',
    desc: 'info@liyanadigitalhealth.com',
  },
]
const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
      <h1>Contact Us</h1>
      <div className='contacts'>
        {services.map((service) => {
          return (
            <div className='contact'>
              <div className='logo-desc'>
                {service.img}
                <h3>{service.title}</h3>
              </div>
              <p className='contact-info'>{service.desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Contact
