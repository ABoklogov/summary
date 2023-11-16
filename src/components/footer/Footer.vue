<template>
  <footer class="footer">
    <FooterLinksBox
      :title="language === 'ru' ? 'Контакты' : 'Contact'"
      :list="[ email, phone, telegram ]"
    />

    <FooterLinksBox
      class="footer__social"
      :title="language === 'ru' ? 'Социальные сети' : 'Social'"
      :list="socialList"
    />

    <span class="footer__text">
      {{ language === 'ru' ? footerText.ru : footerText.en }}
      <a :href="linkThisProject">
        {{ language === 'ru' ? 'ссылке' : 'link' }}
      </a>.
    </span>

    <span class="footer__text footer__text--name">
      {{ language === 'ru' ? 'Разработал' : 'Developed by' }}
      <a :href="nameDeveloper.link">{{ nameDeveloper.text }}</a>
    </span>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { telegram, email, phone, socialLinks } from '@/services/dataResume.js';
import { footerText, linkThisProject, developer } from '@/services/dataPortfolio.js';
import FooterLinksBox from './FooterLinksBox.vue';
import { storeToRefs } from 'pinia';
import { useViewStore } from '@/stores/view';
const { language } = storeToRefs(useViewStore());

const socialList = computed(() => {
  return (language.velue === 'ru') ? socialLinks.ru : socialLinks.en;
});
const nameDeveloper = computed(() => {
  return (language.velue === 'ru') ? developer.ru : developer.en;
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.footer {
  position: relative;
  z-index: calc($indexCurtain + 1);
  background-color: $black;
  padding: 105px 24px 64px;

  &__social {
    margin-top: 32px;
  }
  &__text {
    display: block;
    font-family: $fontBase;
    font-size: $fontMicro;
    font-style: $fontStyle;
    font-weight: $fontWeightLight;
    line-height: $lineHeight;
    color: $transparentLightGrey;
    margin-top: 64px;
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
</style>
