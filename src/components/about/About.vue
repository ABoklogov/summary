<template>
  <span class="about">
    "{{ language === 'ru' ? about.ru : about.en }}"
  </span>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useViewStore } from '@/stores/view';
const { language } = storeToRefs(useViewStore());
import { about } from '@/services/data.js';
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.about {
  display: block;
  position: relative;
  z-index: calc($indexCurtain + 1);
  font-size: $fontMedium;
  color: $orange;
  line-height: 1.7;
}
@media screen and (min-width: 768px) {
  .about {
    font-size: $fontNorm;
  }
}
</style>