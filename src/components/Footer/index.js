import React from 'react'

const Footer = (props) => {
  const { copyright } = props

  return (
    <footer className='footer pb-5'>
        <div className="columns">
          {/* <div className="column is-size-4">
            <span className="has-text-primary">Digital</span>&nbsp;<span className="has-text-dark">Stride</span>
          </div> */}
          <div className="column">
            <div className='content has-text-centered'>
              <p>
                {copyright}
              </p>
            </div>
          </div>
        </div>        

    </footer>
  )
}

export default Footer
