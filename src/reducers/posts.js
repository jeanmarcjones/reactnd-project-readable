import {
  RECEIVE_POSTS,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST
} from '../actions/posts'

export default function posts(state = {}, action) {
  switch(action.type) {
    case RECEIVE_POSTS :
      return {
        ...state,
        ...action.posts
      }
    case ADD_POST :
    case UPDATE_POST :
      const { post } = action

      return {
        ...state,
        [post.id]: post
      }
    case DELETE_POST :
      // Split state into two object
      let { [action.id]: deletedItem, ...rest } = state

      return {
        ...rest
      }
    default :
      return state
  }
}
