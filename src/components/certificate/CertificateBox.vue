<template>
  <div class="certificate-box">
    <SubTitle :text="language === 'ru' ? 'Сертификаты' : 'Certificate'" />
    <CertificateList :list="language === 'ru' ? certificate.ru : certificate.en" :language="language"/>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import SubTitle from '@/components/shared/SubTitle.vue';
import CertificateList from './CertificateList.vue';
import { certificate } from '@/services/data.js';
import { useViewStore } from '@/stores/view';
const { language } = storeToRefs(useViewStore());
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
</style>