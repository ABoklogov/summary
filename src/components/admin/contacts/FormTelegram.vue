<template>
  <CustomForm @submit.prevent="submit" ref="telegramForm" class="telegram-form">
    <div class="telegram-form__sub-box">
      <span class="telegram-form__title">telegram</span>
      <CustomInput
        name="link"
        id="link"
        label="адрес"
        type="text"
        v-model:value="telegramData.link"
        :rules="telegramLinkRules"
      />
      <div class="telegram-form__input">
        <CustomInput
          name="text"
          id="text"
          label="текст"
          type="text"
          v-model:value="telegramData.text"
          :rules="telegramRules"
        />
      </div>
    </div>

    <Button
      type="submit"
      aria-label="Отправить данные"
      icon="pi pi-chevron-right"
      iconPos="right"
      class="telegram-form__btn"
      :loading="loadingTelegram"
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
const { dataResume, loadingTelegram } = storeToRefs(useResumeStore());

import { isRequired, charLimit, loginValidation, urlValidation } from '@/utils/validationRules';

const telegramForm = ref(null);
const telegramData = ref({
  link: '',
  text: ''
});

onMounted(() => {
  telegramData.value = dataResume.value.contacts?.telegram;
});

const telegramRules = computed(() => {
  return [isRequired, charLimit(30), loginValidation];
});
const telegramLinkRules = computed(() => {
  return [isRequired, charLimit(50), urlValidation];
});

const submit = async () => {
  const isVolidForm = telegramForm.value.validate();

  if (!isVolidForm) {
    return;
  }

  await store.changeTelegram(telegramData.value);
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.telegram-form {
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
