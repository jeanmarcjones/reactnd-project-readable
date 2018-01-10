import * as API from './api'

export const fetchPost = (id) =>
  fetch(`${API.url}/posts/${id}`, {
    method: "GET",
    headers: {
      ...API.headers,
      "Content-Type": "application/json"
    }
  }).then(res => res.json())

export const fetchPosts = () =>
  fetch(`${API.url}/posts`, { headers: API.headers })
    .then(res => res.json())
