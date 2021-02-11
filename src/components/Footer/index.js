import React from 'react'

const Footer = (props) => {
  const { copyright } = props

  return (
    <footer className='footer pb-5'>
        <div class="columns">
          <div class="column">
            <img src="/images/logo-1.png" alt="logo" width="150rem" />
          </div>
          <div class="column">
            <div className='content has-text-right'>
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
