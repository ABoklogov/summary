<template>
  <CustomForm @submit.prevent="submit" ref="nameForm">
    <div class="form-name-box">
      <label class="form-name-box__label">
        RU
        <CustomInput
          name="ru-name"
          id="ru-name"
          label="имя"
          type="text"
          v-model:value="nameData.ru.name"
          :rules="nameRules"
        />
        <div class="form-name-box__input">
          <CustomInput
            name="ru-profession"
            id="ru-profession"
            label="должность"
            type="text"
            v-model:value="nameData.ru.profession"
            :rules="professionRules"
          />
        </div>
        <div class="form-name-box__input">
          <CustomInput
            name="ru-link"
            id="ru-link"
            label="ссылка"
            type="text"
            v-model:value="nameData.ru.link"
          />
        </div>
      </label>
      <label class="form-name-box__label form-name-box__label--en">
        EN
        <CustomInput
          name="en-mame"
          id="en-name"
          label="name"
          type="text"
          v-model:value="nameData.en.name"
          :rules="nameRules"
        />
        <div class="form-name-box__input">
          <CustomInput
            name="en-profession"
            id="en-profession"
            label="profession"
            type="text"
            v-model:value="nameData.en.profession"
            :rules="professionRules"
          />
        </div>
        <div class="form-name-box__input">
          <CustomInput
            name="en-link"
            id="en-link"
            label="link"
            type="text"
            v-model:value="nameData.en.link"
          />
        </div>
      </label>
    </div>

    <Button
      type="submit"
      label="Отправить"
      aria-label="Отправить данные"
      icon="pi pi-chevron-right" 
      iconPos="right"
      class="form-name-box__btn"
      :loading="loadingName"
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
const { dataResume, loadingName } = storeToRefs(useResumeStore());

import {
  isRequired,
  charLimit,
  loginValidation,
} from '@/utils/validationRules';

const nameForm = ref(null);
const nameData = ref({
  ru: {
    name: '',
    profession: '',
    link: '',
  },
  en: {
    name: '',
    profession: '',
    link: '',
  }
});

onMounted(() => {
  nameData.value = dataResume.value.about?.name;
});

const nameRules = computed(() => {
  return [isRequired, charLimit(15), loginValidation];
});
const professionRules = computed(() => {
  return [isRequired, charLimit(40)];
});

const submit = async () => {
  const isVolidForm = nameForm.value.validate();

  if (!isVolidForm) {
    return;
  };

  await store.changeName(nameData.value);
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.form-name-box {
  display: flex;
  flex-direction: column;

  &__label {
    width: 100%;
  }
  &__input {
    margin-top: 10px;
  }
  &__label--en {
    margin-top: 20px;
  }
  &__btn {
    width: 100%;
    margin-top: 20px;
  }
}

@media screen and (min-width: 768px) {
  .form-name-box {
    flex-direction: row;
    &__label--en {
      margin-top: 0;
      margin-left: 20px;
    }
    &__btn {
      width: auto;
    }
  }
}
</style>
