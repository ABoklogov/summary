<template>
  <div class="panel-portfolio">
    <Spiner
      v-if="loading"
      style="width: 50px; height: 50px; margin: 50px auto; display: block"
      strokeWidth="5"
      animationDuration=".5s"
      aria-label="Custom ProgressSpinner"
    />
    <div v-else>
      <LinksBox/>
      <TextBox class="panel-portfolio__one-box"/>
      <ProjectBox class="panel-portfolio__one-box"/>
    </div>
  </div>
</template>

<script setup>
import { usePortfolioStore } from '@/stores/portfolio';
import { storeToRefs } from 'pinia';
import { onBeforeMount } from 'vue';
import LinksBox from '@/components/admin/links/LinksBox.vue';
import TextBox from '@/components/admin/texts/TextBox.vue';
import ProjectBox from '@/components/admin/project/ProjectBox.vue';

const storePortfolio = usePortfolioStore();
const { loading } = storeToRefs(usePortfolioStore());

// запрашиваем данные по резюме
onBeforeMount(() => {
  storePortfolio.getDataPortfolio();
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.panel-portfolio {
  &__box {
    display: flex;
    flex-direction: column;
  }
  &__one-box {
    width: 100%;
    margin-top: 15px;
  }
}
@media screen and (min-width: 1024px) {
  .panel-portfolio {
    &__box {
      flex-direction: row;
      margin: -15px;
    }
  }
}
</style>
