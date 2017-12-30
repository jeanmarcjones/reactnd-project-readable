import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions/categories'

class CategoriesNav extends Component {
  componentDidMount() {
    this.props.getCategories()
  }
  render() {
    return (
      <div className="tabs  is-centered  is-marginless">
        <ul className="capitalise">
          {this.props.categories.map((category) => (
            <li key={category.path}><a>{category.name} </a></li>
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesNav)
