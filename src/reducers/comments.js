import {
  RECEIVE_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT
} from '../actions/comments'

const initialState = {
  byId: {},
  allIds: []
}

export default function comments(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_COMMENTS :
      const { comments } = action
      return {
        ...state,
        byId: {
          ...state.byId,
          ...comments
        },
        allIds: Object.keys(comments).map((k) => k)
      }
    case ADD_COMMENT :
    case UPDATE_COMMENT :
      const { comment } = action

      return {
        ...state,
        [comment.id]: comment
      }
    case DELETE_COMMENT :
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
