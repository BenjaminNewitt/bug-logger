import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

let _api = axios.create({
  baseURL: "//localhost:3000/api",
  timeout: 5000
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bugs: [],
    activeBug: {},
    notes: []
  },
  mutations: {},
  actions: {},
  modules: {}
});
