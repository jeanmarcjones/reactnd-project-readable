import * as PostsAPI from '../utils/api_posts'

import { receiveComments } from "./comments";

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const GET_POST = 'GET_POST'
export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'

export const receivePosts = ({ posts }) => ({
  type: RECEIVE_POSTS,
  posts
})

export const getPost = ({ post }) => ({
  type: GET_POST,
  post
})

export const addPost = ({ post }) => ({
    type: ADD_POST,
    post
})

export const updatePost = ({ post }) => ({
  type: UPDATE_POST,
  post
})

export const deletePost = ({ id }) => ({
  type: DELETE_POST,
  id
})

export const fetchPost = ({ id }) => (dispatch) => (
  PostsAPI
    .fetchPost(id)
    .then((res) => {
      dispatch(getPost({ post: res }))
    })
)

export const fetchPostsWithComments = () => (dispatch, getState) => (
  PostsAPI
    .fetchPosts()
    // creates posts object with keys set to post.id
    .then((res) => Object.assign(...Object.entries(res).map(([key, post]) => ({
        [post.id]: post
    }))))
    .then((res) => {
      dispatch(receivePosts({ posts: res }))
      dispatch(fetchPostComments({ posts: getState().posts }))
    })
    .catch((error) => {
      console.log('Looks like there was a problem: \n', error);
    })
)

export const fetchPostComments = ({ posts }) => (dispatch) => (
  posts.allIds
    // Checks if post has any comments
    .filter((id) => posts.byId[id].commentCount > 0)
    // Gets post comments
    .forEach((id) => {
      PostsAPI
        .fetchPostComments(id)
        // creates posts object with keys set to comment.id
        .then((res) => Object.assign(...Object.entries(res).map(([key, comment]) => ({
          [comment.id]: comment
        }))))
        .then((res) => {
          dispatch(receiveComments({ comments: res }))
        })
        .catch((error) => {
          console.log('Looks like there was a problem: \n', error);
        }
      )
    }
  )
)

export const createPost = ({ post }) => (dispatch) => (
  PostsAPI
    .createPost(post)
    .then((res) => {
      dispatch(addPost({ post: res }))
    })
)

export const editPost = ({ post }) => (dispatch) => (
  PostsAPI
    .editPost(post)
    .then((res) => {
      dispatch(updatePost({ post: res }))
    })
)

export const removePost = ({ id }) => (dispatch) => (
  PostsAPI
    .deletePost({ id })
    .then((res) => {
      dispatch(deletePost({ id: res.id }))
    })
)
