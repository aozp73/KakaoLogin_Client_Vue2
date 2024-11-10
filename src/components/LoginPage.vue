<template>
  <div class="d-flex justify-content-center" style="margin-top: 300px">
    <div>
      <button
        type="button"
        class="btn btn-primary me-5"
        @click="moveOauthLoginPage"
      >
        간편인증ㆍ모바일 신분증
      </button>
      <button type="button" class="btn btn-primary me-5">공동인증서</button>
      <button type="button" class="btn btn-primary me-5">금융인증서</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      isPopupOpen: false,
    };
  },
  components: {},
  methods: {
    moveOauthLoginPage() {
      this.$router.push({ name: "oauthLoginPage" });
    },
  },
};
</script>

<style></style>
