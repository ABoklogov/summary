<template>
  <ul class="education-list">
    <li v-for="{ institution, speciality } in list" :key="institution" class="education-list__item">
      <span>{{ institution }}</span> - <span>{{ speciality }}</span>
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
.education-list__item {
  & span {
    font-family: $fontBase;
    font-size: $fontMedium;
    font-style: $fontStyle;
    font-weight: $fontWeightRegular;
    line-height: 32px;
    color: $transparentBlack;
  }
}

@media screen and (min-width: 768px) {
  .education-list__item span {
    font-size: $fontNorm;
  }
}
@media screen and (min-width: 1024px) {
  .education-list__item {
    margin-top: 20px;
  }
}
</style>
