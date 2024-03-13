<template>
  <Box class="name-box">
    <SubTitle :text="'Смена имени, профессии и ссылки'" :admin="true"/>

    <FormName
      :name="name"
      :profession="profession"
      :link="link"
    />
  </Box>
</template>

<script setup>
import Box from '@/components/shared/Box.vue';
import SubTitle from '@/components/shared/SubTitle.vue';
import FormName from '@/components/admin/name/FormName.vue';

defineProps({
  name: {
    type: String,
  },
  profession: {
    type: String,
  },
  link: {
    type: String,
  },
});
</script>

<style scoped lang="scss">
</style>
