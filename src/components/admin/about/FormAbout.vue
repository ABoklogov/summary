<template>
  <CustomForm @submit.prevent="submit" ref="aboutForm" class="form-about">
    <CustomTextaria
      name="ru-about"
      id="ru-about"
      label="RU"
      type="text"
      v-model:value="aboutData.ru"
      :rules="aboutRules"
      variant="filled"
      rows="5"
    />
    <div class="form-about__textaria">
      <CustomTextaria
        name="en-about"
        id="en-about"
        label="EN"
        type="text"
        v-model:value="aboutData.en"
        :rules="aboutRules"
        variant="filled"
        rows="5"
      />
    </div>
    <Button
      type="submit"
      label="Отправить"
      aria-label="Отправить данные"
      icon="pi pi-chevron-right" 
      iconPos="right"
      class="form-about__btn"
      :loading="loadingAbout"
    />
  </CustomForm>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useResumeStore } from '@/stores/resume';
import { ref, computed, onMounted } from 'vue';
import CustomForm from '@/components/shared/CustomForm.vue';
import CustomTextaria from '@/components/shared/CustomTextaria.vue';

const store = useResumeStore();
const { dataResume, loadingAbout } = storeToRefs(useResumeStore());

import {
  isRequired,
  charLimit,
} from '@/utils/validationRules';

const aboutForm = ref(null);
const aboutData = ref({
  ru: '',
  en: ''
});

onMounted(() => {
  aboutData.value = dataResume.value.about?.about;
});

const aboutRules = computed(() => {
  return [isRequired, charLimit(200)];
});

const submit = async () => {
  const isVolidForm = aboutForm.value.validate();
  if (!isVolidForm) {
    return;
  };

  await store.changeAbout(aboutData.value);
};
</script>

<style lang="scss" scoped>
.form-about {
  &__textaria {
    margin-top: 10px;
  }
  &__btn {
    margin-top: 20px;
  }
}
</style>
