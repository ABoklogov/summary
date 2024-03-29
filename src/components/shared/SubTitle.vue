<template>
  <h2 class="sub-title" :class="{ 'sub-title--admin': admin }">
    {{ text }}
  </h2>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean
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
  &--admin {
    font-size: $fontSmall;
    font-weight: $fontWeightBold;
  }
}
@media screen and (min-width: 768px) {
  .sub-title {
    font-size: $fontNorm;
    &--admin {
      font-size: $fontMedium;
    }
  }
}
</style>
