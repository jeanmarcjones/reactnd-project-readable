import React from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'

const CategoriesNav = ({ categories }) => {
    return (
      <div className="tabs  is-centered  is-marginless">
        <ul className="is-capitalized  is-marginless">
          <li>
            <NavLink
              exact
              to="/"
              className="button--transition"
              activeClassName="is-active"
            >All</NavLink>
          </li>
          {categories.map((category) => (
            <li key={category.path}>
              <NavLink
                to={`/${category.name}`}
                className="button--transition"
                activeClassName="is-active"
              >{category.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    )
}

const mapStateToProps = ({ categories }) => ({
  // Converts object into an array
  categories: Object.keys(categories).map((category) => categories[category])
})

export default withRouter(connect(
  mapStateToProps
)(CategoriesNav))
