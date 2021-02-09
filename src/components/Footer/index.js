import React from 'react'

const Footer = (props) => {
  const { copyright } = props

  return (
    <footer className='footer pb-5'>
      <div className='container'>
        <div className='content has-text-centered'>
          <p>
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
