import Vue from "vue";
import Vuex from "vuex";
import usersList from "./userslist";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: { usersList },
  // state: {},
  // mutations: {},
  // actions: {},
  // modules: {},
});
