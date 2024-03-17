<template>
  <Box class="cantacts-box">
    <SubTitle :text="'Контакты'" :admin="true"/>
    <FormCity />
    <div class="cantacts-box__email">
      <FormEmail />
    </div>
  </Box>
</template>

<script setup>
import Box from '@/components/shared/Box.vue';
import SubTitle from '@/components/shared/SubTitle.vue';
import FormCity from '@/components/admin/contacts/FormCity.vue';
import FormEmail from '@/components/admin/contacts/FormEmail.vue';
</script>

<style scoped lang="scss">
.cantacts-box {
  &__email {
    margin-top: 20px;
  }
}
</style>