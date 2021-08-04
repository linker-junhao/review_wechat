import router from '@/router'
import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'

axios.defaults = {
  ...axios.defaults,
}

const axiosRequest = axios.create({
  baseURL: 'http://rfdjlrj.gnway.org:43294/client_api'
})

axiosRequest.interceptors.request.use((option: AxiosRequestConfig) => {
  const token = localStorage.getItem('token')
  if (!token) {
    ElMessage({
      type: 'warning',
      message: '您尚未登陆，正在跳转至登陆...',
      duration: 600,
      onClose: () => {
        const { protocol, host, pathname, search, hash } = window.location
        const redirect = encodeURIComponent(`${protocol}//${host}/login-redirect-to${pathname}`)
        window.location.href = `http://huidao.cdrfd.com/client/#/Login?redirect=${redirect}`
      }
    })
    return option
  }
  option.headers.Authorization = token
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
  return axiosRequest.get('/user/profile')
}