<template>
  <Box>
    <SubTitle :text="'Ссылки'" :admin="true"/>
    <FormLinkClient />
    <div class="form-link-box">
      <FormLinkServer />
    </div>
  </Box>
</template>

<script setup>
import Box from '@/components/shared/Box.vue';
import SubTitle from '@/components/shared/SubTitle.vue';
import FormLinkServer from '@/components/admin/links/FormLinkServer.vue';
import FormLinkClient from '@/components/admin/links/FormLinkClient.vue';
</script>

<style scoped lang="scss">
.form-link-box {
  margin-top: 10px;
}
</style>