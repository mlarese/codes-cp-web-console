import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import code from '../fixtures/code.json'

const mock = new MockAdapter(axios, {delayResponse: 300})
mock
  .onGet('/profile').reply(() => [200, user])
  .onGet('/principal').reply(() => [200, user])
  .onGet('/code').reply(() => [200, code])
  .onPut('/code/HONOTRON').reply(() => [200, "HONOTRON"])
  .onPut('/code/BRAINQUIL').reply(() => [200, "BRAINQUIL"])
  .onPut('/code/GEOFORM').reply(() => [200, "GEOFORM"])
  .onPut('/code/COFINE').reply(() => [200, "COFINE"])
  .onPut('/code/NIXELT').reply(() => [200, "NIXELT"])
  .onPut('/code/ASSURITY').reply(() => [200, "ASSURITY"])
  .onPost('/code').reply(() => [200, code])

  .onGet('/testerror500').reply(500)
  .onGet('/testerror403').reply(403)
  .onGet('/testtimeout').timeout()


export default 'mock'
