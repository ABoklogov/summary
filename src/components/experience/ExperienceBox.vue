<template>
  <div class="experience-box">
    <SubTitle :text="language === 'ru' ? 'Опыт' : 'Experience'" />
    <ExperienceList :list="experience" :language="language" />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import SubTitle from '@/components/shared/SubTitle.vue';
import ExperienceList from '@/components/experience/ExperienceList.vue';
import { useViewStore } from '@/stores/view';
const { language } = storeToRefs(useViewStore());

defineProps({
  experience: {
    type: Array,
    required: true
  }
});
</script>
