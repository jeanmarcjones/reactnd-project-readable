import * as PostsAPI from '../utils/api_posts'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'

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
