<template>
  <div class="portfolio">
    <HeaderPortfolio :language="language" :heightHeader="heightHeader"/>

    <div class="portfolio__content">
      <ProjectList 
        :projects="language === 'ru' ? projects.ru : projects.en" 
        :language="language"
      />
    </div>
  </div>
</template>

<script setup>
import HeaderPortfolio from '@/components/headerPortfolio/HeaderPortfolio.vue';
import ProjectList from '@/components/projects/ProjectList.vue';
import { computed } from 'vue';
import { projects } from '@/services/dataPortfolio.js';
import { storeToRefs } from 'pinia';
import { useViewStore } from '@/stores/view';
const { language } = storeToRefs(useViewStore());

const heightHeader = computed(() => {
  let header = document.querySelector('#header');
  let heightHeaderPortfolio = '100vh';
  const heightView = document.documentElement.clientHeight;

  if (header) {
    header = header.getBoundingClientRect();
    heightHeaderPortfolio = `${heightView - header.height}px`;
  };
  return { height: heightHeaderPortfolio };
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.portfolio {
  display: flex;
  flex-direction: column;
  background-color: $pink;
  &__content {
    padding: $paddingPortfolioMobile;
  }
}

@media screen and (min-width: 768px) {
}
@media screen and (min-width: 1024px) {
  .portfolio {
    &__content {
      padding: $paddingPortfolioDesktop;
    }
  }
}
</style>