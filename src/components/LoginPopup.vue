<template>
  <div class="popup-overlay">
    <div v-if="isIframeOpen" class="popup-content1">
      <iframe
        src="https://www.example.com"
        width="800px"
        height="500px"
      ></iframe>
      <button class="close-button" @click="closePopup">X</button>
    </div>
    <div v-if="!isIframeOpen" class="popup-content2">
      <div class="popup-left">
        <img
          src="@/assets/kakaoImg.png"
          alt="카카오 로그인"
          class="popup-image"
          @click="onKakaoLogin"
        />
      </div>

      <div class="popup-right">
        <div>
          <label for="username">이름</label>
          <input
            type="text"
            id="username"
            class="form-control"
            placeholder="홍길동"
          />
        </div>
        <div>
          <label for="birthday">생년월일</label>
          <input
            type="birthday"
            id="birthday"
            class="form-control"
            placeholder="19900101"
          />
        </div>
        <button class="close-button" @click="closePopup">X</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPopup",
  data() {
    return {
      isIframeOpen: false,
    };
  },
  methods: {
    closePopup() {
      this.$emit("close"); // 부모에게 팝업 닫기를 알림
    },
    onKakaoLogin() {
      console.log("카카오 로그인 버튼 클릭됨");
      this.isIframeOpen = true;
    },
  },
};
</script>

<style>
@import "@/assets/styles/popup.css";
</style>
