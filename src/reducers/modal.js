import {
  ADD_COMMENT_MODAL_OPEN,
  ADD_COMMENT_MODAL_CLOSE
} from "../actions/modal";

const initialState = {
  addCommentModalOpen: false
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
   default :
     return state
  }
}
