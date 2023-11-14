<template>
  <div calss="description">
    <span class="description__text">{{ description }}</span>

    <div class="description__tehnology">
      <span class="description__text description__text--bold">
        {{ language === 'ru' ? 'Технологии' : 'Technologies' }}:
      </span>
      <ul class="description__list-tehnology">
        <li
          v-for="(item, idx) in tehnology"
          :key="`item-${idx}`"
          class="description__item-tehnology"
        >
          {{ item }}
        </li>
      </ul>
    </div>

    <div class="description__source">
      <span class="description__text description__text--bold">
        {{ language === 'ru' ? 'Исходные файлы' : 'Source files' }}:
      </span>
      <a :href="linkFiles.url" class="description__text description__text--link">
        {{ linkFiles.text }}
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  description: {
    type: String,
    required: true
  },
  tehnology: {
    type: Array
  },
  linkFiles: {
    type: Object
  },
  language: {
    type: String
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.description {
  &__text,
  &__item-tehnology {
    display: block;
    font-family: $fontBase;
    font-size: $fontMini;
    font-weight: $fontWeightRegular;
    line-height: $lineHeight;
    font-style: $fontStyle;
    color: $black;
    transition: color $duration $timingFunction;
    &.description__text--bold {
      font-weight: $fontWeightSemibold;
    }
  }
  &__tehnology,
  &__source {
    margin-top: 8px;
  }
  &__list-tehnology {
    display: flex;
  }
  &__item-tehnology:not(:last-child) {
    margin-right: 8px;
  }
  &__item-tehnology:not(:last-child):after {
    content: ',';
  }
  &__item-tehnology:last-child:after {
    content: '.';
  }
  &__text--link:hover,
  &__text--link:focus {
    color: $orange;
  }
}

@media screen and (min-width: 768px) {
  .description__text,
  .description__item-tehnology {
    font-size: $fontMedium;
  }
}
@media screen and (min-width: 1024px) {
  .description {
    &__text,
    &__item-tehnology {
      font-size: $fontNorm;
      font-weight: $fontWeightLight;
    }
    &__tehnology,
    &__source {
      margin-top: 16px;
    }
  }
}
</style>
