import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bag: [],
  },
  getters: {
    subTotal: (state) => state.bag.reduce((total, product) => total + Number(product.valor), 0),
    descuento: (_, getters) => getters.subTotal < 100000 ? getters.subTotal * 0.05 : getters.subTotal * 0.11,
    total: (_, getters) => getters.subTotal - getters.descuento,
  },
  mutations: {
    ADD_TO_BAG({ bag }, product) { bag.push(product) }
  },
  actions: {
    addToBag({ commit }, product) {
      commit('ADD_TO_BAG', product)
    },
  },
  modules: {
  }
})
