<template>
  <CustomForm 
    @submit.prevent="submit" 
    ref="textFooterForm"
    class="form-text-footer"
  >
    <div class="form-text-footer__box">
      <CustomTextaria
        name="ru-footer-text"
        id="ru-footer-text"
        label="текст в подвале"
        type="text"
        v-model:value="footerText.ru"
        :rules="footerText ? textRules : []"
        variant="filled"
        rows="8"
      />
      <div class="form-text-footer__input">
        <CustomTextaria
          name="en-footer-text"
          id="en-footer-text"
          label="text in footer"
          type="text"
          v-model:value="footerText.en"
          :rules="footerText ? textRules : []"
          variant="filled"
          rows="8"
        />
      </div>
    </div>

    <div class="form-text-footer__btn">
      <Button
        type="submit"
        :disabled="footerText ? false : true"
        label="Отправить"
        aria-label="Отправить данные"
        icon="pi pi-chevron-right" 
        iconPos="right"
        class="form-client-box__btn"
        :loading="loadingFooterText"
      />
    </div>
  </CustomForm>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { usePortfolioStore } from '@/stores/portfolio';
import { ref, computed, onMounted } from 'vue';
import CustomForm from '@/components/shared/CustomForm.vue';
import CustomTextaria from '@/components/shared/CustomTextaria.vue';

const { changeFooterText } = usePortfolioStore();
const { dataPortfolio, loadingFooterText } = storeToRefs(usePortfolioStore());

import { isRequired, charLimit } from '@/utils/validationRules';

const textFooterForm = ref(null);
const footerText = ref({
  ru: '',
  en: ''
});

onMounted(() => {
  footerText.value = dataPortfolio.value.texts?.footerText;
});

const textRules = computed(() => {
  return [isRequired, charLimit(500)];
});

const submit = async () => {
  const isVolidForm = textFooterForm.value.validate();

  if (!isVolidForm) {
    return;
  };

  await changeFooterText(footerText.value);
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.form-text-footer {
  &__box {
    display: flex; 
    flex-direction: column; 
  }
  &__input {
    width: 100%;
    margin-top: 10px;
  }
  &__btn {
    margin-top: 20px;
  }
}

@media screen and (min-width: 1024px) {
  .form-text-footer {
    &__box {
      flex-direction: row; 
    }
    &__input {
      margin-top: 0;
      margin-left: 30px;
    }
  }
} 
</style>
