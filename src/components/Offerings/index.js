import React from 'react'
import { HTMLContent } from '../Content'
import ProgressiveImageContainer from '../ProgressiveImageContainer'
import _ from 'lodash'

const Offerings = (props) => {
  const { gridItems, title = "Some of our awesome features" } = props
  return (
    <>
      <h2 className="title has-text-centered mb-4">{title}</h2>
      <div className='columns is-multiline'>
        {gridItems.map((item, idx) => (
          <div key={idx} className={`tile is-parent is-3`} >
            <article className="tile is-vertical is-child box">
              <a className="has-text-primary" href={item.url}>
                <figure className="image has-background-primary" style={{ maxHeight: "15rem", minHeight: "15rem", overflow: "hidden" }}>
                  <ProgressiveImageContainer
                    image={item.image}
                    alt={item.title}
                  />
                </figure>
                <h3 className="title is-size-4 pt-5 is-family-code">{item.title}</h3>
                <HTMLContent className="has-text-justified is-family-code" content={item.text} />
              </a>
            </article>
          </div>
        ))}
      </div>
    </>
  )
}

export default Offerings
