import * as API from './api'

export const setScore = (id, component, option) =>
  fetch(`${API.url}/${component}/${id}`, {
    method: "POST",
    headers: {
      ...API.headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option })})
    .then(res => res.json())
    .then(res => ({
      ...res,
      type: `${component}`
    }))
