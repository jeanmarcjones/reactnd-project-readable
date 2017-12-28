import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions'

class CategoriesNav extends Component {
  componentDidMount() {
    this.props.getCategories()
  }
  render() {
    return (
      <div className="tabs  is-centered">
        <ul className="capitalise">
          {this.props.categories.map((category) => (
            <li key={category.path}><a>{category.name} </a></li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories
})

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesNav)
