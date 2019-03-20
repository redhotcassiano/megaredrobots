import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    content: {
      seachTerm: '',
      prefix: '',
      sourceContentOriginal: '',
      sourceContentSenitized: '',
      sentences: []
    }
  },
  mutations: {

  },
  actions: {

  }
})
