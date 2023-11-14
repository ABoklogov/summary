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
        backgroundColor
      } in projects"
      :key="name"
      class="project-list__item"
      :style="{ backgroundColor: backgroundColor }"
    >
      <ProjectItem
        :name="name"
        :link="link"
        :preText="preText"
        :picture="picture"
        :language="language"
        :description="description"
        :tehnology="tehnology"
        :linkFiles="linkFiles"
      />
    </li>
  </ul>
</template>

<script setup>
import ProjectItem from './ProjectItem.vue';

defineProps({
  projects: {
    type: Array,
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

@media screen and (min-width: 768px) {
  .project-list {
    &__item {
    }
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
