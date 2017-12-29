import {
  RECEIVE_CATEGORY
} from '../actions/categories'

export default function categories(state = {}, action) {
  switch (action.type) {
    case RECEIVE_CATEGORY :
      return {
        ...state,
        ...categories
      }
    default :
      return state
  }
}
