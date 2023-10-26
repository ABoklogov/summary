<template>
  <div 
    class="header-portfolio" 
    ref="headerPortfolio" 
    :style="heightHeader"
  >
    <AboutPortfolioBox/>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import AboutPortfolioBox from './AboutPortfolioBox.vue';

const headerPortfolio = ref(null);

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

.header-portfolio {
  width: 100%;
  min-height: 360px;
  background-color: $black;
  padding: 48px 24px 32px;
}

@media screen and (min-width: 1024px) {
  .header-portfolio {
    padding: 48px 120px 32px;
  }
}
</style>