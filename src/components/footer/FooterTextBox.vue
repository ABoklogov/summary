<template>
  <div class="text-box">
    <span class="text-box__text">
      {{ language === 'ru' ? footerText.ru : footerText.en }}
      <a :href="linkThisProject">
        {{ language === 'ru' ? 'ссылке' : 'link' }}
      </a>.
    </span>

    <span class="text-box__text text-box__text--name">
      {{ language === 'ru' ? 'Разработал' : 'Developed by' }}
      <a :href="nameDeveloper.link">{{ nameDeveloper.name }}</a>
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { footerText, linkThisProject } from '@/services/dataPortfolio.js';
import { myName } from '@/services/dataResume.js';
import { storeToRefs } from 'pinia';
import { useViewStore } from '@/stores/view';
const { language } = storeToRefs(useViewStore());

const nameDeveloper = computed(() => {
  return (language.value === 'ru') ? myName.ru : myName.en;
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.text-box {
  &__text {
    display: block;
    font-family: $fontBase;
    font-size: $fontMicro;
    font-style: $fontStyle;
    font-weight: $fontWeightLight;
    line-height: $lineHeight;
    color: $transparentLightGrey;
  }
  &__text a {
    color: $orange;
    cursor: pointer;
    text-decoration: none;
    transition: color $duration $timingFunction;
  }
  &__text a:hover,
  &__text a:focus {
    color: $orangeHover;
  }
  &__text--name {
    margin-top: 16px;
  }
}

@media screen and (min-width: 768px) {
  .text-box {
    &__text {
      font-size: $fontMini;
      font-weight: $fontWeightRegular;
    }
  }
}
@media screen and (min-width: 1024px) {
  .text-box {
    &__text {
      font-size: $fontSmall;
    }
  }
}
</style>
