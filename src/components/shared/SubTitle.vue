<template>
  <h2 class="sub-title">
    {{ text }}
  </h2>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.sub-title {
  font-family: RockStar;
  font-size: $fontMedium;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  font-weight: 600;
}
@media screen and (min-width: 768px) {
  .sub-title {
    font-size: $fontNorm;
  }
}
</style>