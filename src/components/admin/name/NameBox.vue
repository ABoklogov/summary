<template>
  <Box>
    <SubTitle :text="'Смена имени, профессии и ссылки'" :admin="true" />
    <FormName />
  </Box>
</template>

<script setup>
import Box from '@/components/shared/Box.vue';
import SubTitle from '@/components/shared/SubTitle.vue';
import FormName from '@/components/admin/name/FormName.vue';
</script>
