<template>
  <Box>
    <SubTitle :text="'Обо мне'" :admin="true"/>
    <FormAbout />
  </Box>
</template>

<script setup>
import Box from '@/components/shared/Box.vue';
import SubTitle from '@/components/shared/SubTitle.vue';
import FormAbout from '@/components/admin/about/FormAbout.vue';
</script>
