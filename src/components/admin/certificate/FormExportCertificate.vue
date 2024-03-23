<template>
  <form class="form-certificate">
    <label class="form-certificate__label">
      <input 
        type="file" 
        id="certificate" 
        ref="certificateInput" 
        @change="handleFileUpload"
      />
      <span class="p-button p-component form-certificate__btn">
        {{ textBtn }}
      </span>
    </label>

    <Message>
      Максимальный размер файла 1024 kB.<br>
      Возможные форматы файла: 'jpg', 'png', 'jpeg', 'raw', 'tiff', 'psd', 'bmp', 'jp2', 'pdf'.
    </Message>
    
    <Button 
      type="button" 
      @click.prevent="submitFile" 
      :disabled="!file"
      icon="pi pi-chevron-right" 
      iconPos="right"
      label="Отправить"
      :loading="loadingCertificate"
    />
  </form>
</template>

<script setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useResumeStore } from '@/stores/resume';
import Message from '@/components/admin/Message.vue';

const { exportCertificate } = useResumeStore();
const { loadingCertificate } = storeToRefs(useResumeStore());

const file = ref(null);
const certificateInput = ref(null);

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  hideDialog: {
    type: Function
  }
});

const textBtn = computed(() => {
  if (file.value) {
    const name = file.value.name;

    return name.length >= 40 ? `${name.slice(0, 40)}...` : name;
  } else {
    return 'Выберите файл'
  }
});

const handleFileUpload = () => {
  file.value = certificateInput.value.files[0];
};

const submitFile = async () => {
  if (!file.value) return;

  const result = await exportCertificate(file.value, props.id);
console.log('result', result);
  if (result) {
    file.value = null;
  };
  props.hideDialog();
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.form-certificate {
  display: flex;
  flex-direction: column;

  &__label {
    display: flex;
    flex-direction: column;
  }
  & input[type=file] {
    position: absolute;
    z-index: -1;
    opacity: 0;
    display: block;
    width: 0;
    height: 0;
  }
}
// .p-button {
//   margin-top: 10px;
// }
</style>
