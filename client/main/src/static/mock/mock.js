import  Mock from 'mockjs'
import  axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import data from '../data/icon_logo.js'

const mock = new MockAdapter(axios)
export default {
  getData: () => {
    mock.onGet('/icon_logo').reply(200, {
      reult: data 
    })
  }
}