<template>
  <Box>
    <div class="projects-content">
      <DataTable 
        :value="dataPortfolio.projects"
        dataKey="_id" 
      >
        <template #header>
          <SubTitle :text="'Опыт'" :admin="true"/>
        </template>

        <Column 
          field="name" 
          header="название" 
          style="min-width:14rem"
          sortable
        >
          <template #body="slotProps">
            <div class="projects-content__table-item">
              <span>{{`RU: ${slotProps.data.name.ru}`}}</span>
              <span>{{`EN: ${slotProps.data.name.en}`}}</span>
            </div>
          </template>
        </Column>
        <Column 
          field="link" 
          header="ссылка" 
          style="min-width:14rem"
          sortable
        >
          <template #body="slotProps">
            <div class="projects-content__table-item">
              <span>{{`RU: ${slotProps.data.link.text.ru}`}}</span>
              <span>{{`EN: ${slotProps.data.link.text.en}`}}</span>
              <span>{{`URL: ${slotProps.data.link.url}`}}</span>
            </div>
          </template>
        </Column>
        <Column 
          field="linkFiles" 
          header="ссылка на исходники" 
          style="min-width:25rem"
        >
          <template #body="slotProps">
            <div class="projects-content__table-item">
              <span>{{`TEXT: ${slotProps.data.linkFiles.text}`}}</span>
              <span>{{`URL: ${slotProps.data.linkFiles.url}`}}</span>
            </div>
          </template>
        </Column>
        <Column 
          field="preText" 
          header="короткий текст" 
          style="min-width:25rem"
        >
          <template #body="slotProps">
            <div class="projects-content__table-item">
              <span>{{`RU: ${slotProps.data.preText.ru}`}}</span>
              <span>{{`EN: ${slotProps.data.preText.en}`}}</span>
            </div>
          </template>
        </Column>
        <Column 
          field="description" 
          header="полное описание" 
          style="min-width:25rem"
        >
          <template #body="slotProps">
            <div class="projects-content__table-item">
              <span>{{`RU: ${slotProps.data.description.ru}`}}</span>
              <span>{{`EN: ${slotProps.data.description.en}`}}</span>
            </div>
          </template>
        </Column>
        <Column 
          field="tehnology" 
          header="технологии" 
          style="min-width:12rem"
        >
          <template #body="slotProps">
            <div class="projects-content__table-item">
              <ul v-for="item in slotProps.data.tehnology" :key="item">
                <li>{{ item }}</li>
              </ul>
            </div>
          </template>
        </Column>
        <Column 
          field="picture" 
          header="картинка" 
          style="min-width:12rem"
        >
          <template #body="slotProps">
            <div class="projects-content__table-item">
              <img 
                :src="slotProps.data.picture ? 
                baseUrl + slotProps.data.picture : 
                require('@/assets/images/default-image.jpg')" 
                alt="image-project" 
                :style="{width: '300px'}"
                crossorigin="anonymous"
              />
            </div>
          </template>
        </Column>
        <Column 
          field="backgroundColor" 
          header="цвет фона" 
          style="min-width:15rem"
        >
          <template #body="slotProps">
            <div 
              class="projects-content__table-item" 
              :style="{
                  backgroundColor: slotProps.data.backgroundColor, 
                  width: '100px',
                  height: '100px'
                }"
            ></div>
          </template>
        </Column>
        <Column :exportable="false" style="min-width:8rem">
          <template #body="slotProps">
            <div class="projects-content__table-btns">
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
        class="mr-2 projects-content__add-btn"
        @click="openNew"
      />

      <Dialog 
        v-model:visible="projectsDialog" 
        :style="{width: '800px'}"
        header="Детали образования" 
        :modal="true"
        class="p-fluid"
      >
        <FormProjects :project="project" :hideDialog="hideDialog"/>
      </Dialog>
    
      <Dialog 
        v-model:visible="deleteDialog" 
        :style="{width: '450px'}" 
        header="Удаление" 
        :modal="true"
      >
        <div class="projects-content__delete-text">
          <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
          <span v-if="project">Вы действительно хотите удалить проект <b>{{project.name.ru}}</b>?</span>
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
            :loading="loadingProjects"
          />
        </template>
      </Dialog>
    </div>
  </Box>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { usePortfolioStore } from '@/stores/portfolio';
import { ref } from 'vue';
import SubTitle from '@/components/shared/SubTitle.vue';
import Box from '@/components/shared/Box.vue';
import FormProjects from '@/components/admin/project/FormProjects.vue';
import {baseUrl} from '@/services/urls.js';

const { removeProjects } = usePortfolioStore();
const { dataPortfolio, loadingProjects } = storeToRefs(usePortfolioStore());

const projectsDialog = ref(false);
const deleteDialog = ref(false);
const project = ref({});

const openNew = () => {
  project.value = {
    name: {
      ru: '',
      en: ''
    },
    description: {
      ru: '',
      en: ''
    },
    link: {
      text: {
        ru: '',
        en: ''
      },
      url: ''
    },
    linkFiles: {
      text: '',
      url: ''
    },
    preText: {
      ru: '',
      en: ''
    },
    tehnology: [],
    backgroundColor: '',
    picture: ''
  };
  projectsDialog.value = true;
};
const hideDialog = () => {
  projectsDialog.value = false;
};
const edit = (prod) => {
  project.value = { ...prod };
  projectsDialog.value = true;
};
const confirmDeleteProduct = (prod) => {
  project.value = prod;
  deleteDialog.value = true;
};
const deleteProduct = async () => {
  // await removeProjects(project.value._id);
  deleteDialog.value = false;
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';  
.projects-content {
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