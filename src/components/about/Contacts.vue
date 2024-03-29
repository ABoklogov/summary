<template>
  <div class="contacts">
    <a :href="contacts?.telegram.link">
      {{ contacts?.telegram.text }}
    </a>
    <a :href="contacts?.phone.link">
      {{ contacts?.phone.text }}
    </a>
    <a :href="contacts?.email.link">
      {{ contacts?.email.text }}
    </a>
    <span>
      {{ language === 'ru' ? contacts?.city.ru : contacts?.city.en }}
    </span>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useViewStore } from '@/stores/view';
const { language } = storeToRefs(useViewStore());

defineProps({
  contacts: {
    type: Object
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.contacts a,
.contacts span {
  display: block;
  font-family: $fontBase;
  font-size: $fontMini;
  font-style: $fontStyle;
  font-weight: $fontWeightRegular;
  line-height: 1.7;
  color: $black;
  text-align: right;
  text-decoration: auto;
  transition: color $duration $timingFunction;
}
.contacts a:hover,
.contacts a:focus {
  color: $orange;
}
</style>
