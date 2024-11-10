<template>
  <div class="top-bar">
    <div class="top-bar-left" @click="goToMainPage">메인 페이지</div>
    <div class="top-bar-right">
      <div v-if="!isLoggedIn">
        <button class="btn btn-primary" @click="goToLoginPage">로그인</button>
      </div>
      <div v-if="isLoggedIn">
        <!-- <span class="me-2">{{ username }}</span> -->
        <img
          :src="profileImage"
          alt="Profile Image"
          class="profile-image me-3"
        />
        <button class="btn btn-primary" @click="logOut">로그아웃</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  computed: {
    profileImage() {
      return this.$store.getters.getProfileImage;
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    username() {
      return this.$store.getters.getUsername;
    },
  },
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
    logOut() {
      this.$store.dispatch("logout");
      this.goToLoginPage();
    },
  },
};
</script>

<style scoped>
@import "@/assets/styles/header.css";
</style>
