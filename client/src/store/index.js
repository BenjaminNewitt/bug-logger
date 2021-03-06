import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

let _api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 3000
});
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bugs: [],
    activeBug: {},
    notes: []
  },
  mutations: {
    setAllBugs(state, data) {
      state.bugs = data;
    },
    addBug(state, bug) {
      state.bugs.push(bug);
    },
    setActiveBug(state, bug) {
      state.activeBug = bug;
    },
    setNotes(state, data) {
      state.notes = data;
    },
    addNote(state, data) {
      state.notes.push(data);
    }
  },
  actions: {
    async getBugs({ commit, dispatch }) {
      let res = await _api.get("bugs");
      commit("setAllBugs", res.data);
    },
    async getBugById({ commit, dispatch }, id) {
      let res = await _api.get("bugs/" + id);
      commit("setActiveBug", res.data);
    },
    async getNotes({ commit, dispatch }, id) {
      let res = await _api.get("bugs/" + id + "/notes");
      commit("setNotes", res.data);
    },
    async createBug({ commit, dispatch }, bug) {
      let res = await _api.post("bugs", bug);
      commit("addBug", res.data);
      commit("setActiveBug", res.data);
    },
    async editBug({ commit, dispatch }, data) {
      let res = await _api.put("bugs/" + data.id, data);
      dispatch("getBugById", data.id);
    },
    async createNote({ commit, dispatch }, note) {
      let res = await _api.post("notes", note);
      commit("addNote", res.data);
    },
    async deleteNote({ commit, dispatch }, note) {
      await _api.delete("notes/" + note.id);
      // TODO update dispatch to receive bugId
      dispatch("getNotes", note.bug);
    },
    async closeBug({ commit, dispatch }, id) {
      await _api.delete("bugs/" + id);
      dispatch("getBugById", id);
    }
  },
  modules: {}
});
