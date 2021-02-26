import React, { useState } from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import SearchBox from '../SearchBox'
import config from '../../../config'

const NavBar = () => {
  const [active, setActive] = useState(false)

  const toggleNavBar = () => {
    setActive(!active)
  }

  return (
    <StaticQuery
      query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
                allContentfulPages(filter: {addToMenu: {eq: true}}) {
                  edges {
                    node {
                      title
                      slug
                    }
                  }
                }
                allContentfulServices {
                  edges {
                    node {
                      title
                      slug
                    }
                  }
                }
            }
        `}
      render={data => (
        <nav className='navbar is-fixed-top' aria-label='main navigation'>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item is-size-4' >
              <img src={config.site.logo} className="pr-2" />
              <span className="has-text-primary">Digital</span>&nbsp;<span className="has-text-dark">Stride</span>
            </Link>
            <button
              className={`button navbar-burger ${active ? 'is-active' : ''}`}
              data-target='navMenu'
              onClick={toggleNavBar}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div className={`navbar-menu ${active ? 'is-active' : ''}`} id='navMenu'>

            <div className='navbar-end'>   
              {data.allContentfulServices && data.allContentfulServices.edges && data.allContentfulServices.edges.length>0 &&
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">Services</a>
                  <div className="navbar-dropdown">
                    {data.allContentfulServices.edges.map(({node}, index)=>(
                      <Link className='navbar-item' key={index} to={`/service/${node.slug}`}>{node.title}</Link>
                    ))}
                  </div>
                </div>
              }           
              {data.allContentfulPages && data.allContentfulPages.edges.map(({node}, index) => (
                <Link className='navbar-item' key={index} to={`/${node.slug}`}>{node.title}</Link>
              ))}
              <SearchBox searchIndex={data.siteSearchIndex.index} />
              {/* <Link className='navbar-item' to='/about-us'>
                About
              </Link> */}
              {/* <Link className='navbar-item' to='/pricing'>
                Pricing
              </Link>
              <Link className='navbar-item' to='/blog'>
                Blog
              </Link> */}
              <div className='navbar-item'>
                <div className='field is-grouped'>
                  <p className='control'>
                    <Link
                      className='button is-primary is-outlined'
                      to='/contact-us'>
                      Contact Us
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    />
  )
}

export default NavBar
