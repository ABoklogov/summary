<template>
  <CustomForm @submit.prevent="submit" ref="certificateForm">
    <div class="form-certificate-box">
      <CustomInput
        name="ru-position"
        id="ru-position"
        label="позиция"
        type="text"
        v-model:value="certificateData.position.ru"
        :rules="textRules"
      />
      <div class="form-certificate-box__input">
        <CustomInput
          name="en-position"
          id="en-position"
          label="position"
          type="text"
          v-model:value="certificateData.position.en"
          :rules="textRules"
        />
      </div>
      <div class="form-certificate-box__input form-certificate-box__input--interval">
        <CustomInput
          name="ru-company"
          id="ru-company"
          label="компания"
          type="text"
          v-model:value="certificateData.company.ru"
          :rules="textRules"
        />
      </div>
      <div class="form-certificate-box__input">
        <CustomInput
          name="en-company"
          id="en-company"
          label="company"
          type="text"
          v-model:value="certificateData.company.en"
          :rules="textRules"
        />
      </div>
      <div class="form-certificate-box__input form-certificate-box__input--interval">
        <CustomInput
          name="ru-start"
          id="ru-start"
          label="начало"
          type="text"
          v-model:value="certificateData.start.ru"
          :rules="textRules"
        />
      </div>
      <div class="form-certificate-box__input">
        <CustomInput
          name="en-start"
          id="en-start"
          label="start"
          type="text"
          v-model:value="certificateData.start.en"
          :rules="textRules"
        />
      </div>
      <div class="form-certificate-box__input form-certificate-box__input--interval">
        <CustomInput
          name="ru-finish"
          id="ru-finish"
          label="окончание"
          type="text"
          v-model:value="certificateData.finish.ru"
          :rules="textRules"
        />
      </div>
      <div class="form-certificate-box__input">
        <CustomInput
          name="en-finish"
          id="en-finish"
          label="finish"
          type="text"
          v-model:value="certificateData.finish.en"
          :rules="textRules"
        />
      </div>
      <div class="form-certificate-box__input form-certificate-box__input--interval">
        <CustomInput
          name="webSite"
          id="webSite"
          label="сайт"
          type="text"
          v-model:value="certificateData.webSite"
          :rules="certificateData.webSite ? urlRules : []"
        />
      </div>
    </div>

    <div class="form-certificate-box__footer">
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
        :loading="loadingCertificate"
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

const { changeCertificate, addCertificate } = useResumeStore();
const { loadingCertificate } = storeToRefs(useResumeStore());

import {
  isRequired,
  charLimit,
  loginValidation,
  urlValidation
} from '@/utils/validationRules';

const certificateForm = ref(null);
const certificateData = ref({
   position: {
      ru: '',
      en: ''
    },
    company: {
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
    webSite: '',
});

const props = defineProps({
  certificate: {
    type: Object,
    required: true
  },
  hideDialog: {
    type: Function
  }
});

onMounted(() => {
  certificateData.value = props.certificate;
});

const textRules = computed(() => {
  return [isRequired, charLimit(50), loginValidation];
});
const urlRules = computed(() => {
  return [charLimit(50), urlValidation];
});

const submit = async () => {
  const isVolidForm = certificateForm.value.validate();

  if (!isVolidForm) {
    return;
  };
  
  if (certificateData.value._id) {
    await changeCertificate(certificateData.value);
  } else {
    await addCertificate(certificateData.value);
  };

  props.hideDialog();
};
</script>

<style scoped lang="scss">
.form-certificate-box {
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
  .form-certificate-box {
    &__footer button:first-child {
      margin-right: 20px;
    }
  }
}
</style>
