import axios from 'axios'

const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://www.transparencia.gob.sv/api/v1'
})

api.defaults.headers.common['Content-Type'] = 'application/json'

export default api
