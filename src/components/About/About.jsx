import React, {useState} from 'react';
import { images } from '../../constants';
import './about.css';

const aboutSection = {
  subtext: 'Happiness in your hands',
  title: 'Feel the Hype'
}

const aboutCards = [
  {
    decorator: images.eyes6,
    title: 'Abundant Nutrition',
    description: 'Each bite serves you with the healthiest local ingredients.',
    expandText: 'Learn More >',
    expansionImg: images.burgerBite4,
    expansionParagraphs: [
      "I have nothing to put here. It's a fictional company after all. This is just a section within which the client could put some elaboration on the pointer within the card.",
      "Designed so you can put as many paragraphs in here as you like.",
      "This one is for the first card."
    ]
  },
  {
    decorator: images.eyes2,
    title: 'Higher Quality',
    description: 'We only use grass-fed, grass-finished beef.',
    expandText: 'Learn More >',
    expansionImg: images.burgerBite7,
    expansionParagraphs: [
      "I have nothing to put here. It's a fictional company after all. This is just a section within which the client could put some elaboration on the pointer within the card.",
      "Designed so you can put as many paragraphs in here as you like.",
      "This one is for the second card."
    ]
  },
  {
    decorator: images.eyes1,
    title: 'Award Winning Flavors',
    description: 'Our burgers have gained international recognition for most unique flavors.',
    expandText: 'Learn More >',
    expansionImg: images.burgerBite8,
    expansionParagraphs: [
      "I have nothing to put here. It's a fictional company after all. This is just a section within which the client could put some elaboration on the pointer within the card.",
      "Designed so you can put as many paragraphs in here as you like.",
      "This one is for the third card."
    ]
  }
]

const About = () => {
  const [expandedContent, setExpandedContent] = useState(null);
  const [activeCard, setActiveCard] = useState(window.innerWidth > 1150 ? null : null);

const handleCardHover = (cardIndex) => {
  if (activeCard !== cardIndex && window.innerWidth > 1150) {
    setActiveCard(cardIndex);
  }
};

  const handleExpandClick = (cardIndex) => {
    const card = aboutCards[cardIndex];
    setExpandedContent({
      image: card.expansionImg,
      paragraphs: card.expansionParagraphs,
    });
  };

  const handleCloseClick = () => {
    setExpandedContent(null);
  };

  return (
    <section id="about" className="container app__about">
      <h5>{aboutSection.subtext}</h5>
      <h1>{aboutSection.title}</h1>
      <div className="app__about-cards">
        {aboutCards.map((card, index) => (
          <div
            className={`app__about-card ${
              activeCard === index ? "activeCard" : ""
            }`}
            onMouseEnter={() => handleCardHover(index)}
            key={index}
          >
            <div className="app__about-card-img">
              <img src={card.decorator} alt="decorator" />
            </div>
            <div className="app__about-card-content">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
            <a onClick={() => handleExpandClick(index)}>
              {card.expandText}
            </a>
          </div>
        ))}
      </div>
      {expandedContent && (
        <div className="app__about-expanded slide-in-fwd-center">
          <a onClick={handleCloseClick}>Close</a>
            <div className='app__about-expanded-content'>
              <img src={expandedContent.image} alt="expanded"/>
              {expandedContent.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
        </div>
      )}
    </section>
  );
};

export default About