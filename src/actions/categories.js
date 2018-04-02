import * as CategoriesAPI from '../utils/api_categories'
import {
  RECEIVE_CATEGORY,
  ADD_CATEGORY
} from '../actions/types'

export const receiveCategories = ({ categories }) => ({
  type: RECEIVE_CATEGORY,
  categories
})

export const addCategory = ({ name, path }) => ({
  type: ADD_CATEGORY,
  name,
  path
})

export const fetchCategories = () => (dispatch) => (
  CategoriesAPI
    .fetchCategories()
    // creates categories object with keys set to category.id
    .then((res) => Object.assign(...Object.entries(res).map(([key, category]) => ({
      [category.name]: category
    }))))
    .then((res) => {
      dispatch(receiveCategories({ categories: res }))
    })
)
