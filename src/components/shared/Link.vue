<template>
  <a class="link" :href="link" target="_blank">
    {{ text }}
  </a>
</template>

<script setup>
defineProps({
  link: {
    type: String,
    required: true
  },
  text: {
    type: String,
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.link {
  font-family: $fontBase;
  font-size: $fontMedium;
  font-style: $fontStyle;
  font-weight: $fontWeightRegular;
  line-height: $lineHeight;
  text-decoration-line: underline;
  color: $transparentBlack;
  transition: color $duration $timingFunction;
  &:hover,
  &:focus {
    color: $orange;
  }
}
@media screen and (min-width: 768px) {
  .link {
    font-size: $fontNorm;
  }
}
</style>