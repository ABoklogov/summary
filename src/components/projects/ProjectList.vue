<template>
  <ul class="project-list">
    <li v-for="({ 
        name, 
        link, 
        preText, 
        picture, 
        backgroundColor
      }) in projects" 
      :key="name"
      class="project-list__item"
    >
      <ProjectItem 
        :name="name"
        :link="link"
        :preText="preText"
        :picture="picture"
        :backgroundColor="backgroundColor"
        :language="language"
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
  },
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.project-list {
  &__item {
    padding: 24px 0;
  }
}

@media screen and (min-width: 768px) {
.project-list {
  &__item {
    padding: 64px 0;
  }
}
}
@media screen and (min-width: 1024px) {
.project-list {
  &__item {
    padding: 136px 0;
  }
}
}
</style>