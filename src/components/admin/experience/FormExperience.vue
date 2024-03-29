<template>
  <CustomForm @submit.prevent="submit" ref="experienceForm">
    <div class="form-experience-box">
      <CustomInput
        name="ru-position"
        id="ru-position"
        label="позиция"
        type="text"
        v-model:value="experienceData.position.ru"
        :rules="textRules"
      />
      <div class="form-experience-box__input">
        <CustomInput
          name="en-position"
          id="en-position"
          label="position"
          type="text"
          v-model:value="experienceData.position.en"
          :rules="textRules"
        />
      </div>
      <div class="form-experience-box__input form-experience-box__input--interval">
        <CustomInput
          name="ru-company"
          id="ru-company"
          label="компания"
          type="text"
          v-model:value="experienceData.company.ru"
          :rules="textRules"
        />
      </div>
      <div class="form-experience-box__input">
        <CustomInput
          name="en-company"
          id="en-company"
          label="company"
          type="text"
          v-model:value="experienceData.company.en"
          :rules="textRules"
        />
      </div>
      <div class="form-experience-box__input form-experience-box__input--interval">
        <CustomTextaria
          name="ru-responsibility"
          id="ru-responsibility"
          label="обязанности"
          type="text"
          v-model:value="experienceData.responsibility.ru"
          :rules="responsibilityRules"
          variant="filled"
          rows="8"
        />
      </div>
      <div class="form-experience-box__input">
        <CustomTextaria
          name="en-responsibility"
          id="en-responsibility"
          label="responsibility"
          type="text"
          v-model:value="experienceData.responsibility.en"
          :rules="responsibilityRules"
          variant="filled"
          rows="8"
        />
      </div>
      <div class="form-experience-box__input form-experience-box__input--interval">
        <CustomInput
          name="ru-start"
          id="ru-start"
          label="начало"
          type="text"
          v-model:value="experienceData.start.ru"
          :rules="textRules"
        />
      </div>
      <div class="form-experience-box__input">
        <CustomInput
          name="en-start"
          id="en-start"
          label="start"
          type="text"
          v-model:value="experienceData.start.en"
          :rules="textRules"
        />
      </div>
      <div class="form-experience-box__input form-experience-box__input--interval">
        <CustomInput
          name="ru-finish"
          id="ru-finish"
          label="окончание"
          type="text"
          v-model:value="experienceData.finish.ru"
          :rules="textRules"
        />
      </div>
      <div class="form-experience-box__input">
        <CustomInput
          name="en-finish"
          id="en-finish"
          label="finish"
          type="text"
          v-model:value="experienceData.finish.en"
          :rules="textRules"
        />
      </div>
      <div class="form-experience-box__input form-experience-box__input--interval">
        <CustomInput
          name="webSite"
          id="webSite"
          label="сайт"
          type="text"
          v-model:value="experienceData.webSite"
          :rules="experienceData.webSite ? urlRules : []"
        />
      </div>
    </div>

    <div class="form-experience-box__footer">
      <Button label="Отмена" icon="pi pi-times" iconPos="right" text @click="props.hideDialog" />
      <Button
        type="submit"
        label="Отправить"
        aria-label="Отправить данные"
        icon="pi pi-check"
        iconPos="right"
        :loading="loadingExperience"
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
import CustomTextaria from '@/components/shared/CustomTextaria.vue';

const { changeExperience, addExperience } = useResumeStore();
const { loadingExperience } = storeToRefs(useResumeStore());

import { isRequired, charLimit, loginValidation, urlValidation } from '@/utils/validationRules';

const experienceForm = ref(null);
const experienceData = ref({
  position: {
    ru: '',
    en: ''
  },
  company: {
    ru: '',
    en: ''
  },
  responsibility: {
    ru: '',
    en: ''
  },
  start: {
    ru: '',
    en: ''
  },
  finish: {
    ru: '',
    en: ''
  },
  webSite: ''
});

const props = defineProps({
  experience: {
    type: Object,
    required: true
  },
  hideDialog: {
    type: Function
  }
});

onMounted(() => {
  experienceData.value = props.experience;
});

const textRules = computed(() => {
  return [isRequired, charLimit(50), loginValidation];
});
const responsibilityRules = computed(() => {
  return [isRequired, charLimit(300), loginValidation];
});
const urlRules = computed(() => {
  return [isRequired, charLimit(50), urlValidation];
});

const submit = async () => {
  const isVolidForm = experienceForm.value.validate();

  if (!isVolidForm) {
    return;
  }

  if (experienceData.value._id) {
    await changeExperience(experienceData.value);
  } else {
    await addExperience(experienceData.value);
  }

  props.hideDialog();
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.form-experience-box {
  display: flex;
  flex-direction: column;

  &__label {
    width: 100%;
  }
  &__input {
    margin-top: 10px;
  }
  &__input--interval {
    margin-top: 20px;
  }
  &__footer {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }
}

@media screen and (min-width: 768px) {
  .form-experience-box {
    &__footer button:first-child {
      margin-right: 20px;
    }
  }
}
</style>
