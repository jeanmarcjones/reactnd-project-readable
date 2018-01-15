import { combineReducers } from 'redux'
import categories from './categories'
import posts from './posts'
import comments from './comments'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  categories,
  posts,
  comments,
  form: formReducer
})
