function objString (obj) {
  var objStr = []
  for (let key in obj) {
    let val = JSON.stringify(obj[key]).replace(/^\"|\"$]/g, '')
    objStr.push(key + "=" + val)
  }
  objStr = objStr.join('&')
  return objStr
}
const commonFetch = (url, method, data) => {
  if (method === 'GET') {
    url += '?' + objString(data)
  }
  if (method !== 'GET') {
    data = JSON.stringify(data)
  }
  return fetch(url, {
    method,
    body: data,
    credentials: 'same-origin',
    mode: 'same-origin',
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  }).then((response) => {
    if (response.status >= 400) {
      return new Promise((resolve, reject) => {
        response.json().then((error) => {
          reject(error)
        })
      })
    } else {
      return response.json()
    }
  })
}
export default {
  get (url, data) {
    return commonFetch(url, 'GET', data)
  },
  post (url, data) {
    return commonFetch(url, 'POST', data)
  }
}