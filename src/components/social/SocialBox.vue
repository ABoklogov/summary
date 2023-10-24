<template>
  <div class="social-box">
    <SubTitle :text="language === 'ru' ? 'Социальные сети' : 'Social'" />
    <SocialList :list="language === 'ru' ? socialLinks.ru : socialLinks.en" />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import SubTitle from '@/components/shared/SubTitle.vue';
import SocialList from './SocialList.vue';
import { socialLinks } from '@/services/data.js';
import { useViewStore } from '@/stores/view';
const { language } = storeToRefs(useViewStore());
</script>

<style scoped lang="scss">

</style>