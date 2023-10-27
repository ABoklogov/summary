<template>
  <div class="portfolio">
    <HeaderPortfolio/>

    <div class="portfolio__content">

    </div>
  </div>
</template>

<script setup>
import HeaderPortfolio from '@/components/headerPortfolio/HeaderPortfolio.vue';
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