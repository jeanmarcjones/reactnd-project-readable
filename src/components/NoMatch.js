import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function NoMatch() {
  return (
    <Fragment>
      <p>Sorry the page your looking for doesn't exist.</p>
      <Link to="/">Back to home page</Link>
    </Fragment>
  )
}

export default NoMatch
