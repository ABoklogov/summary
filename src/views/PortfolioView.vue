<template>
  <div class="portfolio">
    <Spiner
      v-if="loadingResume || loadingPortfolio"
      style="width: 50px; height: 50px; margin: 50vh auto; display: block"
      strokeWidth="5"
      animationDuration=".5s"
      aria-label="Custom ProgressSpinner"
    />

    <template v-else>
      <HeaderPortfolio :language="language" :dataPortfolio="dataPortfolio"/>
  
      <div class="portfolio__content" id="projects">
        <ProjectList :projects="language === 'ru' ? projects.ru : projects.en" :language="language" />
      </div>
  
      <Footer :dataResume="dataResume" :dataPortfolio="dataPortfolio"/>
    </template>
  </div>
</template>

<script setup>
import { useResumeStore } from '@/stores/resume';
import { usePortfolioStore } from '@/stores/portfolio';
import { onBeforeMount } from 'vue';
import { storeToRefs } from 'pinia';
import { useViewStore } from '@/stores/view';
import HeaderPortfolio from '@/components/headerPortfolio/HeaderPortfolio.vue';
import ProjectList from '@/components/projects/ProjectList.vue';
import Footer from '@/components/footer/Footer.vue';
import { projects } from '@/services/dataPortfolio.js';

const { language } = storeToRefs(useViewStore());
const storeResume = useResumeStore();
const storePortfolio = usePortfolioStore();
const { loading: loadingResume, dataResume } = storeToRefs(useResumeStore());
const { loading: loadingPortfolio, dataPortfolio } = storeToRefs(usePortfolioStore());

onBeforeMount(() => {
  storeResume.getDataResume();
  storePortfolio.getDataPortfolio();
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.portfolio {
  display: flex;
  flex-direction: column;
  background-color: $pink;
}
</style>
