<template>
  <div class="name-container">
    <span class="name-container__name">{{ name }}</span>
    <span class="name-container__jobTitle">{{ profession }}</span>
  </div>
</template>

<script setup>
import { myName } from '@/services/data.js';
import { computed } from 'vue';
import { useViewStore } from '@/stores/view';
const { language } = useViewStore();

const name = computed(() => {
  return language === 'ru' ? myName.ru.name : myName.en.name;
});

const profession = computed(() => {
  return language === 'ru' ? myName.ru.profession : myName.en.profession;
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.name-container {
  margin-top: 24px;
  &__name,
  &__jobTitle {
    display: block;
    line-height: normal;
  }
  &__name {
    font-weight: 600;
    color: $black;
  }
  &__jobTitle {
    font-weight: 400;
    color: $transparentBlack;
  }
}
</style>
