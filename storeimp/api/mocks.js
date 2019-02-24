import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import code from '../fixtures/code.json'

const mock = new MockAdapter(axios, {delayResponse: 300})
mock
  .onGet('/profile').reply(() => [200, user])
  .onGet('/principal').reply(() => [200, user])
  .onGet('/code').reply(() => [200, code])
  .onPut('/code').reply(() => [200, code])
  .onPost('/code').reply(() => [200, code])

  .onGet('/testerror500').reply(500)
  .onGet('/testerror403').reply(403)
  .onGet('/testtimeout').timeout()


export default 'mock'
