<template>
  <span class="message">
    <slot></slot>
  </span>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.message {
  font-size: $fontMicro;
  color: $orange;
  padding: 5px 0;
}
</style>
