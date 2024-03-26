<template>
  <Box>
    <div class="experience-content">
      <DataTable 
        :value="dataResume.experience"
        dataKey="_id"
      >
        <template #header>
          <SubTitle :text="'Опыт'" :admin="true"/>
        </template>

        <Column 
          field="position" 
          header="позиция" 
          style="min-width:14rem"
          sortable
        >
          <template #body="slotProps">
            <div class="experience-content__table-item">
              <span>{{`RU: ${slotProps.data.position.ru}`}}</span>
              <span>{{`EN: ${slotProps.data.position.en}`}}</span>
            </div>
          </template>
        </Column>
        <Column 
          field="company" 
          header="компания" 
          style="min-width:14rem"
          sortable
        >
          <template #body="slotProps">
            <div class="experience-content__table-item">
              <span>{{`RU: ${slotProps.data.company.ru}`}}</span>
              <span>{{`EN: ${slotProps.data.company.en}`}}</span>
            </div>
          </template>
        </Column>
        <Column 
          field="responsibility" 
          header="обязанности" 
          style="min-width:25rem"
        >
          <template #body="slotProps">
            <div class="experience-content__table-item">
              <span>{{`RU: ${slotProps.data.responsibility.ru}`}}</span>
              <span>{{`EN: ${slotProps.data.responsibility.en}`}}</span>
            </div>
          </template>
        </Column>
        <Column 
          field="start" 
          header="начало" 
          style="min-width:12rem"
        >
          <template #body="slotProps">
            <div class="experience-content__table-item">
              <span>{{`RU: ${slotProps.data.start.ru}`}}</span>
              <span>{{`EN: ${slotProps.data.start.en}`}}</span>
            </div>
          </template>
        </Column>
        <Column 
          field="finish" 
          header="окончание" 
          style="min-width:12rem"
        >
          <template #body="slotProps">
            <div class="experience-content__table-item">
              <span>{{`RU: ${slotProps.data.finish.ru}`}}</span>
              <span>{{`EN: ${slotProps.data.finish.en}`}}</span>
            </div>
          </template>
        </Column>
        <Column 
          field="webSite" 
          header="сайт" 
          style="min-width:15rem"
        >
          <template #body="slotProps">
            <span class="experience-content__table-item">
              {{slotProps.data.webSite}}
            </span>
          </template>
        </Column>
        <Column :exportable="false" style="min-width:8rem">
          <template #body="slotProps">
            <div class="experience-content__table-btns">
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
        class="mr-2 experience-content__add-btn"
        @click="openNew"
      />

      <Dialog 
        v-model:visible="experienceDialog" 
        :style="{width: '800px'}"
        header="Детали образования" 
        :modal="true"
        class="p-fluid"
      >
        <FormExperience :experience="experience" :hideDialog="hideDialog"/>
      </Dialog>
    
      <Dialog 
        v-model:visible="deleteDialog" 
        :style="{width: '450px'}" 
        header="Удаление" 
        :modal="true"
      >
        <div class="experience-content__delete-text">
          <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
          <span v-if="experience">Вы действительно хотите удалить позицию <b>{{experience.position.ru}}</b> в <b>{{experience.company.ru}}</b>?</span>
        </div>
        <template #footer>
          <Button 
            label="Нет" 
            icon="pi pi-times" 
            text 
            @click="deleteDialog = false" 
            iconPos="right" 
          />
          <Button 
            label="Да" 
            icon="pi pi-check" 
            @click="deleteProduct" 
            iconPos="right" 
            :loading="loadingExperience"
          />
        </template>
      </Dialog>
    </div>
  </Box>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useResumeStore } from '@/stores/resume';
import { ref } from 'vue';
import SubTitle from '@/components/shared/SubTitle.vue';
import Box from '@/components/shared/Box.vue';
import FormExperience from '@/components/admin/experience/FormExperience.vue';

const { removeExperience } = useResumeStore();
const { dataResume, loadingExperience } = storeToRefs(useResumeStore());

const experienceDialog = ref(false);
const deleteDialog = ref(false);
const experience = ref({});

const openNew = () => {
  experience.value = {
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
  };
  experienceDialog.value = true;
};
const hideDialog = () => {
  experienceDialog.value = false;
};
const edit = (prod) => {
  experience.value = { ...prod };
  experienceDialog.value = true;
};
const confirmDeleteProduct = (prod) => {
  experience.value = prod;
  deleteDialog.value = true;
};
const deleteProduct = async () => {
  await removeExperience(experience.value._id);
  deleteDialog.value = false;
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';  
.experience-content {
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
    font-size: $fontMini;
  }
}
</style>