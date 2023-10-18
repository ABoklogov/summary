<template>
  <div class="resume">
    <div class="resume__left">
      <MyPhoto class="photo--position" />
      <MyName />
    </div>
    <div class="resume__right"></div>
  </div>
</template>

<script setup>
import MyPhoto from '@/components/MyPhoto.vue'
import MyName from '@/components/MyName.vue'
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
  }
}

.photo--position {
  margin-left: auto;
}
</style>
