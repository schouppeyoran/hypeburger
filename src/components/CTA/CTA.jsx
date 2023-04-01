import React from 'react';
import { images } from '../../constants';
import './cta.css';

const ctaSection = {
  tagline: 'Take the Hype',
  description: 'Come visit us at your local HYPEBURGER location',
  buttonText: 'Find Location',
  buttonLink: '#cta'
}

const CTA = () => {
  return (
    <div className='container'>
      <section id='cta' className='app__cta'>
        <div className="app__cta-img-left">
          <img src={images.burger1} alt="" />
        </div>
        <div className="app__cta-content">
          <h1>{ctaSection.tagline}</h1>
          <p>{ctaSection.description}</p>
          <a href={ctaSection.buttonLink}>{ctaSection.buttonText}</a>
        </div>
        <div className="app__cta-img-right">
          <img src={images.burger1} alt="" />
        </div>
      </section>
    </div>
  )
}

export default CTA