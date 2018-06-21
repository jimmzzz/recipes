import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currencyList: []
  },
  mutations: {
    getCurrencyList(state, res) {
      state.currencyList = res.data.data;
    }
  },
  actions: {
    getCurrencyList({ commit }) {
      axios
        .get("https://api.coinmarketcap.com/v2/ticker/")
        .then(res => commit("getCurrencyList", res))
        .catch();
    }
  }
});
