<template>
  <div class="about-portfolio-box">
    <span class="about-portfolio-box__title">
      {{ language === 'ru' ? 'Кто я такой?' : 'Who am i?' }}
    </span>
    <span class="about-portfolio-box__text about-portfolio-box__text--position">
      {{ language === 'ru' ? aboutText.ru : aboutText.en }}
      <RouterLink to="/" class="about-portfolio-box__link">
        CV <IconArrow/>
      </RouterLink>
    </span>
  </div>
</template>

<script setup>
import IconArrow from '@/components/icons/IconArrow.vue';
import { storeToRefs } from 'pinia';
import { aboutText } from '@/services/dataPortfolio.js';
import { useViewStore } from '@/stores/view';
const { language } = storeToRefs(useViewStore());
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.about-portfolio-box {
  &__title {
    display: inline-block;
    font-family: $fontBase;
    font-size: $fontMedium;
    font-style: $fontStyle;
    font-weight: $fontWeightBold;
    line-height: normal;
    color: $pink;
  }
  &__text,
  &__link {
    display: inline-block;
    font-family: $fontBase;
    font-size: $fontMini;
    font-style: $fontStyle;
    font-weight: $fontWeightRegular;
    line-height: $lineHeight;
    color: $transparentLightGrey;
  }
  &__link {
    display: inline-flex;
    align-items: center;
    color: $orange;
    text-decoration: auto;
  } 
  &__link:hover,
  &__link:focus {
    text-decoration: underline;
  }
  &__text--position {
    margin-top: 8px;
  }
}

@media screen and (min-width: 768px) {
  .about-portfolio-box {
    &__title {
      font-size: $fontNorm;
    }
    &__text,
    &__link {
      font-size: $fontMedium;
    }
  }
}
@media screen and (min-width: 1024px) {
  .about-portfolio-box {
    &__title {
      font-size: $fontBig;
    }
    &__text,
    &__link {
      font-size: $fontNorm;
      font-weight: $fontWeightLight;
    }
    &__text--position {
      margin-top: 16px;
    }
  }
}
</style>