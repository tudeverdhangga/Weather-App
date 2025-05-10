import HTTP from './http'

const GET_API = (path, data, headers) => {
  const promise = new Promise((resolve, reject) => {
    HTTP.get(path, data, headers)
      .then(result => {
        resolve(result.data)
      })
      .catch(err => {
        reject(err)
      })
  })
  return promise
}

const POST_API = (path, data, headers) => {
  const promise = new Promise((resolve, reject) => {
    HTTP.post(path, data, headers)
      .then(result => {
        resolve(result.data)
      })
      .catch(err => {
        reject(err)
      })
  })
  return promise
}


const methods = {
  GET_API,
  POST_API
}

export default methods
