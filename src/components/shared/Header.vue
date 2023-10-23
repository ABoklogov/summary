<template>
  <header class="header" :class="{ 'header--hidden': scrollBottom }">
    <SiteNav />
    <Multiselect v-model="language" :options="optionsSelectLanguage" :show-labels="false" :showPointer="false" />
  </header>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { ref, onMounted } from 'vue';
import SiteNav from '@/components/SiteNav.vue';
import Multiselect from 'vue-multiselect';
import { useViewStore } from '@/stores/view';
const { language, optionsSelectLanguage } = storeToRefs(useViewStore());

const scrollBottom = ref(false);
const showHeader = ref(true);

const updateShowHeader = () => {
  let resume = document.querySelector('#resume');
  if (resume) {
    resume = resume.getBoundingClientRect();

    if (resume.top < 0) {
      showHeader.value = false;
    } else {
      showHeader.value = true;
    };
  };
};
// слушаем скролл
let last;
onMounted(() => {
  document.addEventListener('touchmove', (e) => {
    if (!showHeader.value) {
      const current = e.touches[0].clientY;

      if (current > last) {
        scrollBottom.value = false;
      } else if (current < last) {
        scrollBottom.value = true;
      };

      last = current;
    };
    updateShowHeader();
  });
})
// для десктопа
// document.addEventListener('wheel', e => {
//   e.wheelDelta > 0 ? scrollBottom.value = false : scrollBottom.value = true;
// });
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
  padding: 0 22px;
  background-color: $white;
  transition: top $duration $timingFunction;

  &--hidden {
    top: -$headerTopMobile;
  }

  & .multiselect {
    width: 120px;
  }
}

@media screen and (min-width: 1024px) {
  .header {
    position: relative;
    width: auto;
    padding: 0;
  }
}
</style>