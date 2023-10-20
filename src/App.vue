<template>
  <AppContainer>
    <Header />

    <main>
      <RouterView />
    </main>
  </AppContainer>
</template>

<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/shared/Header.vue';
import AppContainer from '@/components/shared/AppContainer.vue';
</script>

<style scoped lang="scss">
main {
  margin-top: 72px;
}

@media screen and (min-width: 1024px) {
  main {
    margin-top: 0;
  }
}
</style>
