import * as CommentAPI from '../utils/api_comments'
import { increaseComments, decreaseComments } from './posts'
import {
  RECEIVE_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT
} from '../actions/types'

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
      dispatch(increaseComments({ id: res.parentId }))
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
      dispatch(decreaseComments({ id: res.parentId }))
    })
)
