
import { createStore } from 'vuex'
import api from '../services/api'

const store = createStore({
  state () {
    return {
      randomPhotos: []
    }
  },
  mutations: {
    setRandomPhotos(state, payload) {
      state.randomPhotos = payload
    }
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    async apiSendLikeToPhoto({commit}, payload) {
      const { id } = payload 
      await api.post(`/photos/${id}/like`, {
        headers: {
          'Authorization': process.env.VUE_APP_CLIENT_ID,
        }
      })
    },
    async apiGetRandomPhotos({commit}, payload) {
      const result = await api.get('/photos/random', {
        params: {
          client_id: process.env.VUE_APP_CLIENT_ID,
          count: 15,
          query: payload
        }
      })

      commit("setRandomPhotos", result.data)
    }
  }
})

export default store;