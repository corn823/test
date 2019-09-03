import axios from '../config/AxiosConfig'
import { config } from '@/config/config'

const api = {
  async get (url, data, baseURLCondition) {
    if (baseURLCondition) {
      this.baseURLModify(baseURLCondition)
    } else {
      axios.defaults.baseURL = config.baseURL
    }
    try {
      let res = await axios.get(url, {params: data})
      return new Promise((resolve, reject) => {
        if (res.data.status === '200') {
          resolve(res)
        } else {
          reject(res)
        }
      })
    } catch (err) {
      console.log(err)
    }
  },
  async post (url, data) {
    try {
      let res = await axios.post(url, data)
      return new Promise((resolve, reject) => {
        if (res.data.status === '200') {
          resolve(res)
        } else {
          reject(res)
        }
      })
    } catch (err) {
      console.log(err)
    }
  },
  baseURLModify (baseURLCondition) {
    const prefix = baseURLCondition.prefix
    const index = axios.defaults.baseURL.search(prefix)
    axios.defaults.baseURL = axios.defaults.baseURL.substring(0, index)
  }
}
export { api }
