<template>
  <div class="text-box">
    <span class="text-box__text">
      {{ footerText }}
      <a :href="props.dataPortfolio?.links.linkClient" target="_blank"> 
        {{ props.language === 'ru' ? 'клиент' : 'client' }} 
      </a>
      / 
      <a :href="props.dataPortfolio?.links.linkServer" target="_blank"> 
        {{ props.language === 'ru' ? 'сервер' : 'server' }} 
      </a>.
    </span>

    <span class="text-box__text text-box__text--name">
      {{ language === 'ru' ? 'Разработал' : 'Developed by' }}
      <a 
        :href="nameDeveloper.link"
        target="_blank"
      >
        {{ nameDeveloper.name }}
      </a>
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  dataPortfolio: {
    type: Object,
    required: true
  },
  dataResume: {
    type: Object,
    required: true
  },
  language: {
    type: String,
    required: true
  }
});

const nameDeveloper = computed(() => {
  const dataName = props.dataResume?.about.name;
  return props.language === 'ru' ? dataName.ru : dataName.en;
});

const footerText = computed(() => {
  const { footerText } = props.dataPortfolio?.texts;
  return props.language === 'ru' ? footerText.ru : footerText.en;
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
