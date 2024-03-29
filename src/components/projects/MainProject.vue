<template>
  <div calss="main">
    <a :href="link.url" class="main__link" target="_blank">
      {{ language === 'ru' ? link.text.ru : link.text.en }}
    </a>
    <span class="main__name">
      {{ language === 'ru' ? name.ru : name.en }}
    </span>
    <span class="main__text main__text--position">
      {{ language === 'ru' ? preText.ru : preText.en }}
    </span>

    <div class="main__tehnology">
      <span class="main__text main__text--bold">
        {{ language === 'ru' ? 'Технологии' : 'Technologies' }}:
      </span>
      <ul class="main__list-tehnology">
        <li
          v-for="(item, idx) in tehnology"
          :key="`item-${item + idx}`"
          class="main__item-tehnology"
        >
          {{ item }}
        </li>
      </ul>
    </div>

    <div v-if="linkFiles.url" class="main__source">
      <span class="main__text main__text--bold">
        {{ language === 'ru' ? 'Исходные файлы' : 'Source files' }}:
      </span>
      <a :href="linkFiles.url" class="main__text main__text--link" target="_blank">
        {{ linkFiles.text }}
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  tehnology: {
    type: Array,
    validator(arr) {
      return arr.every((el) => typeof el === 'string');
    }
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
  link: {
    type: Object,
    validator(obj) {
      let result;
      for (var key in obj) {
        result = typeof obj[key] === 'string';
      }
      return result;
    }
  },
  name: {
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
    type: Object,
    validator(obj) {
      let result;
      for (var key in obj) {
        result = typeof obj[key] === 'string';
      }
      return result;
    }
  },
  language: {
    type: String
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.main {
  &__link,
  &__name,
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
    &.main__text--bold {
      font-weight: $fontWeightSemibold;
    }
  }
  &__link {
    display: inline-block;
    font-weight: $fontWeightLight;
    margin-top: 16px;
  }
  &__link:hover,
  &__link:focus {
    color: $orange;
  }
  &__name {
    font-size: $fontMedium;
    font-weight: $fontWeightBold;
    line-height: normal;
    margin-top: 8px;
  }
  &__tehnology,
  &__source {
    display: flex;
    flex-wrap: wrap;
  }
  &__text--position,
  &__tehnology,
  &__source {
    margin-top: 8px;
  }
  &__list-tehnology {
    display: flex;
    flex-wrap: wrap;
    margin-left: 8px;
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
  &__text--link {
    margin-left: 8px;
  }
  &__text--link:hover,
  &__text--link:focus {
    color: $orange;
  }
}
@media screen and (min-width: 768px) {
  .main {
    &__link,
    &__text,
    &__item-tehnology {
      font-size: $fontMedium;
    }
    &__link {
      margin-top: 0;
    }
    &__name {
      font-size: $fontNorm;
    }
  }
}
@media screen and (min-width: 1024px) {
  .main {
    &__text,
    &__item-tehnology {
      font-size: $fontNorm;
      font-weight: $fontWeightLight;
    }
    &__link {
      font-size: $fontMedium;
    }
    &__name {
      font-size: $fontBig;
    }
    &__text--position,
    &__tehnology,
    &__source {
      margin-top: 16px;
    }
  }
}
</style>
