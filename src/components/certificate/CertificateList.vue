<template>
  <ul class="certificate-list">
    <li
      v-for="{ position, company, webSite, start, finish, path } in list"
      :key="webSite"
      class="certificate-list__item"
    >
      <ActivityBox
        :position="language === 'ru' ? position.ru : position.en"
        :company="language === 'ru' ? company.ru : company.en"
        :start="language === 'ru' ? start.ru : start.en"
        :finish="language === 'ru' ? finish.ru : finish.en"
        :webSite="webSite"
        :language="language"
      />
      <a v-if="path" :href="baseUrl + path" download class="btn-download" target="_blank">
        <IconDownload />
      </a>
    </li>
  </ul>
</template>

<script setup>
import ActivityBox from '@/components/shared/ActivityBox.vue';
import IconDownload from '@/components/icons/IconDownload.vue';
import { baseUrl } from '@/services/urls.js';

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
.certificate-list__item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 12px;
  &:first-child {
    margin-top: 0;
  }
}
.btn-download svg {
  display: block;
  color: $transparentBold;
  transition: color $duration $timingFunction;
}
.btn-download:hover svg {
  color: $orange;
}
@media screen and (min-width: 1024px) {
  .certificate-list__item {
    margin-top: 20px;
    &:first-child {
      margin-top: 20px;
    }
  }
}
</style>
