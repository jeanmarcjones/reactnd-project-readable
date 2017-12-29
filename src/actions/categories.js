import * as CategoriesAPI from '../utils/api_categories'

export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY'

export const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORY,
  categories
})

export const fetchCategories = () => (dispatch) => (
  CategoriesAPI
    .fetchCategories()
    .then((res) => {
      dispatch(receiveCategories(res))
    })
)