import React from 'react'
import PropTypes from 'prop-types'
import ProgressiveImageContainer from '../ProgressiveImageContainer'

const Offerings = (props) => {
  const { gridItems } = props
  const gridCol = 12 / (gridItems?gridItems.length:1)
  return (
    <div className='columns is-multiline'>
      {gridItems.map((item, idx) => (
        <div key={idx} className={`column is-${gridCol}`} >
          <div className="card">
            <div className="card-image"><figure className="image is-4by3"><ProgressiveImageContainer
              image={item.image}
              alt={item.title}
            /></figure></div>
            <div className="card-content">
              <h4 className="title is-spaced is-4">{item.title}</h4>
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
