import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

function CategoriesNav(props) {
    return (
      <div className="tabs  is-centered  is-marginless">
        <ul className="capitalise">
          <li>
            <NavLink
              exact
              to="/"
              activeClassName="is-active"
            >All</NavLink>
          </li>
          {props.categories.map((category) => (
            <li key={category.path}>
              <NavLink
                to={`/${category.name}`}
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

export default connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(CategoriesNav)
