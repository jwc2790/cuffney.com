import React from 'react'
import Nav from 'components/Nav'

import styles from './NotFound.module.css'

const NotFound = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.header}>404. Not Found.</h1>
    <Nav active='not-found' />
  </div>
)

export default NotFound
