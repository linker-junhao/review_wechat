import axios, { AxiosRequestConfig } from 'axios'

axios.defaults = {
  ...axios.defaults,
}

const axiosRequest = axios.create({
  baseURL: 'http://rfdjlrj.gnway.org:43294/api'
})

axiosRequest.interceptors.request.use((option: AxiosRequestConfig) => {
  console.log(option)
  option.headers.Authorization = 'auth6104cde8900f16.16890872'
  return option
}, err => {
  console.log(err)
})

axiosRequest.interceptors.response.use(response => {
  console.log(response)
  return response
}, err => {
  console.log(err)
})

export function getUserInfo () {
  return axiosRequest.get('/user')
}