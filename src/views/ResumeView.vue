<template>
  <div class="resume" id="resume">
    <div class="resume__left">
      <div class="resume__photo-box">
        <MyPhoto class="photo--position" />
        <MyNameBox class="my-name-box--position" />
      </div>
      <SocialBox class="social-box--position" />
    </div>
    <div class="resume__right">
      <EducationBox class="education-box--position" />
    </div>
  </div>
</template>

<script setup>
import MyPhoto from '@/components/MyPhoto.vue'
import MyNameBox from '@/components/MyNameBox.vue'
import SocialBox from '@/components/social/SocialBox.vue'
import EducationBox from '@/components/education/EducationBox.vue'
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.resume {
  display: flex;
  flex-direction: column;
  padding: 22px;
  background-color: $pink;

  &__left {
    width: 100%;
  }

  &__right {
    width: 100%;
    margin-left: 12px;
  }

  &__photo-box {
    display: flex;
    flex-direction: column;
  }
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

@media screen and (min-width: 600px) {
  .resume {
    &__photo-box {
      flex-direction: row-reverse;
      justify-content: flex-end;
    }
  }

  .photo--position {
    margin-left: auto;
  }
}

@media screen and (min-width: 1024px) {
  .resume {
    flex-direction: row;
    padding: 64px;

    &__left {
      width: 40%;
    }

    &__right {
      width: 60%;
      margin-left: 12px;
    }

    &__photo-box {
      display: block;
    }
  }
}
</style>
