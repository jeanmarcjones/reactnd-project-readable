import * as API from './api'

export const fetchPosts = () =>
  fetch(`${API.url}/posts`, { headers: API.headers })
    .then(res => res.json())
    .then(data => data.posts)
