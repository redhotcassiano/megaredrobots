import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    content: {},
    robots: {}
  },
  mutations: {
    update (state, config) {
      state[config.state] = config.data
    }
  },
  actions: {
    async addContant (context, data) {
      return context.commit('update', {
        state: 'content',
        data: data
      })
    },

    async addRobots (context, data) {
      return context.commit('update', {
        state: 'robots',
        data: data
      })
    }
  }
})
