import React, { Component } from 'react';
import styles from './index.module.scss'

class NotFound extends Component {
  render () {
    return (
      <div className={styles.notFound}>404 Not Found</div>
    )
  }
}

export default NotFound;