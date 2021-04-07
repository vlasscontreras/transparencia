import axios from 'axios'

const api = axios.create({
  baseURL: '/api/v1'
})

api.defaults.headers.common['Content-Type'] = 'application/json'

export default api
