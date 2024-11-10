import Vue from "vue";
import Router from "vue-router";
import oauthLoginPage from "../components/OauthLoginPage.vue";
import loginPage from "../components/LoginPage.vue";
import mainPage from "../components/MainPage.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "mainPage",
      component: mainPage,
    },
    {
      path: "/loginPage",
      name: "loginPage",
      component: loginPage,
    },
    {
      path: "/oauthLoginPage",
      name: "oauthLoginPage",
      component: oauthLoginPage,
    },
  ],
});

export default router;
