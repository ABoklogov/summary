<template>
  <CustomForm @submit.prevent="submit" ref="aboutForm">
    <Textarea 
      v-model="aboutData.ru" 
      rows="5" 
      cols="30" 
      name="ru-about"
      id="ru-about"
    />
    <Textarea 
      v-model="aboutData.en" 
      rows="5" 
      cols="30" 
      name="en-about"
      id="en-about"
    />

    <Button
      type="submit"
      label="Отправить"
      aria-label="Отправить данные"
      icon="pi pi-chevron-right" 
      iconPos="right"
      class="form-about__btn"
    />
      <!-- :loading="loadingName" -->
  </CustomForm>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useResumeStore } from '@/stores/resume';
import { ref, computed, onMounted } from 'vue';
import CustomForm from '@/components/shared/CustomForm.vue';

const store = useResumeStore();
const { dataResume, loadingAbout } = storeToRefs(useResumeStore());

import {
  isRequired,
  charLimit,
  loginValidation,
} from '@/utils/validationRules';

const aboutForm = ref(null);
const aboutData = ref({
  ru: '',
  en: ''
});

const submit = async () => {
  // const isVolidForm = nameForm.value.validate();

  // if (!isVolidForm) {
  //   return;
  // };

  // await store.changeName(nameData.value);
};
</script>
