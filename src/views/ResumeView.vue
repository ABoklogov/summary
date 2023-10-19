<template>
  <div class="resume">
    <div class="resume__left">
      <MyPhoto class="photo--position" />
      <MyNameBox class="my-name-box--position" />
      <SocialBox class="social-box--position" />
    </div>
    <div class="resume__right">
      <EducationBox class="education-box--position" />
    </div>
  </div>
</template>

<script setup>
import MyPhoto from '@/components/MyPhoto.vue';
import MyNameBox from '@/components/MyNameBox.vue';
import SocialBox from '@/components/social/SocialBox.vue';
import EducationBox from '@/components/education/EducationBox.vue';
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.resume {
  display: flex;
  flex-direction: row;
  padding: 64px;
  background-color: $pink;

  &__left {
    width: 40%;
  }

  &__right {
    width: 60%;
    margin-left: 12px;
  }
}

.photo--position {
  margin-left: auto;
}

.my-name-box--position {
  margin-top: 24px;
}

.social-box--position {
  margin-top: 120px;
}

.education-box--position {
  width: 80%;
  margin-left: auto;
}
</style>
