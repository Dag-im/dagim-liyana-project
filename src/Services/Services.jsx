import React from 'react'
import './Services.css'
import {
  FaLaptopMedical,
  FaHome,
  FaPhoneAlt,
  FaVirus,
  FaAmbulance,
} from 'react-icons/fa'
import { BiTestTube } from 'react-icons/bi'
const services = [
  {
    img: <FaLaptopMedical className='logo' />,
    title: 'Virtual Consultation and Therapy',
    desc: 'You can book medical and psychoanalytic consultations, have video or text consultations with medical professionals and psychiatrists, access ordered tests and prescribed medication, with 24/7 availability of psychiatrists.',
  },
  {
    img: <FaHome className='logo' />,
    title: 'Home Based Care',
    desc: 'Home-based care provided by experienced medical team, including doctors and nurses, at the comfort of your own home.',
  },
  {
    img: <FaPhoneAlt className='logo' />,
    title: '7755 Call Center',
    desc: 'The 7755 call center is accessible 24/7 and provides medical advice and information from a medical doctor, as well as the ability to book virtual consultations.',
  },
  {
    img: <BiTestTube className='logo' />,
    title: 'Covid 19 Test',
    desc: 'Covid samples can be taken at your location, with results available in 12-24 hours, and a free medical evaluation by a physician is provided before the sample is taken, as well as free medical advice after result notification. ',
  },
  {
    img: <FaVirus className='logo' />,
    title: 'Covid 19 Care',
    desc: 'If you test positive for Covid-19, you can be treated at your home with a one-week package that includes remote follow-up via video or phone call to ensure your recovery is on track.',
  },
  {
    img: <FaAmbulance className='logo' />,
    title: 'Ambulance',
    desc: 'A 24/7 ambulance service is available in partnership with Tebita Ambulance, providing reliable and timely emergency medical transportation to those in need.',
  },
]
const Services = () => {
  return (
    <section id='services'>
      <div className='services'>
        <h1>Services</h1>
        <h2>Bringing Health Care Wherever You Are!</h2>
        <div className='items'>
          {services.map((service) => {
            return (
              <div className='item'>
                <div className='title-logo'>
                  {service.img}
                  <h3>{service.title}</h3>
                </div>
                <p>{service.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
