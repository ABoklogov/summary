<template>
  <Box>
    <div class="social-content">
      <div class="card">
        <DataTable 
          :value="socials" 
          v-model:selection="selectedSocials" 
          dataKey="id" 
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} socials"
        >
        <!-- {{console.log(selectedSocials)}} -->
          <!-- :filters="filters" -->
          <!-- ref="socialTable"  -->
          <!-- :rowsPerPageOptions="[5,10,25]"  -->
          <!-- :rows="10" -->
          <!-- :paginator="true"  -->
          <template #header>
            <SubTitle :text="'Социальный сети'" :admin="true"/>
            <!-- <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
              <h4 class="m-0">Manage socials</h4>
              <IconField iconPosition="left">
                <InputIcon>
                  <i class="pi pi-search" />
                </InputIcon>
                <InputText v-model="filters['global'].value" placeholder="Search..." />
              </IconField>
            </div> -->
          </template>
    
          <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
          <!-- <Column header="Icon">
            <template #body="slotProps">
              <img :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`"
                :alt="slotProps.data.image" class="border-round" style="width: 64px" />
            </template>
          </Column> -->
          <Column field="shortLink" header="shortLink" sortable style="min-width:10rem"></Column>
          <Column field="link" header="link" style="min-width:15rem"></Column>
          <Column field="text" header="text" style="min-width:12rem"></Column>
          <!-- <Column field="price" header="Price" sortable style="min-width:8rem">
            <template #body="slotProps">
              {{formatCurrency(slotProps.data.price)}}
            </template>
          </Column> -->
          <!-- <Column field="category" header="Category" sortable style="min-width:10rem"></Column> -->
          <!-- <Column field="rating" header="Reviews" sortable style="min-width:12rem">
            <template #body="slotProps">
              <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
            </template>
          </Column> -->
          <!-- <Column field="inventoryStatus" header="Status" sortable style="min-width:12rem">
            <template #body="slotProps">
              <Tag :value="slotProps.data.inventoryStatus" :severity="getStatusLabel(slotProps.data.inventoryStatus)" />
            </template>
          </Column> -->

          <Column :exportable="false" style="min-width:8rem">
            <template #body="slotProps">
              <Button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editProduct(slotProps.data)" />
              <Button icon="pi pi-trash" outlined rounded severity="danger" @click="confirmDeleteProduct(slotProps.data)" />
            </template>
          </Column>
        </DataTable>
      </div>

      <div>
        <Button
          label="Добавить"
          aria-label="Добавить новый пункт"
          icon="pi pi-plus" 
          :loading="loadingName"
          class="mr-2"
          @click="openNew"
        />
        <Button
          label="Удалить"
          aria-label="Удалить выбранное"
          icon="pi pi-trash" 
          :loading="loadingName"
          class="mr-2"
          severity="danger"
          @click="confirmDeleteSelected"
          :disabled="!selectedSocials || !selectedSocials.length"
        />
      </div>
      <!-- <Toolbar class="mb-4">
        <template #start>
          <Button label="New" icon="pi pi-plus" severity="success" class="mr-2" @click="openNew" />
          <Button label="Delete" icon="pi pi-trash" severity="danger" @click="confirmDeleteSelected"
            :disabled="!selectedSocials || !selectedSocials.length" />
        </template>

        <template #end>
          <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import"
            class="mr-2 inline-block" />
          <Button label="Export" icon="pi pi-upload" severity="help" @click="exportCSV($event)" />
        </template>
      </Toolbar> -->

      <Dialog 
        v-model:visible="socialDialog" 
        :style="{width: '450px'}"
        header="social Details" 
        :modal="true"
        class="p-fluid"
      >
        <FormSocial :social="social" :hideDialog="hideDialog"/>
        <!-- <img v-if="social.image" :src="`https://primefaces.org/cdn/primevue/images/product/${social.image}`"
          :alt="social.image" class="block m-auto pb-3" /> -->
        <!-- <div class="field"> -->
          <!-- <label for="shortLink">Короткая ссылка</label>
          <InputText 
            id="shortLink" 
            v-model.trim="social.shortLink" 
            required="true" 
            autofocus
            :class="{'p-invalid': submitted && !social.shortLink}" 
          /> -->
          <!-- <small 
            class="p-error" 
            v-if="submitted && !social.shortLink">
            shortLink is required.
          </small> -->
        <!-- </div> -->
        <!-- <div class="field">
          <label for="description">Description</label>
          <Textarea id="description" v-model="social.description" required="true" rows="3" cols="20" />
        </div> -->
    
        <!-- <div class="field">
          <label for="inventoryStatus" class="mb-3">Inventory Status</label>
          <Dropdown id="inventoryStatus" v-model="social.inventoryStatus" :options="statuses" optionLabel="label"
            placeholder="Select a Status">
            <template #value="slotProps">
              <div v-if="slotProps.value && slotProps.value.value">
                <Tag :value="slotProps.value.value" :severity="getStatusLabel(slotProps.value.label)" />
              </div>
              <div v-else-if="slotProps.value && !slotProps.value.value">
                <Tag :value="slotProps.value" :severity="getStatusLabel(slotProps.value)" />
              </div>
              <span v-else>
                {{slotProps.placeholder}}
              </span>
            </template>
          </Dropdown>
        </div> -->
    
        <!-- <div class="field">
          <label class="mb-3">Category</label>
          <div class="formgrid grid">
            <div class="field-radiobutton col-6">
              <RadioButton id="category1" name="category" value="Accessories" v-model="social.category" />
              <label for="category1">Accessories</label>
            </div>
            <div class="field-radiobutton col-6">
              <RadioButton id="category2" name="category" value="Clothing" v-model="social.category" />
              <label for="category2">Clothing</label>
            </div>
            <div class="field-radiobutton col-6">
              <RadioButton id="category3" name="category" value="Electronics" v-model="social.category" />
              <label for="category3">Electronics</label>
            </div>
            <div class="field-radiobutton col-6">
              <RadioButton id="category4" name="category" value="Fitness" v-model="social.category" />
              <label for="category4">Fitness</label>
            </div>
          </div>
        </div> -->
    
        <!-- <div class="formgrid grid">
          <div class="field col">
            <label for="price">Price</label>
            <InputNumber id="price" v-model="social.price" mode="currency" currency="USD" locale="en-US" />
          </div>
          <div class="field col">
            <label for="quantity">Quantity</label>
            <InputNumber id="quantity" v-model="social.quantity" integeronly />
          </div>
        </div> -->
        <!-- <template #footer>
          <Button label="Cancel" icon="pi pi-times" text @click="hideDialog" />
          <Button label="Save" icon="pi pi-check" text @click="saveProduct" />
        </template> -->
      </Dialog>
    
      <Dialog 
        v-model:visible="deleteProductDialog" 
        :style="{width: '450px'}" 
        header="Confirm" 
        :modal="true"
      >
        <div class="confirmation-content">
          <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
          <span v-if="social">Вы действительно хотите удалить<b>{{social.name}}</b>?</span>
        </div>
        <template #footer>
          <Button label="Нет" icon="pi pi-times" text @click="deleteProductDialog = false" />
          <Button label="Да" icon="pi pi-check" text @click="deleteProduct" />
        </template>
      </Dialog>
    
      <Dialog 
        v-model:visible="deleteProductsDialog" 
        :style="{width: '450px'}" 
        header="Confirm" 
        :modal="true"
      >
        <div class="confirmation-content">
          <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
          <span v-if="social">Удалить все выбранное?</span>
        </div>
        <template #footer>
          <Button label="Нет" icon="pi pi-times" text @click="deleteProductsDialog = false" />
          <Button label="Да" icon="pi pi-check" text @click="deleteSelectedProducts" />
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
// import { ProductService } from '@/service/ProductService';

const store = useResumeStore();
const { dataResume, loadingSocial } = storeToRefs(useResumeStore());

onMounted(() => {
  socials.value = dataResume.value.social;
  // ProductService.getProducts().then((data) => (socials.value = data));
});

const toast = useToast();
// const socialTable = ref();
const socials = ref();
const socialDialog = ref(false);
const deleteProductDialog = ref(false);
const deleteProductsDialog = ref(false);
const social = ref({});
const selectedSocials = ref();
// const filters = ref({
//   'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
// });
// const submitted = ref(false);
// const statuses = ref([
//   { label: 'INSTOCK', value: 'instock' },
//   { label: 'LOWSTOCK', value: 'lowstock' },
//   { label: 'OUTOFSTOCK', value: 'outofstock' }
// ]);

// const formatCurrency = (value) => {
//   if (value)
//     return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
//   return;
// };
const openNew = () => {
  social.value = {};
  // submitted.value = false;
  socialDialog.value = true;
};
const hideDialog = () => {
  socialDialog.value = false;
  // submitted.value = false;
};
// const saveProduct = () => {
//   // submitted.value = true;

//   if (social.value.name.trim()) {
//     if (social.value._id) {
//       social.value.inventoryStatus = social.value.inventoryStatus.value ? social.value.inventoryStatus.value : social.value.inventoryStatus;
//       socials.value[findIndexById(social.value._id)] = social.value;
//       toast.add({ severity: 'success', summary: 'Successful', detail: 'social Updated', life: 3000 });
//     }
//     else {
//       social.value._id = createId();
//       social.value.code = createId();
//       social.value.image = 'product-placeholder.svg';
//       social.value.inventoryStatus = social.value.inventoryStatus ? social.value.inventoryStatus.value : 'INSTOCK';
//       socials.value.push(social.value);
//       toast.add({ severity: 'success', summary: 'Successful', detail: 'social Created', life: 3000 });
//     }

//     socialDialog.value = false;
//     social.value = {};
//   }
// };
const editProduct = (prod) => {
  social.value = { ...prod };
  socialDialog.value = true;
};
const confirmDeleteProduct = (prod) => {
  social.value = prod;
  deleteProductDialog.value = true;
};
const deleteProduct = () => {
  socials.value = socials.value.filter(val => val._id !== social.value._id);
  deleteProductDialog.value = false;
  social.value = {};
  toast.add({ severity: 'success', summary: 'Successful', detail: 'social Deleted', life: 3000 });
};
// const findIndexById = (id) => {
//   let index = -1;
//   for (let i = 0; i < socials.value.length; i++) {
//     if (socials.value[i]._id === id) {
//       index = i;
//       break;
//     }
//   }

//   return index;
// };
// const createId = () => {
//   let id = '';
//   var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   for (var i = 0; i < 5; i++) {
//     id += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   return id;
// }
// const exportCSV = () => {
//   socialTable.value.exportCSV();
// };
const confirmDeleteSelected = () => {
  deleteProductsDialog.value = true;
};
const deleteSelectedProducts = () => {
  socials.value = socials.value.filter(val => !selectedSocials.value.includes(val));
  deleteProductsDialog.value = false;
  selectedSocials.value = null;
  toast.add({ severity: 'success', summary: 'Successful', detail: 'socials Deleted', life: 3000 });
};

// const getStatusLabel = (status) => {
//   switch (status) {
//     case 'INSTOCK':
//       return 'success';

//     case 'LOWSTOCK':
//       return 'warning';

//     case 'OUTOFSTOCK':
//       return 'danger';

//     default:
//       return null;
//   }
// };
</script>
