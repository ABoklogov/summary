<template>
  <a class="link" :href="link">
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
  font-family: RockStar;
  font-size: $fontMedium;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  text-decoration-line: underline;
  color: $transparentBlack;
}
@media screen and (min-width: 768px) {
  .link {
    font-size: $fontNorm;
  }
}
</style>