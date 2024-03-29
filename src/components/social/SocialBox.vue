<template>
  <div class="social-box">
    <SubTitle :text="language === 'ru' ? 'Социальные сети' : 'Social'" />
    <SocialList :list="social" />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import SubTitle from '@/components/shared/SubTitle.vue';
import SocialList from './SocialList.vue';
import { useViewStore } from '@/stores/view';
const { language } = storeToRefs(useViewStore());

defineProps({
  social: {
    type: Array,
    validator(arr) {
      return arr.every((obj) => {
        return Object.values(obj).every((el) => typeof el === 'string');
      });
    },
    required: true
  },
});
</script>
