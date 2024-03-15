<template>
  <form class="form-avatar">
    <label class="form-avatar__label">
      <input 
        type="file" 
        id="avatar" 
        ref="avatar" 
        @change="handleFileUpload"
      />
      <span class="p-button p-component form-avatar__btn">
        {{ textBtn }}
      </span>
    </label>

    <Message>
      Картинка должна быть квадратная
    </Message>
    
    <Button 
      type="button" 
      @click.prevent="submitFile" 
      :disabled="!file"
      icon="pi pi-chevron-right" 
      iconPos="right"
      label="Отправить"
      :loading="loadingAvatar"
    ></Button>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useResumeStore } from '@/stores/resume';
import Message from '@/components/admin/Message.vue';

const storeResume = useResumeStore();
const { loadingAvatar } = storeToRefs(useResumeStore());

const file = ref(null);
const avatar = ref(null);

const textBtn = computed(() => {
  if (file.value) {
    const name = file.value.name;

    return name.length >= 40 ? `${name.slice(0, 40)}...` : name;
  } else {
    return 'Выберите файл'
  }
});

const handleFileUpload = () => {
  file.value = avatar.value.files[0];
};

const submitFile = async () => {
  if (!file.value) return;

  const result = await storeResume.changeAvatar(file.value);

  if (result) {
    file.value = null;
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.form-avatar {
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
  &__btn {
    font-size: $fontMicro;
  }
}
.p-button {
  margin-top: 10px;
}

@media screen and (min-width: 375px) {
  .p-button {
    width: 100%;
    max-height: 60px;
  }
}
@media screen and (min-width: 768px) {
  .p-button {
    width: 310px;
  }
}
@media screen and (min-width: 1024px) {
  .p-button {
    width: 210px;
  }
}
@media screen and (min-width: 1440px) {
  .p-button {
    width: 310px;
  }
}
</style>
