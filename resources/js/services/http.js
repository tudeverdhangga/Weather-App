import axios from 'axios'
import qs from 'qs'

export const API_DOMAIN = window?.location?.origin

const HTTP = {
  request(method, url, data, headers = {}) {
    // perform axios request
    return axios.request({
      url,
      data: qs.stringify(data),
      method,
      headers: Object.assign(
        {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json'
        },
        headers
      )
    })
  },
  get(url, data, headers = {}) {
    return this.request('get', `${url}`, data, headers)
  },
  post(url, data, headers = {}) {
    return this.request('post', `${url}`, data, headers)
  },
  init() {
    axios.defaults.baseURL = API_DOMAIN
  }
}

export default HTTP
