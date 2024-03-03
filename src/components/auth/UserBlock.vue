<template>
  <div>
    {{login}}
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'; 
import { storeToRefs } from 'pinia';
import { ref, computed } from 'vue';

// const store = useAuthStore();
const { login } = storeToRefs(useAuthStore());

</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';

</style>
