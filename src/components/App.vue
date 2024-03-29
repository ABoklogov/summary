<template>
  <AppContainer>
    <Toast />
    <Header id="header" />

    <main id="main">
      <RouterView />
    </main>

    <Curtain />
  </AppContainer>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Curtain from '@/components/shared/Curtain.vue';
import AppContainer from '@/components/shared/AppContainer.vue';
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';

main {
  margin-top: $headerTopMobile;
}

@media screen and (min-width: 1024px) {
  main {
    margin-top: 0;
  }
}
</style>
