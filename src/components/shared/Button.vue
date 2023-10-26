<template>
  <button 
    class="button" 
    type="button"
    :aria-label="ariaLabel"
  >
    <slot name="icon"></slot>
  </button>
</template>

<script setup>
defineProps({
  ariaLabel: {
    type: String,
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.button {
  border: none;
  outline: none;
  font: inherit;
  color: inherit;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
}
</style>