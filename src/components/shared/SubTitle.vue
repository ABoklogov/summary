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
  font-family: $fontBase;
  font-size: $fontMedium;
  font-style: $fontStyle;
  line-height: $lineHeight;
  font-weight: $fontWeightSemibold;
}
@media screen and (min-width: 768px) {
  .sub-title {
    font-size: $fontNorm;
  }
}
</style>
