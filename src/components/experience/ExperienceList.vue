<template>
  <ul class="experience-list">
    <li
      v-for="{ position, company, webSite, responsibility, start, finish } in list"
      :key="webSite"
      class="experience-list__item"
    >
      <ActivityBox
        :position="position"
        :company="company"
        :webSite="webSite"
        :start="start"
        :finish="finish"
        :language="language"
      />
      <span class="experience-list__responsibility">
        {{ responsibility }}
      </span>
    </li>
  </ul>
</template>

<script setup>
import ActivityBox from '@/components/shared/ActivityBox.vue';

defineProps({
  list: {
    type: Array,
    required: true
  },
  language: {
    type: String
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.experience-list {
  &__item {
    margin-top: 50px;
  }
  &__item:first-child {
    margin-top: 0;
  }
  &__responsibility {
    display: inline-block;
    font-family: $fontBase;
    font-size: $fontMini;
    font-style: $fontStyle;
    font-weight: $fontWeightRegular;
    line-height: 1.3;
    color: $transparentBlack;
    transition: color $duration $timingFunction;
    margin-top: 10px;
  }
}

@media screen and (min-width: 768px) {
  .experience-list {
    &__item {
      margin-top: 60px;
    }
    &__responsibility {
      font-size: $fontMedium;
      margin-top: 20px;
    }
  }
}
@media screen and (min-width: 1024px) {
  .experience-list {
    &__item {
      margin-top: 80px;
    }
    &__item:first-child {
      margin-top: 20px;
    }
  }
}
</style>
