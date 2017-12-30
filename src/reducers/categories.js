import {
  RECEIVE_CATEGORY,
  ADD_CATEGORY
} from '../actions/categories'

export default function categories(state = {}, action) {
  const { categories, name, path } = action

  switch (action.type) {
    case RECEIVE_CATEGORY :
      return {
        ...state,
        ...categories
      }
    case ADD_CATEGORY :
      return {
        ...state,
        [name]: {
          name: name,
          path: path
        }
      }
    default :
      return state
  }
}
