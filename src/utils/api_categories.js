import * as API from './api'

export const fetchCategories = () =>
  fetch(`${API.url}/categories`, { headers: API.headers })
    .then(res => res.json())
    .then(data => data.categories)
