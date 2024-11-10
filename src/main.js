import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/store.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
