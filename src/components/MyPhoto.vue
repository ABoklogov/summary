<template>
  <div class="photo">
    <img
      :src="avatar ? baseUrl + avatar : require('@/assets/images/default-avatar.jpg')"
      alt="avatar"
      crossorigin="anonymous"
    />
  </div>
</template>

<script setup>
import { baseUrl } from '@/services/urls.js';

defineProps({
  avatar: {
    type: String
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.photo {
  width: 280px;
  height: 280px;
  position: relative;
  z-index: calc($indexCurtain + 1);

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: $transparentGray;
  }

  & img {
    width: 100%;
  }
}
</style>
