<template>
  <CustomForm @submit.prevent="submit" ref="socialForm">
    <div class="form-social-box">
      <CustomInput
        name="short-link"
        id="short-link"
        label="Короткая ссылка"
        type="text"
        v-model:value="socialData.shortLink"
        :rules="textRules"
      />
      <div class="form-social-box__input">
        <CustomInput
          name="link"
          id="link"
          label="ссылка"
          type="text"
          v-model:value="socialData.link"
          :rules="linkRules"
        />
      </div>
      <div class="form-social-box__input">
        <CustomInput
          name="text"
          id="text"
          label="текст"
          type="text"
          v-model:value="socialData.text"
          :rules="textRules"
        />
      </div>
    </div>

    <div class="form-social-box__footer">
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
        :loading="loadingSocial"
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

const { changeSocial, addSocial } = useResumeStore();
const { loadingSocial } = storeToRefs(useResumeStore());

import {
  isRequired,
  charLimit,
  loginValidation,
  urlValidation,
} from '@/utils/validationRules';

const socialForm = ref(null);

const socialData = ref({
  shortLink: '',
  link: '',
  text: '',
});

const props = defineProps({
  social: {
    type: Object,
    required: true
  },
  hideDialog: {
    type: Function
  }
});

onMounted(() => {
  socialData.value = props.social;
});

const textRules = computed(() => {
  return [isRequired, charLimit(50), loginValidation];
});
const linkRules = computed(() => {
  return [isRequired, charLimit(50), urlValidation];
});

const submit = async () => {
  const isVolidForm = socialForm.value.validate();

  if (!isVolidForm) {
    return;
  };
  
  if (socialData.value._id) {
    await changeSocial(socialData.value);
  } else {
    await addSocial(socialData.value);
  };

  props.hideDialog();
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.form-social-box {
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
  .form-social-box {
    &__footer button:first-child {
      margin-right: 20px;
    }
  }
}
</style>
