<template>
  <div>
    <div class="d-flex justify-content-center" style="margin-top: 130px">
      <div class="fs-5">content</div>
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
    moveLoginPage() {
      this.$router.push({ name: "loginPage" });
    },
    logOut() {},
  },
};
</script>

<style></style>
