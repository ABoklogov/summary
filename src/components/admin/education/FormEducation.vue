<template>
  <CustomForm @submit.prevent="submit" ref="educationForm">
    <div class="form-education-box">
      <CustomInput
        name="ru-institution"
        id="ru-institution"
        label="институт"
        type="text"
        v-model:value="educationData.institution.ru"
        :rules="textRules"
      />
      <div class="form-education-box__input">
        <CustomInput
          name="en-institution"
          id="en-institution"
          label="institution"
          type="text"
          v-model:value="educationData.institution.en"
          :rules="textRules"
        />
      </div>
      <div class="form-education-box__input">
        <CustomInput
          name="ru-speciality"
          id="ru-speciality"
          label="специальность"
          type="text"
          v-model:value="educationData.speciality.ru"
          :rules="textRules"
        />
      </div>
      <div class="form-education-box__input">
        <CustomInput
          name="en-speciality"
          id="en-speciality"
          label="speciality"
          type="text"
          v-model:value="educationData.speciality.en"
          :rules="textRules"
        />
      </div>
    </div>

    <div class="form-education-box__footer">
      <Button 
        label="Отмена" 
        icon="pi pi-times" 
        iconPos="right" 
        text 
        @click="props.hideDialog" 
      />
      <Button 
        type="submit"
        label="Отправить" 
        aria-label="Отправить данные"
        icon="pi pi-check" 
        iconPos="right"  
        :loading="loadingEducation"
      />
    </div>
  </CustomForm>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useResumeStore } from '@/stores/resume';
import { ref, computed, onMounted } from 'vue';
import CustomForm from '@/components/shared/CustomForm.vue';
import CustomInput from '@/components/shared/CustomInput.vue';

const { changeEducation, addEducation } = useResumeStore();
const { loadingEducation } = storeToRefs(useResumeStore());

import {
  isRequired,
  charLimit,
  loginValidation,
} from '@/utils/validationRules';

const educationForm = ref(null);
const educationData = ref({
  institution: {
    ru: '',
    en: ''
  },
  speciality: {
    ru: '',
    en: ''
  },
});

const props = defineProps({
  education: {
    type: Object,
    required: true
  },
  hideDialog: {
    type: Function
  }
});

onMounted(() => {
  educationData.value = props.education;
});

const textRules = computed(() => {
  return [isRequired, charLimit(50), loginValidation];
});

const submit = async () => {
  const isVolidForm = educationForm.value.validate();

  if (!isVolidForm) {
    return;
  };
  
  if (educationData.value._id) {
    await changeEducation(educationData.value);
  } else {
    // await addEducation(educationData.value);
  };

  props.hideDialog();
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.form-education-box {
  display: flex;
  flex-direction: column;

  &__label {
    width: 100%;
  }
  &__input {
    margin-top: 10px;
  }
  &__footer {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }
}

@media screen and (min-width: 768px) {
  .form-education-box {
    &__footer button:first-child {
      margin-right: 20px;
    }
  }
}
</style>
