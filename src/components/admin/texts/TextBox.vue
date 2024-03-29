<template>
  <Box>
    <SubTitle :text="'Тексты'" :admin="true" />
    <div class="form-text-box">
      <FormTextAbout />
      <div class="form-text-box__footer-text">
        <FormTextFooter />
      </div>
    </div>
  </Box>
</template>

<script setup>
import Box from '@/components/shared/Box.vue';
import SubTitle from '@/components/shared/SubTitle.vue';
import FormTextAbout from '@/components/admin/texts/FormTextAbout.vue';
import FormTextFooter from '@/components/admin/texts/FormTextFooter.vue';
</script>

<style scoped lang="scss">
.form-text-box {
  &__footer-text {
    margin-top: 30px;
  }
}
</style>
