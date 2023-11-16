<template>
 <div class="links-box">
    <span class="links-box__title">{{ title }}</span>
    <ul>
      <li v-for="item in list" :key="item.link">
        <a class="links-box__item" :href="item.link">
          {{ item.text }}
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
      return arr.every(obj => {
        return Object.values(obj).every(el => typeof el === 'string')
      });
    },
    required: true
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
  &__item {
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
  &__item:hover,
  &__item:focus {
    color: $orangeHover;
  }
}
</style>
