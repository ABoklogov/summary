<template>
  <header class="header" :class="{ 'header--hidden': scrollBottom }">
    <SiteNav />
    <Multiselect v-model="language" :options="optionsSelectLanguage" :show-labels="false" :showPointer="false" />
  </header>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import SiteNav from '@/components/SiteNav.vue';
import Multiselect from 'vue-multiselect';
import { useViewStore } from '@/stores/view';
const { language, optionsSelectLanguage } = storeToRefs(useViewStore());

const scrollBottom = ref(false);

// слушаем скролл
let last;
// для телефонов и планшетов
document.addEventListener('touchmove', e => {
  const current = e.touches[0].clientY;

  if (current > last) {
    scrollBottom.value = false;
  } else if (current < last) {
    scrollBottom.value = true;
  };

  last = current;
});
// для десктопа
document.addEventListener('wheel', e => {
  e.wheelDelta > 0 ? scrollBottom.value = false : scrollBottom.value = true;
});
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style scoped lang="scss">
@import '@/assets/scss/variables';

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100vw;
  background-color: $white;
  transition: top 300ms;

  &--hidden {
    top: -57px;
  }

  & .multiselect {
    width: 120px;
  }
}

@media screen and (min-width: 1024px) {
  .header {
    position: relative;
    width: auto;
    transition: top 300ms;
  }
}
</style>