import React from 'react';
import './hero.css';
import {images} from '../../constants';

const heroContent = {
  title: 'Mind Blowing Bites',
  ctaText: 'Find Location',
  spanText: 'TAKE A BITE'
}

const Hero = () => {
  return (
    <section id='hero' className='app__hero'>
      <div className="app__hero-img-left">
        <img src={images.burger4} alt="" />
      </div>
      <div className="app__hero-content">
        <img src={images.hands4} alt="hand" className='app__hero-content-decorator'/>
        <img src={images.eyes7} alt="hand" className='app__hero-content-decorator'/>
        <div className='app__hero-content-title'>
          <h5>{heroContent.title}</h5>
          <div className='app__hero-content-title-backdrop'>
            <h5>{heroContent.title}</h5>
            <h5>{heroContent.title}</h5>
          </div>
        </div>
        <a href="#">{heroContent.ctaText}</a>
      </div>
      <div className="app__hero-img-right">
        <img src={images.burger4} alt="" />
      </div>
      <div className="app__hero-span">
        <h4>{heroContent.spanText}</h4>
        <h4>{heroContent.spanText}</h4>
        <h4>{heroContent.spanText}</h4>
        <h4>{heroContent.spanText}</h4>
        <h4>{heroContent.spanText}</h4>
        <h4>{heroContent.spanText}</h4>
        <h4>{heroContent.spanText}</h4>
        <h4>{heroContent.spanText}</h4>
        <h4>{heroContent.spanText}</h4>
        <h4>{heroContent.spanText}</h4>
        <h4>{heroContent.spanText}</h4>
        <h4>{heroContent.spanText}</h4>
      </div>
    </section>
  )
}

export default Hero