import {
  RECEIVE_POSTS,
  UPDATE_POST
} from '../actions/posts'

export default function posts(state = {}, action) {
  switch(action.type) {
    case RECEIVE_POSTS :
      return {
        ...state,
        ...action.posts
      }
    case UPDATE_POST :
      const { post } = action

      return {
        ...state,
        [post.id]: post
      }
    default :
      return state
  }
}
