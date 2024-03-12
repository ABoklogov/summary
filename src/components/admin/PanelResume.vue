<template>
  <div class="panel-resume">
    <Spiner
      v-if="loading"
      style="width: 50px; height: 50px; margin: 50px auto; display: block"
      strokeWidth="5"
      animationDuration=".5s"
      aria-label="Custom ProgressSpinner"
    />
    <div v-else>
      <AvatarBox :avatar="dataResume.about?.avatar" />
    </div>
  </div>
</template>

<script setup>
import { useResumeStore } from '@/stores/resume';
import { storeToRefs } from 'pinia';
import { onBeforeMount } from 'vue';
import AvatarBox from '@/components/admin/AvatarBox.vue';

const storeResume = useResumeStore();
const { loading, dataResume } = storeToRefs(useResumeStore());

// запрашиваем данные по резюме
onBeforeMount(() => {
  storeResume.getDataResume();
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';

</style>
