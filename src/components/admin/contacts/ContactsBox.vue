<template>
  <Box class="contacts">
    <SubTitle :text="'Контакты'" :admin="true" />
    <div class="contacts__box">
      <div class="contacts__sub-box">
        <FormCity />
        <FormEmail class="contacts__email" />
      </div>
      <div class="contacts__sub-box contacts__sub-box--two">
        <FormPhone />
        <FormTelegram class="contacts__telegram" />
      </div>
    </div>
  </Box>
</template>

<script setup>
import Box from '@/components/shared/Box.vue';
import SubTitle from '@/components/shared/SubTitle.vue';
import FormCity from '@/components/admin/contacts/FormCity.vue';
import FormEmail from '@/components/admin/contacts/FormEmail.vue';
import FormPhone from '@/components/admin/contacts/FormPhone.vue';
import FormTelegram from '@/components/admin/contacts/FormTelegram.vue';
</script>

<style scoped lang="scss">
.contacts {
  &__box,
  &__sub-box {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  &__email,
  &__telegram,
  &__sub-box--two {
    margin-top: 20px;
  }
}

@media screen and (min-width: 1024px) {
  .contacts {
    &__box {
      flex-direction: row;
    }
    &__sub-box--two {
      margin-top: 0;
      margin-left: 30px;
    }
  }
}
</style>
