import React from 'react';
import { images } from '../../constants';
import './testimonials.css';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';

const testimonialsItems = [
  {
    score: '5',
    text: "That Triple Tirado almost gave me a triple bypass...Totally worth it!",
    avatar: images.testimonial1,
    name: 'Michael Yonke'
  },
  {
    score: '4',
    text: "The hype is real. After waiting hours in line, the burgers exceeded my expectation.",
    avatar: images.testimonial2,
    name: 'Uros Mikic'
  },
  {
    score: '3',
    text: "This is the place I go when I need fresh inspiration for hamburger menu designs.",
    avatar: images.testimonial3,
    name: 'Adam Mura'
  },
  {
    score: '2',
    text: "Filler testimonial to test out the animations wee woo wee woo",
    avatar: images.testimonial1,
    name: 'Tirion Fordring'
  },
  {
    score: '2',
    text: "Filler testimonial to test out the animations wee woo wee woo",
    avatar: images.testimonial1,
    name: 'Chen Stoutpaw'
  },
  {
    score: '2',
    text: "Filler testimonial to test out the animations wee woo wee woo",
    avatar: images.testimonial1,
    name: 'Garrosh Hellscream'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials' className='app__testimonials'>
      <div className="container app__testimonials-heading">
        <img src={images.decorator1} alt="" />
        <h1>Hear the Hype</h1>
        <img src={images.decorator2} alt="" />
      </div>
      <div className="container app__testimonials-items-container">
        {testimonialsItems.map(({ score, text, avatar, name }, index) => (
          <div className="app__testimonials-item" key={index}>
            <div className="app__testimonials-item-rating">
              {[...Array(5)].map((_, i) =>
                i < score ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
              )}
            </div>
            <p>{text}</p>
            <div className="app__testimonials-item-client">
              <img src={avatar} alt={name} />
              <h5>{name}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials;