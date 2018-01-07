import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchCategories } from '../actions/categories'

class CategoriesNav extends Component {
  componentDidMount() {
    this.props.getCategories()
  }
  render() {
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
          {this.props.categories.map((category) => (
            <li key={category.path}>
              <NavLink
                to={'/' + category.name}
                activeClassName="is-active"
              >{category.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => ({
  // Converts object into an array
  categories: Object.keys(categories).map((category) => categories[category])
})

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(fetchCategories())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(CategoriesNav)
