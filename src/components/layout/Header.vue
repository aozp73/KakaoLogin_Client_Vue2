<template>
  <div class="top-bar">
    <div class="top-bar-left" @click="goToMainPage">메인 페이지</div>
    <div class="top-bar-right">
      <div v-if="!isLoggedIn">
        <button class="btn btn-primary" @click="goToLoginPage">로그인</button>
      </div>
      <div v-if="isLoggedIn">
        <button class="btn btn-primary" @click="logOut">로그아웃</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      isLoggedIn: false, // 로그인 상태를 나타내는 변수
    };
  },
  computed: {},
  methods: {
    goToLoginPage() {
      if (this.$route.path !== "/loginPage") {
        this.$router.push({ name: "loginPage" });
      }
    },
    goToMainPage() {
      if (this.$route.path !== "/") {
        this.$router.push({ name: "mainPage" });
      }
    },
    logOut() {},
  },
};
</script>

<style scoped>
@import "@/assets/styles/header.css";
</style>
