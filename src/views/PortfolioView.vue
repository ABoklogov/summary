<template>
  <div class="portfolio">
    <HeaderPortfolio :language="language" />

    <div class="portfolio__content" id="projects">
      <ProjectList :projects="language === 'ru' ? projects.ru : projects.en" :language="language" />
    </div>

    <Footer/>
  </div>
</template>

<script setup>
import HeaderPortfolio from '@/components/headerPortfolio/HeaderPortfolio.vue';
import ProjectList from '@/components/projects/ProjectList.vue';
import Footer from '@/components/footer/Footer.vue';

import { projects } from '@/services/dataPortfolio.js';
import { storeToRefs } from 'pinia';
import { useViewStore } from '@/stores/view';
const { language } = storeToRefs(useViewStore());
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.portfolio {
  display: flex;
  flex-direction: column;
  background-color: $pink;

  // &__content {
  // }
}

@media screen and (min-width: 768px) {
}
@media screen and (min-width: 1024px) {
  .portfolio {
  }
}
</style>
