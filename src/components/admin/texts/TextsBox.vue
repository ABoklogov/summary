<template>
  <Box>
    <SubTitle :text="'Тексты'" :admin="true"/>
    <div class="form-texts-box">
      <FormTextAbout />
      <!-- <FormTextFooter /> -->
    </div>
  </Box>
</template>

<script setup>
import Box from '@/components/shared/Box.vue';
import SubTitle from '@/components/shared/SubTitle.vue';
import FormTextAbout from '@/components/admin/texts/FormTextAbout.vue';
// import FormTextFooter from '@/components/admin/texts/FormTextFooter.vue';
</script>

<style>
.form-texts-box {
  /* display: flex; */
  /* flex-direction: column; */
}

/* @media screen and (min-width: 1024px) {
  .form-texts-box {
    flex-direction: row;
  }
} */
</style>