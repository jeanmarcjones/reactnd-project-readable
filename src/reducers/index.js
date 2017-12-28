import {
  RECEIVE_CATEGORY
} from '../actions'

const initialState = {
  categories: []
}

function categories(state = initialState, action) {
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

export default categories
