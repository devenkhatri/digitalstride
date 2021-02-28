import React from 'react'
import ProgressiveImageContainer from '../ProgressiveImageContainer'
import { HTMLContent } from '../Content'

export const HeroSection = (props) => {
  const { title, content, image, className } = props
  return (
    <section className={`hero ${className}`}>
      <div className='hero-body'>
        <div className='container'>
          <div className="columns is-vcentered">
            <div className={`column is-${image ? "6" : "12"}`}>
              <div className="section">
              <h2 className="title is-spaced">{title}</h2>
              <HTMLContent className="subtitle" content={content} />
              </div>
            </div>
            {image &&
              <div className="column is-5 is-offset-1">
                <figure className="image">
                  <ProgressiveImageContainer
                    image={image}
                    alt={title}
                  />
                </figure>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
