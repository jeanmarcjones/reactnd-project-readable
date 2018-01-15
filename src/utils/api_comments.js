import * as API from './api'

export const fetchComment = (id) =>
  fetch(`${API.url}/comments/${id}`, {
    method: "GET",
    headers: {
      ...API.headers,
      "Content-Type": "application/json"
    }
  }).then(res => res.json())

export const createComment = (comment) =>
  fetch(`${API.url}/comments`, {
    method: "comment",
    headers: {
      ...API.headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(comment)
  }).then(res => res.json())

export const editComment = (comment) =>
  fetch(`${API.url}/comments/${comment.id}`, {
    method: "PUT",
    headers: {
      ...API.headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(comment)
  }).then(res => res.json())

export const deleteComment = ({ id }) =>
  fetch(`${API.url}/comments/${id}`, {
    method: "DELETE",
    headers: {
      ...API.headers,
      "Content-Type": "application/json"
    }
  }).then(res => res.json())
