import React, {useState} from 'react';
import images from '../../constants/images';
import './featured.css';

const featuredSection = {
  subtext: 'Made with Love',
  title: 'Featured Burgers',
  expandText: 'View all'
}

const featuredItems = [
  {
    name: 'The Oven Squatter',
    img: images.burger1,
    price: '$25'
  },
  {
    name: 'The Fruit Salad',
    img: images.burger2,
    price: '$17'
  },
  {
    name: 'The Bioluminescent Bay',
    img: images.burger3,
    price: '$250'
  },
  {
    name: 'The Hambledurger',
    img: images.burger4,
    price: '£808'
  },
  {
    name: 'The Sushi Bar',
    img: images.burger5,
    price: '$60'
  },
  {
    name: 'The DMCA Lawsuit',
    img: images.burger6,
    price: '$17.950'
  },
  {
    name: 'The Triumphant Trough',
    img: images.burger7,
    price: '$29'
  },
  {
    name: 'The Placeholder',
    img: images.burger8,
    price: '$15'
  },
]

const Featured = () => {
  const [showAllItems, setShowAllItems] = useState(false);

  const itemsToShow = showAllItems ? featuredItems : featuredItems.slice(0, 6);

  return (
    <section id='featured' className='container'>
      <div className='app__featured'>
        <div className="app__featured-heading">
          <div className="app__featured-heading-content">
            <h5>{featuredSection.subtext}</h5>
            <h1>{featuredSection.title}</h1>
          </div>
          <a onClick={() => setShowAllItems(!showAllItems)}>
            {showAllItems ? 'View less' : featuredSection.expandText}
          </a>
        </div>
        <div className="app__featured-items">
          {itemsToShow.map((item, index) => (
            <div className='app__featured-item'>
              <div className="app__featured-item-pricetag">
                <img src={images.priceTag} alt=""/>
                <h4>{item.price}</h4>
              </div>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured