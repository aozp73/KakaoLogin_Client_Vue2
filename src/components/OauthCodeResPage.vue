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
          {}
        );

        // 응답 데이터가 이미 객체일 경우, 파싱할 필요 없음
        let responseData = response.data;

        // 응답이 문자열인 경우에만 JSON.parse()
        if (typeof responseData === "string") {
          responseData = JSON.parse(responseData);
        }

        console.log("응답 정보1: ", responseData);

        if (responseData.profile) {
          console.error("회원등록정보 존재");
          const profileData = JSON.parse(responseData.profile);
          console.log("응답 정보2: ", profileData);

          // 프로필 정보를 data에 저장하여 화면에 표시
          this.userProfile = {
            nickname: profileData.kakao_account.profile.nickname,
            profile_image: profileData.kakao_account.profile.profile_image_url,
          };
          console.log("유저 정보: ", this.userProfile);
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
