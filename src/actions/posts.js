import * as PostsAPI from '../utils/api_posts'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const recievePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
})

export const fetchPosts = () => (dispatch) => (
  PostsAPI
    .fetchPosts()
    .then()
)
