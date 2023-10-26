<template>
  <div class="experience-box">
    <SubTitle :text="language === 'ru' ? 'Опыт' : 'Experience'" />
    <ExperienceList :list="language === 'ru' ? experience.ru : experience.en" :language="language"/>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import SubTitle from '@/components/shared/SubTitle.vue';
import ExperienceList from '@/components/experience/ExperienceList.vue';
import { experience } from '@/services/dataResume.js';
import { useViewStore } from '@/stores/view';
const { language } = storeToRefs(useViewStore());
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
</style>