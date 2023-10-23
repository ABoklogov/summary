<template>
  <nav class="site-nav" :class="{ 'site-nav--black-theme': themeBlack }">
    <RouterLink to="/">resume</RouterLink>
    <RouterLink to="/portfolio">portfolio</RouterLink>
  </nav>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useViewStore } from '@/stores/view';
const { themeBlack } = storeToRefs(useViewStore());
</script>
<style scoped lang="scss">
@import '@/assets/scss/variables';

.site-nav {
  padding: 10px 0;
  position: relative;

  & a {
    font-size: $fontMedium;
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
    margin-right: 12px;
  }

  & .router-link-active {
    color: $orange;
  }

  &--black-theme a {
    color: $white;
  }
}

@media screen and (min-width: 768px) {
  .site-nav {
    & a {
      font-size: $fontNorm;
    }

    & a:first-child {
      margin-right: 20px;
    }
  }
}

@media screen and (min-width: 1024px) {
  .site-nav {
    padding: 20px 0;

    & a {
      font-size: $fontBig;
    }
  }
}
</style>