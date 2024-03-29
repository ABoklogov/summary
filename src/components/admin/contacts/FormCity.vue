<template>
  <CustomForm 
    @submit.prevent="submit" 
    ref="cityForm"
    class="city-form"
  >
    <div class="city-form__sub-box">
      <span class="city-form__title">город</span>
      <CustomInput
        name="ru-city"
        id="ru-city"
        label="RU"
        type="text"
        v-model:value="cityData.ru"
        :rules="cityRules"
      />
      <div class="city-form__input">
        <CustomInput
          name="en-city"
          id="en-city"
          label="EN"
          type="text"
          v-model:value="cityData.en"
          :rules="cityRules"
        />
      </div>
    </div>

    <Button
      type="submit"
      aria-label="Отправить данные"
      icon="pi pi-chevron-right" 
      iconPos="right"
      class="city-form__btn"
      :loading="loadingCity"
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
const { dataResume, loadingCity } = storeToRefs(useResumeStore());

import {
  isRequired,
  charLimit,
} from '@/utils/validationRules';

const cityForm = ref(null);
const cityData = ref({
  ru: '',
  en: ''
});

onMounted(() => {
  cityData.value = dataResume.value.contacts?.city;
});

const cityRules = computed(() => {
  return [isRequired, charLimit(30)];
});

const submit = async () => {
  const isVolidForm = cityForm.value.validate();

  if (!isVolidForm) {
    return;
  };

  await store.changeCity(cityData.value);
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.city-form {
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
