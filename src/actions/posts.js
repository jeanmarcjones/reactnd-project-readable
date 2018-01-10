import * as PostsAPI from '../utils/api_posts'
import * as ScoreAPI from '../utils/api_score'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const GET_POST = 'GET_POST'
export const UPDATE_POST = 'UPDATE_POST'

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
})

export const getPost = (post) => ({
  type: GET_POST,
  post
})

export const updatePost = (post) => ({
  type: UPDATE_POST,
  post
})

export const fetchPost = ({ id }) => (dispatch) => (
  PostsAPI
    .fetchPost(id)
    .then((res) => {
      dispatch(getPost(res))
    })
)

export const fetchPosts = () => (dispatch) => (
  PostsAPI
    .fetchPosts()
    // creates posts object with keys set to post.id
    .then((res) => Object.assign(...Object.entries(res).map(([key, post]) => ({
      [post.id]: post
    }))))
    .then((res) => {
      dispatch(receivePosts(res))
    })
)

export const updateScore = ({ id, component, option }) => (dispatch) => {
  ScoreAPI
    .setScore(id, component, option)
    .then((res) => {
      dispatch(updatePost(res))
    })
}
