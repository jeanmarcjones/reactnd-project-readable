import {
  ADD_COMMENT_MODAL_OPEN,
  ADD_COMMENT_MODAL_CLOSE,
  EDIT_COMMENT_MODAL_OPEN,
  EDIT_COMMENT_MODAL_CLOSE
} from '../actions/types'

const initialState = {
  addCommentModalOpen: false,
  editCommentModalOpen: {
    isOpen: false,
    commentId: ''
  }
}

export default function modal(state = initialState, action) {
 switch(action.type) {
   case ADD_COMMENT_MODAL_OPEN :
     return {
       ...state,
       addCommentModalOpen: true
     }
   case ADD_COMMENT_MODAL_CLOSE :
     return {
       ...state,
       addCommentModalOpen: false
     }
   case EDIT_COMMENT_MODAL_OPEN :
     return {
       ...state,
       editCommentModalOpen: {
         ...state.editCommentModalOpen,
         isOpen: true,
         commentId: action.id
       }
     }
   case EDIT_COMMENT_MODAL_CLOSE :
     return {
       ...state,
       editCommentModalOpen: {
         ...state.editCommentModalOpen,
         isOpen: false,
         commentId: ''
       }
     }
   default :
     return state
  }
}
