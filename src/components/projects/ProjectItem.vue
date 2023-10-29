<template>
  <div class="project-item">
    <div class="project-item__content">
      <a :href="link">{{ link }}</a>
      <span>{{ name }}</span>
      <span>{{ preText }}</span>
    </div>

    <img :src="picture"  class="project-item__image"/>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  preText: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  backgroundColor: {
    type: String,
    required: true
  },
  language: {
    type: String
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.project-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 374px;

  &__image {
    max-width: 327px;
  }
}

@media screen and (min-width: 768px) {
  .project-item {
    flex-direction: row;
    min-height: 406px;

    &__image {

    }
  }
}
@media screen and (min-width: 1024px) {
  .project-item {

    &__image {
      max-width: 368px;
    }
  }
}
@media screen and (min-width: 1300px) {
  .project-item {

    &__image {
      max-width: 570px;
    }
  }
}
</style>