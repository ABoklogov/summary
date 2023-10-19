<template>
  <div class="social-box">
    <SubTitle :text="language === 'ru' ? 'Социальные сети' : 'Social'" />
    <!-- <span class="telegram">
      Telegram: {{ telegram }}
    </span> -->
    <SocialList :list="language === 'ru' ? socialLinks.ru : socialLinks.en" />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import SubTitle from '@/components/shared/SubTitle.vue';
import SocialList from './SocialList.vue';
import { socialLinks, telegram } from '@/services/data.js';
import { useViewStore } from '@/stores/view';
const { language } = storeToRefs(useViewStore());
</script>

<style scoped lang="scss">
// @import '@/assets/scss/variables';
// .telegram {
//   display: block;
//   font-family: RockStar;
//   font-size: $fontNorm;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 1.6;
//   color: $transparentBlack;
//   margin-top: 20px;
// }
</style>