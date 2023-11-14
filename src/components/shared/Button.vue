<template>
  <button class="button" type="button" :aria-label="ariaLabel">
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  ariaLabel: {
    type: String
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.button {
  border: none;
  font: inherit;
  color: inherit;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
}
</style>
