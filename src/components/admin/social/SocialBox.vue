<template>
  <Box>
    <div class="social-content">
      <DataTable 
        :value="dataResume.social" 
        dataKey="id" 
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} socials"
      >
        <template #header>
          <SubTitle :text="'Социальный сети'" :admin="true"/>
        </template>

        <Column field="shortLink" header="короткая ссылка" sortable style="min-width:10rem"></Column>
        <Column field="link" header="ссылка" style="min-width:15rem"></Column>
        <Column field="text" header="текст" style="min-width:12rem"></Column>
        <Column :exportable="false" style="min-width:8rem">
          <template #body="slotProps">
            <div class="social-content__table-btns">
              <Button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editProduct(slotProps.data)" />
              <Button icon="pi pi-trash" outlined rounded severity="danger" @click="confirmDeleteProduct(slotProps.data)" />
            </div>
          </template>
        </Column>
      </DataTable>

      <Button
        label="Добавить"
        aria-label="Добавить новый пункт"
        icon="pi pi-plus" 
        class="mr-2 social-content__add-btn"
        @click="openNew"
      />

      <Dialog 
        v-model:visible="socialDialog" 
        :style="{width: '450px'}"
        header="Детали социальной сети" 
        :modal="true"
        class="p-fluid"
      >
        <FormSocial :social="social" :hideDialog="hideDialog"/>
      </Dialog>
    
      <Dialog 
        v-model:visible="deleteProductDialog" 
        :style="{width: '450px'}" 
        header="Confirm" 
        :modal="true"
      >
        <div class="social-content__delete-text">
          <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
          <span v-if="social">Вы действительно хотите удалить <b>{{social.shortLink}}</b>?</span>
        </div>
        <template #footer>
          <Button 
            label="Нет" 
            icon="pi pi-times" 
            text 
            @click="deleteProductDialog = false" 
            iconPos="right" 
          />
          <Button 
            label="Да" 
            icon="pi pi-check" 
            @click="deleteProduct" 
            iconPos="right" 
            :loading="loadingSocial"
          />
        </template>
      </Dialog>
    </div>
  </Box>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useResumeStore } from '@/stores/resume';
import { ref, onMounted } from 'vue';
import { FilterMatchMode } from 'primevue/api';
import { useToast } from 'primevue/usetoast';
import SubTitle from '@/components/shared/SubTitle.vue';
import Box from '@/components/shared/Box.vue';
import FormSocial from '@/components/admin/social/FormSocial.vue';

const { removeSocial } = useResumeStore();
const { dataResume, loadingSocial } = storeToRefs(useResumeStore());

const toast = useToast();
const socialDialog = ref(false);
const deleteProductDialog = ref(false);
const social = ref({});

const openNew = () => {
  social.value = {};
  socialDialog.value = true;
};
const hideDialog = () => {
  socialDialog.value = false;
};
const editProduct = (prod) => {
  social.value = { ...prod };
  socialDialog.value = true;
};
const confirmDeleteProduct = (prod) => {
  social.value = prod;
  deleteProductDialog.value = true;
};
const deleteProduct = async () => {
  await removeSocial(social.value._id);
  deleteProductDialog.value = false;
};
</script>

<style scoped lang="scss">
.social-content {
  &__add-btn {
    margin-top: 20px;
  }
  &__delete-text {
    display: flex;
    align-items: center;
  }
  &__table-btns {
    display: flex;
    flex-direction: row;
  }
}
</style>