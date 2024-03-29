<template>
  <div class="certificate-box">
    <SubTitle :text="language === 'ru' ? 'Сертификаты' : 'Certificate'" />
    <CertificateList
      :list="certificate"
      :language="language"
    />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import SubTitle from '@/components/shared/SubTitle.vue';
import CertificateList from './CertificateList.vue';
import { useViewStore } from '@/stores/view';
const { language } = storeToRefs(useViewStore());

defineProps({
  certificate: {
    type: Array,
    required: true
  },
});
</script>
