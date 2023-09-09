import React from 'react'
import './Contact.css'
import { FaPhoneAlt, FaMap } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
const contacts = [
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
        {contacts.map((contact) => {
          return (
            <div className='contact'>
              <div className='logo-desc'>
                {contact.img}
                <h3>{contact.title}</h3>
              </div>
              <p className='contact-info'>{contact.desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Contact
