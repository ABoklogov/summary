<template>
  <form class="form-project">
    <label class="form-project__label">
      <input type="file" id="project" ref="projectInput" @change="handleFileUpload" />
      <span class="p-button p-component form-project__btn">
        {{ textBtn }}
      </span>
    </label>

    <Message>
      Максимальный размер файла 20 mB.<br />
      Возможные форматы файла: 'jpg', 'png', 'jpeg', 'raw', 'tiff', 'psd', 'bmp', 'jp2', 'pdf'.
    </Message>

    <Button
      type="button"
      @click.prevent="submitFile"
      :disabled="!file"
      icon="pi pi-chevron-right"
      iconPos="right"
      label="Отправить"
      :loading="loadingProject"
    />
  </form>
</template>

<script setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { usePortfolioStore } from '@/stores/portfolio';
import Message from '@/components/admin/Message.vue';

const { exportImageProject } = usePortfolioStore();
const { loadingProject } = storeToRefs(usePortfolioStore());

const file = ref(null);
const projectInput = ref(null);

const props = defineProps({
  id: {
    type: String,
    required: true
  },
});

const textBtn = computed(() => {
  if (file.value) {
    const name = file.value.name;

    return name.length >= 40 ? `${name.slice(0, 40)}...` : name;
  } else {
    return 'Выберите файл';
  }
});

const handleFileUpload = () => {
  file.value = projectInput.value.files[0];
};

const submitFile = async () => {
  if (!file.value) return;

  const result = await exportImageProject(file.value, props.id);

  if (result) {
    file.value = null;
  };
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.form-project {
  display: flex;
  flex-direction: column;

  &__label {
    display: flex;
    flex-direction: column;
  }
  & input[type='file'] {
    position: absolute;
    z-index: -1;
    opacity: 0;
    display: block;
    width: 0;
    height: 0;
  }
}
</style>
