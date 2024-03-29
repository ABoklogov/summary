<template>
  <div class="education-box">
    <SubTitle :text="language === 'ru' ? 'Образование' : 'Education'" />
    <EducationList :education="education" :language="language" />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import SubTitle from '@/components/shared/SubTitle.vue';
import EducationList from '@/components/education/EducationList.vue';
import { useViewStore } from '@/stores/view';
const { language } = storeToRefs(useViewStore());

defineProps({
  education: {
    type: Array,
    validator(arr) {
      return arr.every((obj) => {
        return Object.values(obj).every((subObj) => {
          return Object.values(subObj).every((el) => typeof el === 'string');
        });
      });
    },
    required: true
  }
});
</script>
