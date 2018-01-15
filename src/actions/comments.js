import * as CommentAPI from '../utils/api_comments'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export const receiveComments = ({ comments }) => ({
  type: RECEIVE_COMMENTS,
  comments
})

export const addComment = ({ comment }) => ({
  type: ADD_COMMENT,
  comment
})

export const updateComment = ({ comment }) => ({
  type: UPDATE_COMMENT,
  comment
})

export const deleteComment = ({ id }) => ({
  type: DELETE_COMMENT,
  id
})

export const createComment = ({ comment }) => (dispatch) => (
  CommentAPI
    .createComment(comment)
    .then((res) => {
      dispatch(addComment({ comment: res }))
    })
)

export const editComment = ({ comment }) => (dispatch) => (
  CommentAPI
    .editComment(comment)
    .then((res) => {
      dispatch(updateComment({ comment: res }))
    })
)

export const removeComment = ({ id }) => (dispatch) => (
  CommentAPI
    .deleteComment({ id })
    .then((res) => {
      dispatch(deleteComment({ id: res.id }))
    })
)
