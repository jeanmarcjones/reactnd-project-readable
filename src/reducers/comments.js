import {
  RECEIVE_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT
} from '../actions/types'

const initialState = {
  byId: {},
  allIds: []
}

export default function comments(state = initialState, action) {
  const prunedIds = state.allIds.filter((item) => item !== action.id )

  switch(action.type) {
    case RECEIVE_COMMENTS :
      return {
        ...state,
        byId: {
          ...state.byId,
          ...action.comments
        },
        allIds: [ ...state.allIds,  ...Object.keys(action.comments).map((k) => k) ]
      }
    case ADD_COMMENT :
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.comment.id]: action.comment
        },
        allIds: [ ...state.allIds, action.comment.id ]
      }
    case UPDATE_COMMENT :
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.comment.id]: action.comment
        }
      }
    case DELETE_COMMENT :
      delete state.byId[action.id]

      return {
        byId: { ...state.byId },
        allIds: prunedIds
      }
    default :
      return state
  }
}
