<template>
  <button class="btn" type="button" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

</style>
