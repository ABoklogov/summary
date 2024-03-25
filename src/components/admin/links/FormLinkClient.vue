<template>
  <CustomForm 
    @submit.prevent="submit" 
    ref="clientForm"
    class="form-link-client"
  >
    <CustomInput
      name="client"
      id="client"
      label="Ссылка клиента"
      type="text"
      v-model:value="linkClient"
      :rules="linkClient ? urlRules : []"
    >
      <template #btn>
        <Button
        type="submit"
        :disabled="linkClient ? false : true"
        aria-label="Отправить данные"
        icon="pi pi-chevron-right" 
        iconPos="right"
        class="form-client-box__btn"
        :loading="loadingLinkClient"
        />
      </template>
    </CustomInput>
  </CustomForm>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { usePortfolioStore } from '@/stores/portfolio';
import { ref, computed, onMounted } from 'vue';
import CustomForm from '@/components/shared/CustomForm.vue';
import CustomInput from '@/components/shared/CustomInput.vue';

const { changeLinkClient } = usePortfolioStore();
const { dataPortfolio, loadingLinkClient } = storeToRefs(usePortfolioStore());

import {
  charLimit,
  urlValidation,
} from '@/utils/validationRules';

const clientForm = ref(null);
const linkClient = ref('');

onMounted(() => {
  linkClient.value = dataPortfolio.value.links?.linkClient;
});

const urlRules = computed(() => {
  return [charLimit(100), urlValidation];
});

const submit = async () => {
  const isVolidForm = clientForm.value.validate();

  if (!isVolidForm) {
    return;
  };

  await changeLinkClient(linkClient.value);
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.form-link-client:deep input {
  padding-right: 60px;
}
</style>
