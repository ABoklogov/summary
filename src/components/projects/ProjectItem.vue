<template>
  <div class="project-item">
    <div class="project-item__content">
      <a :href="link" class="project-item__link">
        {{ link }}
      </a>
      <span class="project-item__name">
        {{ name }}
      </span>
      <span class="project-item__text">
        {{ preText }}
      </span>
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
  // backgroundColor: {
  //   type: String,
  //   required: true
  // },
  language: {
    type: String
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.project-item {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  min-height: 374px;

  &__link,
  &__name,
  &__text {
    display: block;
    font-family: $fontBase;
    font-style: $fontStyle;
    line-height: normal;
    color: $black;
  }
  &__link {
    font-size: $fontMicro;
    font-weight: $fontWeightLight;
    transition: color $duration $timingFunction;
    margin-top: 16px;
  }
  &__link:hover,
  &__link:focus {
    color: $orange;
  }
  &__name {
    font-size: $fontMedium;
    font-weight: $fontWeightBold;
    margin-top: 8px;
  }
  &__text {
    font-size: $fontMini;
    font-weight: $fontWeightRegular;
    line-height: $lineHeight;
    margin-top: 8px;
  }
  &__image {
    position: relative;
    z-index: calc($indexCurtain + 1);
    max-width: 100%;
  }
}

@media screen and (min-width: 768px) {
  .project-item {
    flex-direction: row;
    min-height: 406px;

    &__content {
      max-width: 510px;
    }
    &__link {
      font-size: $fontMini;
      margin-top: 0;
    }
    &__name {
      font-size: $fontNorm;
    }
    &__text {
      font-size: $fontMedium;
    }
    &__image {
      margin-left: 30px;
      max-width: 327px;
    }
  }
}
@media screen and (min-width: 1024px) {
  .project-item {

    
    &__link {
      font-size: $fontSmall;
    }
    &__name {
      font-size: $fontBig;
    }
    &__text {
      font-size: $fontNorm;
      font-weight: $fontWeightLight;
      margin-top: 16px;
    }
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