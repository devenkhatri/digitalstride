import React from 'react'

export const HeroSection = (props) => {
  const { title, content, className } = props

  return (
    <section className={`hero ${className}`}>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title'>{title}</h1>
                <p>{content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
