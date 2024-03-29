<template>
  <div class="tech-skills-box">
    <SubTitle :text="language === 'ru' ? 'Технические навыки' : 'Tech skills'" />
    <TechSkillsList :list="techSkills" />
  </div>
</template>

<script setup>
import SubTitle from '@/components/shared/SubTitle.vue';
import TechSkillsList from './TechSkillsList.vue';
import { storeToRefs } from 'pinia';
import { useViewStore } from '@/stores/view';
const { language } = storeToRefs(useViewStore());

defineProps({
  techSkills: {
    type: Array,
    validator(arr) {
      return arr.every(obj => {
        return Object.values(obj).every(el => typeof el === 'string');
      });
    },
    required: true
  },
});
</script>
