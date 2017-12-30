import * as CategoriesAPI from '../utils/api_categories'

export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY'
export const ADD_CATEGORY = 'ADD_CATEGORY'

export const receiveCategories = (categories) => ({
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
      dispatch(receiveCategories(res))
    })
)
