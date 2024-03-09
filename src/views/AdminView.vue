<template>
  <div class="admin-view">
    <UserBlock class="user-box" />
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import { onBeforeMount } from 'vue';
import UserBlock from '@/components/auth/UserBlock.vue';

const store = useAuthStore();
// запрашиваем текущего юзера
onBeforeMount(() => {
  store.fetchCurrentUser();
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.user-box {
  margin-left: auto;
}

@media screen and (min-width: 768px) {
  .admin-view {
    background-color: $pink;
    padding: 50px $contentPaddingTablete;
  }
}
</style>
