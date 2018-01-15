import {
  RECEIVE_POSTS,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST
} from '../actions/posts'

const initialState = {
  byId: {},
  allIds: []
}

export default function posts(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_POSTS :
      const { posts } = action
      return {
        ...state,
        byId: {
          ...state.byId,
          ...posts
        },
        allIds: Object.keys(posts).map((k) => k)
      }
    case ADD_POST :
    case UPDATE_POST :
      const { post } = action
      return {
        ...state,
        [post.id]: post
      }
    case DELETE_POST :
      const prunedIds = state.allIds.filter((item) => item !== action.id )
      delete state.byId[action.id]

      return {
        byId: { ...state.byId },
        allIds: prunedIds
      }
    default :
      return state
  }
}
