import * as PostsAPI from '../utils/api_posts'
import * as ScoreAPI from '../utils/api_score'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const UPDATE_POST = 'UPDATE_POST'

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
})

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

export const updatePost = (post) => ({
  type: UPDATE_POST,
  post
})

export const updateScore = ({ id, component, option }) => (dispatch) => {
  ScoreAPI
    .setScore(id, component, option)
    .then((res) => {
      dispatch(updatePost(res))
    })
}
