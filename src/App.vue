<template>
  <div id="app" class="d-flex justify-content-center" style="margin-top: 130px">
    <div>
      <button type="button" class="btn btn-primary" @click="openPopup">
        로그인
      </button>
    </div>

    <LoginPopup v-if="isPopupOpen" @close="closePopup" />
  </div>
</template>

<script>
import LoginPopup from "./components/LoginPopup.vue";

export default {
  name: "App",
  data() {
    return {
      isPopupOpen: false,
    };
  },
  components: {
    LoginPopup,
  },
  methods: {
    openPopup() {
      this.isPopupOpen = true;
    },
    closePopup() {
      location.reload();
    },
  },
};
</script>

<style></style>
