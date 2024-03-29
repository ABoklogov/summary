<template>
  <CustomForm @submit.prevent="submit" ref="textAboutForm" class="form-text-about">
    <div class="form-text-about__box">
      <CustomTextaria
        name="ru-about-text"
        id="ru-about-text"
        label="текст в шапке"
        type="text"
        v-model:value="aboutText.ru"
        :rules="aboutText ? textRules : []"
        variant="filled"
        rows="8"
      />
      <div class="form-text-about__input">
        <CustomTextaria
          name="en-about-text"
          id="en-about-text"
          label="text in header"
          type="text"
          v-model:value="aboutText.en"
          :rules="aboutText ? textRules : []"
          variant="filled"
          rows="8"
        />
      </div>
    </div>

    <div class="form-text-about__btn">
      <Button
        type="submit"
        :disabled="aboutText ? false : true"
        label="Отправить"
        aria-label="Отправить данные"
        icon="pi pi-chevron-right"
        iconPos="right"
        class="form-client-box__btn"
        :loading="loadingAboutText"
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

const { changeAboutText } = usePortfolioStore();
const { dataPortfolio, loadingAboutText } = storeToRefs(usePortfolioStore());

import { isRequired, charLimit } from '@/utils/validationRules';

const textAboutForm = ref(null);
const aboutText = ref({
  ru: '',
  en: ''
});

onMounted(() => {
  aboutText.value = dataPortfolio.value.texts?.aboutText;
});

const textRules = computed(() => {
  return [isRequired, charLimit(500)];
});

const submit = async () => {
  const isVolidForm = textAboutForm.value.validate();

  if (!isVolidForm) {
    return;
  }

  await changeAboutText(aboutText.value);
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.form-text-about {
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
  .form-text-about {
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
