import React from 'react'
import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa"
import PropTypes from 'prop-types'

function Navbar({title}) {
    return (
          <div className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
            <div className="flex-1">
                    <div className='btn btn-ghost normal-case text-xl'>
                      <Link to="/">
                        <FaGithub className='inline pr-2 text-3xl' />
                        {title}
                      </Link>
            
                    </div>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal p-0">
              <li>
                        <Link to='/' >
                          Home
                        </Link>
                  </li> 
                  <li>
                        <Link to='/about'>
                          About
                        </Link>
                  </li>
              </ul>
            </div>
      </div>
  )
}

Navbar.defaultProps = {
  title:'GitHub Finder'
}

Navbar.propTypes = {
  title:PropTypes.string
}

export default Navbar