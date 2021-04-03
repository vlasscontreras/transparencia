import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://www.transparencia.gob.sv/api/v1'
})

export default instance
