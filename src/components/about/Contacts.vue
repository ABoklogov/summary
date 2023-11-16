<template>
  <div class="contacts"> 
    <a :href="telegram.link">{{ telegram.text }}</a>
    <a :href="phone.link">{{ phone.text }}</a>
    <a :href="email.link">{{ email.text }}</a>
    <span>{{ language === 'ru' ? city.ru : city.en }}</span>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useViewStore } from '@/stores/view';
const { language } = storeToRefs(useViewStore());
import { telegram, city, email, phone } from '@/services/dataResume.js';
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
