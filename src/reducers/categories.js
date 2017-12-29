import {
  RECEIVE_CATEGORY
} from '../actions/categories'

const initialState = {
  categories: []
}

export default function categories(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CATEGORY :
      return {
        ...state,
        categories: [ ...state.categories, ...action.categories ]
      }
    default :
      return state
  }
}
