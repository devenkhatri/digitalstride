import React from 'react'

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
              <p className="subtitle">{content}</p>
              </div>
            </div>
            {image &&
              <div className="column is-5 is-offset-1">
                <div className="is-flex is-justify-content-center is-align-items-center">
                  <img className="is-max-w-lg" src={image} alt={title} />
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
