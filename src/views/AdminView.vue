<template>
  <div class="admin-view">
    <UserBlock class="user-box" />
  </div>
</template>

<script setup>
import UserBlock from '@/components/auth/UserBlock.vue';
// import { storeToRefs } from 'pinia';
// import { useViewStore } from '@/stores/view';
// const { isLoggedIn } = storeToRefs(useViewStore());
// console.log("🚀 ~ file: AdminView.vue:12 ~ isLoggedIn:", isLoggedIn.value)
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.user-box {
  margin-left: auto;
}

@media screen and (min-width: 768px) {
  .admin-view {
    padding: 0 $contentPaddingTablete;
  }
}
</style>
