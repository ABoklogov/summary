<template>
  <CustomForm 
    @submit.prevent="submit" 
    ref="emailForm"
    class="email-form"
  >
    <div class="email-form__sub-box">
      <span class="email-form__title">эл. почта</span>
      <CustomInput
        name="link"
        id="link"
        label="адрес"
        type="text"
        v-model:value="emailData.link"
        :rules="emailRules"
      />
      <div class="email-form__input">
        <CustomInput
          name="text"
          id="text"
          label="текст"
          type="text"
          v-model:value="emailData.text"
          :rules="emailRules"
        />
      </div>
    </div>

    <Button
      type="submit"
      aria-label="Отправить данные"
      icon="pi pi-chevron-right" 
      iconPos="right"
      class="email-form__btn"
      :loading="loadingEmail"
    />
  </CustomForm>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useResumeStore } from '@/stores/resume';
import { ref, computed, onMounted } from 'vue';
import CustomForm from '@/components/shared/CustomForm.vue';
import CustomInput from '@/components/shared/CustomInput.vue';

const store = useResumeStore();
const { dataResume, loadingEmail } = storeToRefs(useResumeStore());

import {
  isRequired,
  charLimit,
  emailValidation,
} from '@/utils/validationRules';

const emailForm = ref(null);
const emailData = ref({
  link: '',
  text: ''
});

onMounted(() => {
  emailData.value = dataResume.value.contacts?.email;
});

const emailRules = computed(() => {
  return [isRequired, charLimit(40), emailValidation];
});

const submit = async () => {
  const isVolidForm = emailForm.value.validate();

  if (!isVolidForm) {
    return;
  };

  await store.changeEmail(emailData.value);
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.email-form {
  display: flex;
  justify-content: space-between;

  &__sub-box {
    width: 100%;
  }
  &__btn {
    margin-left: 8px;
  }
  &__input {
    margin-top: 10px;
  }
  &__title {
    font-weight: $fontWeightBold;
  }
}
</style>
