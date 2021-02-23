import React from 'react'
import PropTypes from 'prop-types'
import ProgressiveImageContainer from '../ProgressiveImageContainer'
import _ from 'lodash'

const Offerings = (props) => {
  const { gridItems } = props
  // console.log(gridItems)
  // console.log("gridItems[0].image", _.get(gridItems[0].image, ['fluid']))
  return (
    <div className='columns is-multiline'>
      {gridItems.map((item, idx) => (
        <div key={idx} className={`tile is-parent is-3`} >
          <article className="tile is-vertical is-child box">
            <figure className="image has-background-primary" style={{ maxHeight: "15rem", minHeight: "15rem", overflow: "hidden" }}>
              <ProgressiveImageContainer
                image={item.image}
                alt={item.title}
              />
            </figure>
            <p className="title pt-5 "><a className="has-text-dark" href={item.url}>{item.title}</a></p>
            <div className="content has-text-justified">{item.text}</div>
          </article>
        </div>
      ))}
    </div>
  )
}

export default Offerings
