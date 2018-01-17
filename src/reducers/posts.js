import {
  RECEIVE_POSTS,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  INCREASE_COMMENTS,
  DECREASE_COMMENTS
} from '../actions/posts'

const initialState = {
  byId: {},
  allIds: []
}

export default function posts(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_POSTS :
      return {
        ...state,
        byId: {
          ...state.byId,
          ...action.posts
        },
        allIds: Object.keys(action.posts).map((k) => k)
      }
    case ADD_POST :
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.post.id]: action.post
        },
        allIds: [ ...state.allIds, action.post.id ]
      }
    case UPDATE_POST :
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.post.id]: action.post
        }
      }
    case DELETE_POST :
      const prunedIds = state.allIds.filter((item) => item !== action.id )
      delete state.byId[action.id]

      return {
        byId: { ...state.byId },
        allIds: prunedIds
      }
    case INCREASE_COMMENTS :
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: {
            ...state.byId[action.id],
            commentCount: state.byId[action.id].commentCount += 1
          }
        }
      }
    case DECREASE_COMMENTS :
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: {
            ...state.byId[action.id],
            commentCount: state.byId[action.id].commentCount -= 1
          }
        }
      }
    default :
      return state
  }
}
