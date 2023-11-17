<template>
  <div class="links-box">
    <span class="links-box__title">{{ title }}</span>
    <ul :class="{ 'links-box__list--social': social }">
      <li v-for="item in list" :key="item.link" :class="{ 'links-box__item--social': social }">
        <a class="links-box__link" :class="{ 'links-box__link--social': social }" :href="item.link">
          {{ social ? item.shortLink : item.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  list: {
    type: Array,
    validator(arr) {
      return arr.every((obj) => {
        return Object.values(obj).every((el) => typeof el === 'string');
      });
    },
    required: true
  },
  social: {
    type: Boolean
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.links-box {
  &__title {
    display: inline-block;
    font-family: $fontBase;
    font-size: $fontMedium;
    font-style: $fontStyle;
    font-weight: $fontWeightBold;
    line-height: normal;
    color: $white;
    margin-bottom: 8px;
  }
  &__list--social {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  &__item--social:not(:first-child) {
    margin-left: 8px;
  }
  &__link {
    display: block;
    font-family: $fontBase;
    font-size: $fontMini;
    font-style: $fontStyle;
    font-weight: $fontWeightLight;
    line-height: $lineHeight;
    color: $orange;
    cursor: pointer;
    text-decoration: none;
    transition: color $duration $timingFunction;
  }
  &__link:hover,
  &__link:focus {
    color: $orangeHover;
  }
  &__link--social {
    text-decoration: underline;
  }
}

@media screen and (min-width: 768px) {
  .links-box {
    &__title {
      font-size: $fontNorm;
    }
    &__link {
      font-size: $fontMedium;
    }
  }
}
@media screen and (min-width: 1024px) {
  .links-box {
    &__title {
      font-size: $fontBig;
      margin-bottom: 16px;
    }
    &__item--social:not(:first-child) {
      margin-left: 16px;
    }
    &__link {
      font-size: $fontNorm;
    }
  }
}
</style>
