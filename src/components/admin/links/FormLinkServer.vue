<template>
  <CustomForm @submit.prevent="submit" ref="serverForm" class="form-link-server">
    <CustomInput
      name="server"
      id="server"
      label="Ссылка сервера"
      type="text"
      v-model:value="linkServer"
      :rules="linkServer ? urlRules : []"
    >
      <template #btn>
        <Button
          type="submit"
          :disabled="linkServer ? false : true"
          aria-label="Отправить данные"
          icon="pi pi-chevron-right"
          iconPos="right"
          class="form-server-box__btn"
          :loading="loadingLinkServer"
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

const { changeLinkServer } = usePortfolioStore();
const { dataPortfolio, loadingLinkServer } = storeToRefs(usePortfolioStore());

import { charLimit, urlValidation } from '@/utils/validationRules';

const serverForm = ref(null);
const linkServer = ref('');

onMounted(() => {
  linkServer.value = dataPortfolio.value.links?.linkServer;
});

const urlRules = computed(() => {
  return [charLimit(100), urlValidation];
});

const submit = async () => {
  const isVolidForm = serverForm.value.validate();

  if (!isVolidForm) {
    return;
  }

  await changeLinkServer(linkServer.value);
};
</script>

<style scoped lang="scss">
.form-link-server:deep(input) {
  padding-right: 60px;
}
</style>
