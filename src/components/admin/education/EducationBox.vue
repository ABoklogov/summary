<template>
  <Box>
    <div class="education-content">
      <DataTable 
        :value="dataResume.education"
        dataKey="id" 
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} educations"
      >
        <template #header>
          <SubTitle :text="'Образование'" :admin="true"/>
        </template>

        <Column 
          field="institution" 
          header="Институт" 
          style="min-width:15rem; width: 50%;"
        >
          <template #body="slotProps">
            <div class="education-content__table-item">
              <span>{{`RU: ${slotProps.data.institution.ru}`}}</span>
              <span>{{`EN: ${slotProps.data.institution.en}`}}</span>
            </div>
          </template>
        </Column>
        <Column 
          field="speciality" 
          header="Специальность" 
          style="min-width:15rem; width: 50%;"
        >
          <template #body="slotProps">
            <div class="education-content__table-item">
              <span>{{`RU: ${slotProps.data.speciality.ru}`}}</span>
              <span>{{`EN: ${slotProps.data.speciality.en}`}}</span>
            </div>
          </template>
        </Column>
        <Column :exportable="false" style="min-width:8rem">
          <template #body="slotProps">
            <div class="education-content__table-btns">
              <Button icon="pi pi-pencil" outlined rounded class="mr-2" @click="edit(slotProps.data)" />
              <Button icon="pi pi-trash" outlined rounded severity="danger" @click="confirmDeleteProduct(slotProps.data)" />
            </div>
          </template>
        </Column>
      </DataTable>

      <Button
        label="Добавить"
        aria-label="Добавить новый пункт"
        icon="pi pi-plus" 
        class="mr-2 education-content__add-btn"
        @click="openNew"
      />

      <Dialog 
        v-model:visible="educationDialog" 
        :style="{width: '450px'}"
        header="Детали образования" 
        :modal="true"
        class="p-fluid"
      >
        <FormEducation :education="education" :hideDialog="hideDialog"/>
      </Dialog>
    
      <Dialog 
        v-model:visible="deleteProductDialog" 
        :style="{width: '450px'}" 
        header="Удаление" 
        :modal="true"
      >
        <div class="education-content__delete-text">
          <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
          <span v-if="education">Вы действительно хотите удалить <b>{{education.institution.ru}}</b>?</span>
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
            :loading="loadingEducation"
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
import FormEducation from '@/components/admin/education/FormEducation.vue';

const { removeEducation } = useResumeStore();
const { dataResume, loadingEducation } = storeToRefs(useResumeStore());

const toast = useToast();
const educationDialog = ref(false);
const deleteProductDialog = ref(false);
const education = ref({});

const openNew = () => {
  education.value = {
    institution: {
      ru: '',
      en: ''
    },
    speciality: {
      ru: '',
      en: ''
    },
  };
  educationDialog.value = true;
};
const hideDialog = () => {
  educationDialog.value = false;
};
const edit = (prod) => {
  education.value = { ...prod };
  educationDialog.value = true;
};
const confirmDeleteProduct = (prod) => {
  education.value = prod;
  deleteProductDialog.value = true;
};
const deleteProduct = async () => {
  await removeEducation(education.value._id);
  deleteProductDialog.value = false;
};
</script>

<style scoped lang="scss">
.education-content {
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
  &__table-item {
    display: flex;
    flex-direction: column;
  }
}
</style>