<template>
  <Box>
    <div class="certificate-content">
      <DataTable :value="dataResume.certificate" dataKey="_id">
        <template #header>
          <SubTitle :text="'Сертификаты'" :admin="true" />
        </template>

        <Column field="position" header="позиция" style="min-width: 14rem">
          <template #body="slotProps">
            <div class="certificate-content__table-item">
              <span>{{ `RU: ${slotProps.data.position.ru}` }}</span>
              <span>{{ `EN: ${slotProps.data.position.en}` }}</span>
            </div>
          </template>
        </Column>
        <Column field="company" header="компания" style="min-width: 14rem">
          <template #body="slotProps">
            <div class="certificate-content__table-item">
              <span>{{ `RU: ${slotProps.data.company.ru}` }}</span>
              <span>{{ `EN: ${slotProps.data.company.en}` }}</span>
            </div>
          </template>
        </Column>
        <Column field="start" header="начало" style="min-width: 12rem">
          <template #body="slotProps">
            <div class="certificate-content__table-item">
              <span>{{ `RU: ${slotProps.data.start.ru}` }}</span>
              <span>{{ `EN: ${slotProps.data.start.en}` }}</span>
            </div>
          </template>
        </Column>
        <Column field="finish" header="окончание" style="min-width: 12rem">
          <template #body="slotProps">
            <div class="certificate-content__table-item">
              <span>{{ `RU: ${slotProps.data.finish.ru}` }}</span>
              <span>{{ `EN: ${slotProps.data.finish.en}` }}</span>
            </div>
          </template>
        </Column>
        <Column field="path" header="файл" style="min-width: 15rem">
          <template #body="slotProps">
            <div class="certificate-content__table-item">
              {{ slotProps.data.path }}
            </div>
          </template>
        </Column>
        <Column field="webSite" header="сайт" style="min-width: 15rem">
          <template #body="slotProps">
            <div class="certificate-content__table-item">
              {{ slotProps.data.webSite }}
            </div>
          </template>
        </Column>
        <Column :exportable="false" style="min-width: 8rem">
          <template #body="slotProps">
            <div class="certificate-content__table-btns">
              <Button
                icon="pi pi-upload"
                outlined
                rounded
                class="mr-2"
                severity="help"
                @click="editExport(slotProps.data)"
              />
              <Button
                icon="pi pi-pencil"
                outlined
                rounded
                class="mr-2"
                @click="edit(slotProps.data)"
              />
              <Button
                icon="pi pi-trash"
                outlined
                rounded
                severity="danger"
                @click="confirmDeleteProduct(slotProps.data)"
              />
            </div>
          </template>
        </Column>
      </DataTable>

      <Button
        label="Добавить"
        aria-label="Добавить новый пункт"
        icon="pi pi-plus"
        class="mr-2 certificate-content__add-btn"
        @click="openNew"
      />

      <Dialog
        v-model:visible="certificateDialog"
        :style="{ width: '800px' }"
        header="Детали сертификата"
        :modal="true"
        class="p-fluid"
      >
        <FormCertificate :certificate="certificate" :hideDialog="hideDialog" />
      </Dialog>
      <Dialog
        v-model:visible="exportCertificateDialog"
        :style="{ width: '450px' }"
        header="Загрузка сертификата"
        :modal="true"
        class="p-fluid"
      >
        <FormExportCertificate :hideDialog="hideExportDialog" :id="certificate._id" />
      </Dialog>

      <Dialog
        v-model:visible="deleteDialog"
        :style="{ width: '450px' }"
        header="Удаление"
        :modal="true"
      >
        <div class="certificate-content__delete-text">
          <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
          <span v-if="certificate"
            >Вы действительно хотите сертификат от <b>{{ certificate.company.ru }}</b>
            <b>{{ certificate.position.ru }}</b
            >?</span
          >
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
            :loading="loadingCertificate"
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
import FormCertificate from '@/components/admin/certificate/FormCertificate.vue';
import FormExportCertificate from '@/components/admin/certificate/FormExportCertificate.vue';

const { removeCertificate } = useResumeStore();
const { dataResume, loadingCertificate } = storeToRefs(useResumeStore());

const certificateDialog = ref(false);
const exportCertificateDialog = ref(false);
const deleteDialog = ref(false);
const certificate = ref({});

const openNew = () => {
  certificate.value = {
    position: {
      ru: '',
      en: ''
    },
    company: {
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
  certificateDialog.value = true;
};
const hideDialog = () => {
  certificateDialog.value = false;
};
const hideExportDialog = () => {
  exportCertificateDialog.value = false;
};
const edit = (prod) => {
  certificate.value = { ...prod };
  certificateDialog.value = true;
};
const editExport = (prod) => {
  certificate.value = { ...prod };
  exportCertificateDialog.value = true;
};
const confirmDeleteProduct = (prod) => {
  certificate.value = prod;
  deleteDialog.value = true;
};
const deleteProduct = async () => {
  await removeCertificate(certificate.value._id);
  deleteDialog.value = false;
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.certificate-content {
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
