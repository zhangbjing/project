import Fetch from '@/util/Fetch'
const SET_USER_INFO = 'SET_USER_INFO'
export default {
  namespaced: true,
  state: {
    userInfo: {}
  },
  mutations: {
    [SET_USER_INFO] (state, options) {
      state.userInfo = options
    }
  },
  actions: {
    setUserInfo ({commit, state}) {
      return new Promise((resolve, reject) => {
        if (Object.keys(state.userInfo).length <= 0) {
          Fetch.get('/api/user/userInfo', {
            name: 'aaa'
          }).then((data) => {
            commit(SET_USER_INFO, data)
            resolve(state.userInfo)
          }, (error) => {
            reject({
              code:0,
              msg: '未登录'  
            })
          })
        } else {
          resolve(state.userInfo)
        }
      })
    }
  }
}