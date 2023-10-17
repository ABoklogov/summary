<template>
  <AppContainer>
    <header>
      <nav class="site-nav">
        <RouterLink to="/">resume</RouterLink>
        <RouterLink to="/portfolio">portfolio</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </AppContainer>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppContainer from '@/components/shared/AppContainer.vue'
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.site-nav {
  padding: 20px 0;

  & a {
    font-size: $fontBig;
    font-weight: 500;
    color: $black;
    text-decoration: auto;
    transition: color $duration $timingFunction;
  }
  & a:hover,
  & a:focus {
    color: $orange;
  }
  & a:first-child {
    margin-right: 20px;
  }

  & .router-link-active {
    color: $orange;
  }
}
</style>
