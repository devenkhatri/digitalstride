import React from 'react'
import PropTypes from 'prop-types'
import ProgressiveImageContainer from '../ProgressiveImageContainer'
import _ from 'lodash'

const Offerings = (props) => {
  const { gridItems } = props
  console.log(gridItems)
  console.log("gridItems[0].image",_.get(gridItems[0].image, ['fluid']))
  return (
    <div className='columns is-multiline'>
      {gridItems.map((item, idx) => (
        <div key={idx} className={`column is-3`} >
          <div className="card">
            <div className="card-image"><figure className="image is-4by3"><ProgressiveImageContainer
              image={item.image}
              alt={item.title}
            /></figure></div>
            <div className="card-content">
              <h4 className="title is-spaced is-5">{item.title}</h4>
              <p className="subtitle is-6 has-text-justified">{item.text}</p>
              <a href={item.url}>Read more</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
Offerings.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
}

export default Offerings
