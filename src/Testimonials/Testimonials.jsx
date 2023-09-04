import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Testimonials.css'
const people = [
  {
    name: 'Wondwossen Alemneh',
    text: `My experience with Liyana was very great. It's a dream come true for me to witness and be able to have  telemedicine center in Ethiopia. I was pleased from the first day of booking appointment, the tele-consultations, physical assessments of the mobile medical team to the conclusion of my services .This experience helped me to be cautious about my health conditions and nutrition. The center surely will help with reduction of the spread of Covid-19 virus by minimizing physical contacts. Keep all the good work up!`,
  },
  {
    name: `Tewodros Kefyalew`,
    text: `I had a covid test for my whole family from the comfort of my home. The doctors and nurses were very polite and had our results in a short time. They were very careful and followed all the guidelines which made as feel safe. I am really satisfied by their services.`,
  },
  {
    name: `Mihret Teferedegn`,
    text: `I got the chance of knowing Liyana and its services when I was having a very difficult time with my mother’s illness and was unable to take her to hospitals. I consider Liyana  as my home and a center to rely on, to receive care when ever I go through hard times with my health. The reason for their amazing services are the doctors and nurses who respects their profession and are serving with ethics. I want to give my genuine heartfelt thanks to the center for all the care I have received.`,
  },
]
const Testimonials = () => {
  const [index, setIndex] = useState(0)
  const { name, text } = people[index]
  const nextPerson = () => {
    setIndex((index) => {
      const newValue = (index + 1) % people.length
      console.log(newValue)
      return newValue
    })
  }
  const prevPerson = () => {
    setIndex((index) => {
      const newValue = (index - 1 + people.length) % people.length
      return newValue
    })
  }

  return (
    <main id='testimonials' className='testimonials'>
      <h1>Testimonials</h1>
      <article className='review'>
        <h4 className='author'>{name}</h4>
        <p className='info'>{text}</p>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </article>
    </main>
  )
}

export default Testimonials
