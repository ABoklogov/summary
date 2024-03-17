<template>
  <Box class="contacts-box">
    <SubTitle :text="'Контакты'" :admin="true"/>
    <FormCity />
  </Box>
</template>

<script setup>
import Box from '@/components/shared/Box.vue';
import FormCity from '@/components/admin/contacts/FormCity.vue';
import SubTitle from '@/components/shared/SubTitle.vue';
</script>
