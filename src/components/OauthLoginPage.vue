<template>
  <div
    class="ouathlogin-overlay d-flex justify-content-center align-items-center"
  >
    <div class="ouathlogin-content">
      <!-- 왼쪽 이미지 -->
      <div class="ouathlogin-left-box">
        <div class="kakao-login-box">
          <img
            src="@/assets/kakaoImg.png"
            alt="카카오 로그인"
            class="popup-image"
            @click="onKakaoLogin"
          />
          <p class="kakao-text">카카오톡</p>
        </div>
      </div>

      <!-- 오른쪽 입력박스 -->
      <div class="ouathlogin-right-box">
        <div class="form-group">
          <label for="username">이름</label>
          <input
            type="text"
            id="username"
            class="form-control"
            placeholder="홍길동"
          />
        </div>
        <div class="form-group">
          <label for="birthday">생년월일</label>
          <input
            type="text"
            id="birthday"
            class="form-control"
            placeholder="19900101"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      isIframeOpen: false,
      iframeSrc: "",
    };
  },
  methods: {
    closePopup() {
      this.$emit("close");
    },
    async onKakaoLogin() {
      console.log("카카오 로그인 버튼 클릭됨");

      try {
        const response = await this.$axios.get("http://localhost:80/login", {});

        console.log("로그인 url:", response.data);

        this.isIframeOpen = true;
      } catch (error) {
        console.error("로그인 실패:", error);
      }
      this.isIframeOpen = true;
    },
  },
};
</script>

<style scoped>
@import "@/assets/styles/oauthLoginPage.css";
</style>
