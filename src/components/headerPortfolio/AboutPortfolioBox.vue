<template>
  <div class="about-portfolio-box">
    <span class="about-portfolio-box__text">
      {{ language.ru ? aboutText.ru : aboutText.en }}
    </span>
    
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { aboutText } from '@/services/dataPortfolio.js';
import { useViewStore } from '@/stores/view';
const { language } = storeToRefs(useViewStore());
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.about-portfolio-box {
  &__text {
    font-family: $fontBase;
    font-size: $fontMini;
    font-style: $fontStyle;
    font-weight: $fontWeightRegular;
    line-height: 23px;
    color: $transparentBold;
  }
}
</style>