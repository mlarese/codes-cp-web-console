import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import code from '../fixtures/code.json'

const mock = new MockAdapter(axios, {delayResponse: 300})
mock
  .onGet('/profile').reply(() => [200, user])
  .onGet('/principal').reply(() => [200, user])
  .onGet('/code').reply(() => [200, code])
  .onPut('/code/2').reply(() => [200, 2])
  .onPut('/code/3').reply(() => [200, 3])
  .onPut('/code/4').reply(() => [200, 4])
  .onPut('/code/5').reply(() => [200, 5])
  .onPut('/code/6').reply(() => [200, 6])
  .onPost('/code').reply(() => [200, code])

  .onGet('/testerror500').reply(500)
  .onGet('/testerror403').reply(403)
  .onGet('/testtimeout').timeout()


export default 'mock'
