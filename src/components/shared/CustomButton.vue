<template>
  <button class="button" type="button" :aria-label="ariaLabel" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  ariaLabel: {
    type: String
  }
});
defineEmits(['click']);
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.button {
  display: flex;
  border: none;
  font: inherit;
  color: inherit;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
}
</style>
