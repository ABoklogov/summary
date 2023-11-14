<template>
  <ul class="tech-skills-list">
    <li v-for="item in list" :key="item" class="tech-skills-list__item">
      <span>{{ item }}</span>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  list: {
    type: Array,
    required: true
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.tech-skills-list__item {
  margin-top: 4px;
  & span {
    display: block;
    font-family: $fontBase;
    font-size: $fontMedium;
    font-style: $fontStyle;
    font-weight: $fontWeightRegular;
    line-height: $lineHeight;
    color: $transparentBold;
  }
}
@media screen and (min-width: 768px) {
  .tech-skills-list__item span {
    font-size: $fontNorm;
  }
}
@media screen and (min-width: 1024px) {
  .tech-skills-list__item {
    margin-top: 16px;
  }
  .tech-skills-list__item:first-child {
    margin-top: 20px;
  }
}
</style>
