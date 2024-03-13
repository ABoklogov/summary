<template>
  <CustomForm @submit.prevent="submit" ref="nameForm">
    <CustomInput
      name="nameRu"
      id="nameRu"
      type="text"
      autocomplete="name"
      v-model:value="nameData.ru.name"
      :rules="nameRules"
    />
  </CustomForm>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useResumeStore } from '@/stores/resume';
import { ref, computed, onMounted } from 'vue';
import CustomForm from '@/components/shared/CustomForm.vue';
import CustomInput from '@/components/shared/CustomInput.vue';
const { dataResume } = storeToRefs(useResumeStore());

import {
  isRequired,
  charLimit,
  loginValidation,
} from '@/utils/validationRules';

defineProps({
  name: {
    type: String,
  },
  profession: {
    type: String,
  },
  link: {
    type: String,
  },
});

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

const submit = async () => {
  // const isVolidForm = authForm.value.validate();

  // if (!isVolidForm) {
  //   return;
  // }

  // await store.logIn(formData.value);

  // if (!error.value) {
  //   authForm.value.reset();
  // }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.input-position {
  margin-top: 10px;
}
</style>
