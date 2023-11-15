<template>
  <div class="project-item">
    <div class="project-item__content">
      <MainProject
        :language="language"
        :tehnology="tehnology"
        :linkFiles="linkFiles"
        :link="link"
        :name="name"
        :preText="preText"
      />

      <span v-if="showDescription" class="project-item__description-text">
        {{ description }}
      </span>

      <ButtonDescription
        class="button-description--position"
        :textButton="textButton"
        :showDescription="showDescription"
        @click="toggleDescription"
      />
    </div>

    <img :src="picture" class="project-item__image" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import MainProject from './MainProject.vue';
import ButtonDescription from './ButtonDescription.vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  link: {
    type: Object,
    validator(obj) {
      let result;
      for (var key in obj) {
        result = typeof obj[key] === 'string';
      }
      return result;
    },
    required: true
  },
  linkFiles: {
    type: Object,
    validator(obj) {
      let result;
      for (var key in obj) {
        result = typeof obj[key] === 'string';
      }
      return result;
    }
  },
  preText: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  tehnology: {
    type: Array,
    validator(arr) {
      return arr.every((el) => typeof el === 'string');
    },
    required: true
  },
  language: {
    type: String
  }
});

const showDescription = ref(false);

const toggleDescription = () => {
  showDescription.value = !showDescription.value;
};

const textButton = computed(() => {
  if (props.language === 'ru') {
    return showDescription.value ? 'Скрыть подробности' : 'Смотреть подробности';
  } else {
    return showDescription.value ? 'Hide details' : 'See details';
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.project-item {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 374px;

  &__description-text {
    display: block;
    font-size: $fontMini;
    font-weight: $fontWeightRegular;
    line-height: $lineHeight;
    margin-top: 8px;
  }
  &__image {
    position: relative;
    z-index: calc($indexCurtain + 1);
    max-width: 100%;
    margin: 0 auto;
  }
}
.description--position,
.button-description--position {
  margin-top: 8px;
}
.button-description--position {
  position: relative;
  z-index: calc($indexCurtain + 1);
}
@media screen and (min-width: 768px) {
  .project-item {
    flex-direction: row;
    min-height: 406px;

    &__content {
      max-width: 570px;
    }
    &__description-text {
      font-size: $fontMedium;
    }
    &__image {
      margin: 0;
      margin-left: 30px;
      max-width: 327px;
    }
  }
}
@media screen and (min-width: 1024px) {
  .project-item {
    &__description-text {
      font-size: $fontNorm;
      font-weight: $fontWeightLight;
      margin-top: 16px;
    }
    &__image {
      max-width: 368px;
    }
  }
  .description--position,
  .button-description--position {
    margin-top: 16px;
  }
}
@media screen and (min-width: 1300px) {
  .project-item__image {
    max-width: 570px;
  }
}
</style>
