import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      settings: {
        mainFooter: [],
        globalScripts: []
      }
    },
    mutations: {
      setSettings (state, settings) {
        state.settings = settings
      }
    },
    actions: {
      loadSettings ({ commit }, context) {
        return this.$storyapi.get(`cdn/stories/settings`, {
          version: 'draft'
        }).then((res) => {
          commit('setSettings', res.data.story.content)
        })
      }
    }
  })
}

export default createStore
