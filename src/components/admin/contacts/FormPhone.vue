<template>
  <CustomForm @submit.prevent="submit" ref="phoneForm" class="phone-form">
    <div class="phone-form__sub-box">
      <span class="phone-form__title">телефон</span>
      <CustomInput
        name="link"
        id="link"
        label="адрес"
        type="text"
        v-model:value="phoneData.link"
        :rules="phoneRules"
      />
      <div class="phone-form__input">
        <CustomInput
          name="text"
          id="text"
          label="текст"
          type="text"
          v-model:value="phoneData.text"
          :rules="phoneRules"
        />
      </div>
    </div>

    <Button
      type="submit"
      aria-label="Отправить данные"
      icon="pi pi-chevron-right"
      iconPos="right"
      class="phone-form__btn"
      :loading="loadingPhone"
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
const { dataResume, loadingPhone } = storeToRefs(useResumeStore());

import { isRequired, charLimit, phoneValidation } from '@/utils/validationRules';

const phoneForm = ref(null);
const phoneData = ref({
  link: '',
  text: ''
});

onMounted(() => {
  phoneData.value = dataResume.value.contacts?.phone;
});

const phoneRules = computed(() => {
  return [isRequired, charLimit(18), phoneValidation];
});

const submit = async () => {
  const isVolidForm = phoneForm.value.validate();

  if (!isVolidForm) {
    return;
  }

  await store.changePhone(phoneData.value);
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.phone-form {
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
