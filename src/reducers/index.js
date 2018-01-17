import { combineReducers } from 'redux'
import categories from './categories'
import posts from './posts'
import comments from './comments'
import modal from './modal'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  categories,
  posts,
  comments,
  modal,
  form: formReducer
})
