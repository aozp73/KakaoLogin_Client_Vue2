<template>
  <div>
    <div class="d-flex justify-content-center" style="margin-top: 130px">
      <div class="mb-5" style="font-size: 23px">응답 페이지</div>
    </div>
    <div
      v-if="userProfile"
      class="d-flex justify-content-center"
      style="margin-top: 50px"
    >
      <div class="text-center">
        <img
          :src="userProfile.profile_image"
          class="rounded-circle"
          style="width: 100px; height: 100px"
        />
        <div class="mt-3">
          <span>{{ userProfile.nickname }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "kakaoCodeResPage",
  data() {
    return {
      code: null,
      userProfile: null,
    };
  },
  created() {
    this.code = this.$route.query.code;
    console.log("Received Code:", this.code);
    this.reqUserJoinYn();
  },
  methods: {
    async reqUserJoinYn() {
      try {
        const response = await this.$axios.get(
          "http://localhost:80/getProfile?code=" + this.code,
          { withCredentials: true }
        );

        let responseData = response.data;
        if (typeof responseData === "string") {
          responseData = JSON.parse(responseData);
        }

        console.log("응답 정보1: ", responseData);

        if (responseData.profile) {
          console.error("회원등록정보 존재");
          const profileData = JSON.parse(responseData.profile);

          console.log("nickname: ", profileData.kakao_account.profile.nickname);
          console.log(
            "profile_image: ",
            profileData.kakao_account.profile.profile_image_url
          );

          this.$store
            .dispatch("login", {
              username: profileData.kakao_account.profile.nickname,
              profileImage: profileData.kakao_account.profile.profile_image_url,
            })
            .then(() => {
              this.$nextTick(() => {
                this.$router.push({ name: "mainPage" });
                console.log("상태 업데이트 완료");
              });
            });
        } else {
          console.error("회원등록 필요");
          if (confirm("회원등록이 필요합니다. 이동하시겠습니까?")) {
            this.$router.push({ name: "loginPage" });
          } else {
            // 취소
          }
        }
      } catch (error) {
        console.error("유저정보 획득 실패:", error);
      }
    },
  },
};
</script>

<style></style>
