import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './Nav.module.css'

const Nav = (props) => {
  const { active } = props
  return (
    <div className={styles.nav}>
      <hr />
      <p>
        { active !== '/' && <Link to='/'>Home.</Link> }
        { active !== '/resume' && <a href='https://resume.cuffney.com' target='_blank' rel='noopener noreferrer'>Resume.</a> }
        { /* { active !== '/work' && <Link to="/work">Work.</Link> } */ }
      </p>
      <hr />
    </div>
  )
}

Nav.propTypes = {
  active: propTypes.string.isRequired
}

export default Nav
