<template>
  <ul class="tech-skills-list">
    <li 
      v-for="item in list" 
      :key="item"
      class="tech-skills-list__item"
    >
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
.tech-skills-list__item span {
  margin-top: 4px;
  display: block;
  font-family: RockStar;
  font-size: $fontMedium;
  color: $transparentBold;
}
@media screen and (min-width: 1024px) {
  .tech-skills-list__item {
    margin-top: 16px;
    & span {
      font-size: $fontNorm;
    }
  }
}
</style>