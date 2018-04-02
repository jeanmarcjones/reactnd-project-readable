import React from 'react'
import { Link } from 'react-router-dom'

function NoMatch() {
  return (
    <div>
      <div>
        <p>Sorry the page your looking for doesn't exist.</p>
        <Link to="/">Back to home page</Link>
      </div>
    </div>
  )
}

export default NoMatch
