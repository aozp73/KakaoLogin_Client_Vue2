import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    username: null,
    profileImage: null,
  },
  mutations: {
    setLogin(state, user) {
      state.isLoggedIn = true;
      state.username = user.username;
      state.profileImage = user.profileImage;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.username = null;
      state.profileImage = null;
    },
  },
  actions: {
    login({ commit }, user) {
      commit("setLogin", user);
    },
    logout({ commit }) {
      commit("logout");
    },
  },
  getters: {
    isLoggedIn: (state) => state.isLoggedIn,
    getUsername: (state) => state.username,
    getProfileImage: (state) => state.profileImage,
  },

  plugins: [
    createPersistedState({
      key: "vuex", // 로컬스토리지에서 Vuex 상태를 저장할 키 (기본값: vuex)
      storage: window.localStorage, // 로컬스토리지에 상태 저장 (sessionStorage로 변경 가능)
      paths: ["isLoggedIn", "username", "profileImage"], // 저장할 상태의 경로 지정
    }),
  ],
});
