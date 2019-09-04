import axios from 'axios'
import { config } from './config'
// import store from '@/store'

// axios.defaults.timeout = 100000
axios.defaults.baseURL = config.baseURL
axios.interceptors.request.use(config => {
  config.headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-header': '*',
    'authorization': sessionStorage.getItem('token')
  }
  return config
}, err => {
  return Promise.reject(err)
})

axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error.code === 'ECONNABORTED') {
    console.log(error)
    console.log(error.code)
    const res = { data: { status: '1', data: '连线超时，请重新查詢', error: '连线超时，请重新查詢' } }
    return Promise.resolve(res)
  } else {
    console.log(error)
    console.log(error.response)
    console.log(error.response.status)
    let res = {}
    switch (error.response.status) {
      default:
        res = { data: { status: '1', data: '请求伺服器异常', msg: '请求伺服器异常' } }
        // store
        //   .dispatch('Logout')
        //   .then(res => {
        //     if (res === 'logout') {
        //       location.reload()
        //     } else {
        //       location.reload()
        //     }
        //   })
        //   .catch(err => {
        //     console.log(err)
        //     location.reload()
        //   })
    }
    return Promise.resolve(res)
  }
})

export default axios
