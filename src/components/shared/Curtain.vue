<template>
  <div class="curtain" :class="{ 'curtain--black': themeBlack }"></div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useViewStore } from '@/stores/view';
const { themeBlack } = storeToRefs(useViewStore());
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.curtain {
  position: absolute;
  z-index: $indexCurtain;
  top: 0;
  left: 0;
  background: $white;
  mix-blend-mode: difference;
  pointer-events: none;
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  transform-origin: 0 50%;
  transition: transform $duration $timingFunction;

  &--black {
    transform: scaleX(1);
  }
}
</style>