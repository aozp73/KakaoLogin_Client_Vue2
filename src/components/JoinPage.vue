<template>
  <div>
    <div class="d-flex justify-content-center" style="margin-top: 130px">
      <div class="fs-5">회원등록</div>
    </div>

    <div class="bordered-box">
      <div class="d-flex justify-content-center">
        <label for="username" class="mt-3 me-4">이름</label>
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="홍길동"
          class="form-control w-50"
          style="margin-top: 10px"
        />
      </div>
      <div class="button-wrapper">
        <button @click="reqJoin" class="btn btn-primary">회원가입</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JoinPage",
  data() {
    return {
      username: "",
    };
  },
  methods: {
    async reqJoin() {
      const response = await this.$axios.post("http://localhost:80/joinUser", {
        username: this.username,
      });

      console.log("response: " + JSON.stringify(response));
      let joinMsg = "회원등록이 완료되었습니다.";

      if (response.data === "Y") {
        joinMsg = "기존에 고객 등록이 되어있습니다. 로그인을 진행해주세요.";
      }
      if (confirm(joinMsg)) {
        this.$router.push({ name: "loginPage" });
      }
    },
  },
};
</script>

<style>
@import "@/assets/styles/joinPage.css";
</style>
