import {
  RECIEVE_POSTS
} from '../actions/posts'

export default function posts(state = {}, action) {
  switch(action.type) {
    case RECIEVE_POSTS :
      return {}
    default :
      return state
  }
}
