<template>
  <div class="my-name-box">
    <span class="my-name-box__name">
      {{ language === 'ru' ? name.ru.name : name.en.name }}
    </span>
    <span class="my-name-box__job-title">
      {{ language === 'ru' ? name.ru.profession : name.en.profession }}
    </span>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useViewStore } from '@/stores/view';
const { language } = storeToRefs(useViewStore());

defineProps({
  name: {
    type: Object
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.my-name-box {
  &__name,
  &__job-title {
    display: block;
    font-family: $fontBase;
    font-style: $fontStyle;
    font-weight: $fontWeightSemibold;
    line-height: normal;
  }

  &__name {
    font-size: $fontNorm;
    color: $black;
  }

  &__job-title {
    color: $transparentBlack;
  }
}

@media screen and (min-width: 768px) {
  .my-name-box__name {
    font-size: $fontBig;
  }
}

@media screen and (min-width: 1024px) {
  .my-name-box__name {
    font-size: $fontTitle;
  }
}
</style>
