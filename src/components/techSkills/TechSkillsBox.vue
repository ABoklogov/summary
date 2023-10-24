<template>
  <div class="tech-skills-box">
    <SubTitle :text="language === 'ru' ? 'Технические навыки' : 'Tech skills'" />
    <TechSkillsList :list="techSkills"/>
  </div>
</template>

<script setup>
import SubTitle from '@/components/shared/SubTitle.vue';
import TechSkillsList from './TechSkillsList.vue';
import { techSkills } from '@/services/data.js';
</script>

<style scoped lang="scss">

</style>