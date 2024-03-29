<template>
  <ul class="project-list">
    <li
      v-for="{
        name,
        link,
        preText,
        picture,
        description,
        tehnology,
        linkFiles,
        backgroundColor,
        _id
      } in dataPortfolio.projects"
      :key="_id"
      class="project-list__item"
      :style="{ backgroundColor: backgroundColor }"
    >
      <ProjectItem
        :name="name"
        :link="link"
        :preText="preText"
        :picture="picture"
        :description="description"
        :tehnology="tehnology"
        :linkFiles="linkFiles"
        :language="language"
      />
    </li>
  </ul>
</template>

<script setup>
import ProjectItem from './ProjectItem.vue';

defineProps({
  dataPortfolio: {
    type: Object,
    required: true
  },
  language: {
    type: String
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.project-list {
  &__item {
    padding: $paddingPortfolioMobile;
  }
}

@media screen and (min-width: 1024px) {
  .project-list {
    &__item {
      padding: 136px $paddingPortfolioDesktop;
    }
  }
}
</style>
