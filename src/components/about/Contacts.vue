<template>
  <div class="contacts">
    <span>Telegram: {{ telegram }}</span>
    <a :href="phone.link">{{ phone.text }}</a>
    <a :href="email.link">{{ email.text }}</a>
    <span>{{ language === 'ru' ? city.ru : city.en }}</span>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useViewStore } from '@/stores/view';
const { language } = storeToRefs(useViewStore());
import { telegram, city, email, phone } from '@/services/data.js';
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.contacts a,
.contacts span {
  display: block;
  font-size: $fontMini;
  line-height: 1.7;
  text-align: right;
  text-decoration: auto;
}
</style>