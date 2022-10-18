
import { createStore } from 'vuex'
// Create a new store instance.

const createVuexStore = () => {
  return createStore({
    state () {
      return {
        count: 0
      }
    },
    getters: {
      count: state => state.count
    },
    mutations: {
      increment (state) {
        state.count += 1
      },
      setCount (state, value) {
        state.count = value
      }
    }
  })
}

export default createVuexStore
