<template>
  <div class="education-box">
    <SubTitle :text="language === 'ru' ? 'Образование' : 'Education'" />
    <EducationList :list="language === 'ru' ? education.ru : education.en" />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import SubTitle from '@/components/shared/SubTitle.vue';
import EducationList from '@/components/education/EducationList.vue';
import { education } from '@/services/dataResume.js';
import { useViewStore } from '@/stores/view';
const { language } = storeToRefs(useViewStore());
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
</style>
