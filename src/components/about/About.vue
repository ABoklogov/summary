<template>
  <span class="about"> "{{ language === 'ru' ? about?.ru : about?.en }}" </span>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useViewStore } from '@/stores/view';
const { language } = storeToRefs(useViewStore());

defineProps({
  about: {
    type: Object,
  },
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.about {
  display: block;
  position: relative;
  z-index: calc($indexCurtain + 1);
  font-family: $fontBase;
  font-size: $fontMedium;
  font-style: $fontStyle;
  font-weight: $fontWeightSemibold;
  line-height: 1.7;
  color: $orange;
}
@media screen and (min-width: 768px) {
  .about {
    font-size: $fontNorm;
  }
}
</style>
