export const ADD_COMMENT_MODAL_OPEN = 'ADD_COMMENT_MODAL_OPEN'
export const ADD_COMMENT_MODAL_CLOSE = 'ADD_COMMENT_MODAL_CLOSE'
export const EDIT_COMMENT_MODAL_OPEN = 'EDIT_COMMENT_MODAL_OPEN'
export const EDIT_COMMENT_MODAL_CLOSE = 'EDIT_COMMENT_MODAL_CLOSE'

export const addCommentModalOpen = () => ({
  type: ADD_COMMENT_MODAL_OPEN
})

export const addCommentModalClose = () => ({
  type: ADD_COMMENT_MODAL_CLOSE
})

export const editCommentModalOpen = ({ id }) => ({
  type: EDIT_COMMENT_MODAL_OPEN,
  id
})

export const editCommentModalClose = () => ({
  type: EDIT_COMMENT_MODAL_CLOSE
})
