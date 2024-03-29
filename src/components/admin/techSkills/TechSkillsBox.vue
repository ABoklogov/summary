<template>
  <Box>
    <div class="tech-skills-content">
      <DataTable 
        :value="dataResume.tech_skills" 
        dataKey="_id"
      >
        <template #header>
          <SubTitle :text="'Технические навыки'" :admin="true"/>
        </template>

        <Column field="value" header="название" sortable style="width: 100%"></Column>
        <Column :exportable="false" style="min-width:8rem">
          <template #body="slotProps">
            <div class="tech-skills-content__table-btns">
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
        class="mr-2 tech-skills-content__add-btn"
        @click="openNew"
      />

      <Dialog 
        v-model:visible="techSkillsDialog" 
        :style="{width: '450px'}"
        header="Технический навык" 
        :modal="true"
        class="p-fluid"
      >
        <FormTechSkills :techSkills="techSkills" :hideDialog="hideDialog"/>
      </Dialog>
    
      <Dialog 
        v-model:visible="deleteDialog" 
        :style="{width: '450px'}" 
        header="Удаление" 
        :modal="true"
      >
        <div class="tech-skills-content__delete-text">
          <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
          <span v-if="techSkills">Вы действительно хотите удалить <b>{{techSkills.value}}</b>?</span>
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
            :loading="loadingTechSkills"
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
import FormTechSkills from '@/components/admin/techSkills/FormTechSkills.vue';

const { removeTechSkills } = useResumeStore();
const { dataResume, loadingTechSkills } = storeToRefs(useResumeStore());

const toast = useToast();
const techSkillsDialog = ref(false);
const deleteDialog = ref(false);
const techSkills = ref({});

const openNew = () => {
  techSkills.value = {};
  techSkillsDialog.value = true;
};
const hideDialog = () => {
  techSkillsDialog.value = false;
};
const editProduct = (prod) => {
  techSkills.value = { ...prod };
  techSkillsDialog.value = true;
};
const confirmDeleteProduct = (prod) => {
  techSkills.value = prod;
  deleteDialog.value = true;
};
const deleteProduct = async () => {
  await removeTechSkills(techSkills.value._id);
  deleteDialog.value = false;
};
</script>

<style scoped lang="scss">
.tech-skills-content {
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