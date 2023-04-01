import React from 'react';
import { images } from '../../constants';
import './footer.css';

const newsletter = {
  heading: 'Join our newsletter',
  subtext: 'Get updated on the freshest news!',
}

const footerLinks = [
  {
    title: 'About',
    links: [
      {
        label: 'Our Team',
        link: '#footer'
      },
      {
        label: 'Our Values',
        link: '#footer'
      },
      {
        label: 'Our Story',
        link: '#footer'
      },
    ]
  },
  {
    title: 'Menu',
    links: [
      {
        label: 'Beef Burgers',
        link: '#footer'
      },
      {
        label: 'Vegan Burgers',
        link: '#footer'
      },
      {
        label: 'Sides',
        link: '#footer'
      },
      {
        label: 'Drinks',
        link: '#footer'
      },
      {
        label: 'New Concepts',
        link: '#footer'
      },
    ]
  },
  {
    title: 'Locations',
    links: [
      {
        label: 'Los Angeles',
        link: '#footer'
      },
      {
        label: 'Miami',
        link: '#footer'
      },
      {
        label: 'Aalst',
        link: '#footer'
      },
      {
        label: 'Denderleeuw',
        link: '#footer'
      },
      {
        label: 'Minas Ithil',
        link: '#footer'
      },
    ]
  },
  {
    title: 'Company',
    links: [
      {
        label: 'Careers',
        link: '#footer'
      },
      {
        label: 'Become an Affiliate',
        link: '#footer'
      },
    ]
  },
  {
    title: 'Learn',
    links: [
      {
        label: 'Blog',
        link: '#footer'
      },
      {
        label: 'Recipe Books',
        link: '#footer'
      },
      {
        label: 'Community',
        link: '#footer'
      },
    ]
  },
]

const Footer = () => {
  return (
    <section id='footer' className='app__footer'>
      <div className="app__footer-span">
        <h4>TAKE A BITE</h4>
        <h4>TAKE A BITE</h4>
        <h4>TAKE A BITE</h4>
        <h4>TAKE A BITE</h4>
        <h4>TAKE A BITE</h4>
        <h4>TAKE A BITE</h4>
        <h4>TAKE A BITE</h4>
        <h4>TAKE A BITE</h4>
        <h4>TAKE A BITE</h4>
        <h4>TAKE A BITE</h4>
      </div>
      <div className="app__footer-container">
        <div className="app__footer-newsletter">
          <div className="app__footer-newsletter-left">
            <h4>{newsletter.heading}</h4>
            <p>{newsletter.subtext}</p>
          </div>
          <div className="app__footer-newsletter-right">
            <div className="app__footer-newsletter-sign">
              <input type="email" placeholder='Enter your email'/>
              <button>Subscribe</button>
            </div>
            <p>By subscribing you agree to our Privacy Policy.</p>
          </div>
        </div>
        <div className="app__footer-links">
          <div className="app__footer-links-brand">
            <img src={images.logo} alt="" />
          </div>
          {footerLinks.map((footerLink) => (
            <div key={footerLink.title} className="app__footer-links-list">
              <h4>{footerLink.title}</h4>
              <ul>
                {footerLink.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.link}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;