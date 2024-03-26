<template>
  <CustomForm @submit.prevent="submit" ref="projectForm">
    <div class="form-project-box">
      <CustomInput
        name="ru-name"
        id="ru-name"
        label="название"
        type="text"
        v-model:value="projectData.name.ru"
        :rules="textRules"
      />
      <div class="form-project-box__input">
        <CustomInput
          name="en-name"
          id="en-name"
          label="name"
          type="text"
          v-model:value="projectData.name.en"
          :rules="textRules"
        />
      </div>
      <div class="form-project-box__input form-project-box__input--interval">
        <CustomInput
          name="ru-link-text"
          id="ru-link-text"
          label="текст ссылки"
          type="text"
          v-model:value="projectData.link.text.ru"
          :rules="textRules"
        />
      </div>
      <div class="form-project-box__input">
        <CustomInput
          name="en-link-text"
          id="en-link-text"
          label="link text"
          type="text"
          v-model:value="projectData.link.text.en"
          :rules="textRules"
        />
      </div>
      <div class="form-project-box__input">
        <CustomInput
          name="url"
          id="url"
          label="url"
          type="text"
          v-model:value="projectData.link.url"
          :rules="urlRules"
        />
      </div>
      <div class="form-project-box__input form-project-box__input--interval">
        <CustomTextaria
          name="ru-pre-text"
          id="ru-pre-text"
          label="короткий текст"
          type="text"
          v-model:value="projectData.preText.ru"
          :rules="responsibilityRules"
          variant="filled"
          rows="8"
        />
      </div>
      <div class="form-project-box__input">
        <CustomTextaria
          name="en-pre-text"
          id="en-pre-text"
          label="pre-text"
          type="text"
          v-model:value="projectData.preText.en"
          :rules="responsibilityRules"
          variant="filled"
          rows="8"
        />
      </div>
      <div class="form-project-box__input form-project-box__input--interval">
        <CustomTextaria
          name="ru-description"
          id="ru-description"
          label="полное описание"
          type="text"
          v-model:value="projectData.description.ru"
          :rules="responsibilityRules"
          variant="filled"
          rows="8"
        />
      </div>
      <div class="form-project-box__input">
        <CustomTextaria
          name="en-description"
          id="en-description"
          label="description"
          type="text"
          v-model:value="projectData.description.en"
          :rules="responsibilityRules"
          variant="filled"
          rows="8"
        />
      </div>
      <div class="form-project-box__input form-project-box__input--interval">
        <CustomInput
          name="link-files-text"
          id="link-files-text"
          label="ссылка на исходники (текст)"
          type="text"
          v-model:value="projectData.linkFiles.text"
          :rules="projectData.linkFiles.text ? textRules : []"
        />
      </div>
      <div class="form-project-box__input">
        <CustomInput
          name="link-files-url"
          id="link-files-url"
          label="ссылка на исходники (url)"
          type="text"
          v-model:value="projectData.linkFiles.url"
          :rules="projectData.linkFiles.url ? urlRules : []"
        />
      </div>
      <div class="form-project-box__input form-project-box__input--interval">
        <div>технологии</div>
        <Chips v-model="projectData.tehnology" separator="," />
      </div>
      <div class="form-project-box__input form-project-box__input--interval">
        <div>цвет фона</div>
        <div class="form-project-box__color-box">
          <div class="form-project-box__color">
            <span class="form-project-box__color-label">цвет</span>
            <div class="color-picker">
              <ColorPicker 
                inputId="background-color"
                format="rgb"
                v-model="formatColor" 
              />
            </div>
          </div>
          <div class="form-project-box__color-opacity">
            <span class="form-project-box__color-label">прозрачность</span>
            <InputNumber 
              v-model="formatOpacity" 
              inputId="opacity" 
              :min="0" 
              :max="1" 
              :step="0.01"
              showButtons 
              buttonLayout="horizontal"
            >
              <template #incrementbuttonicon>
                <span class="pi pi-plus" />
              </template>
              <template #decrementbuttonicon>
                <span class="pi pi-minus" />
              </template>
            </InputNumber>
          </div>
          <div class="form-project-box__color-total">
            <span class="form-project-box__color-label">итоговый цвет</span>
            <div :style="{
                backgroundColor: projectData.backgroundColor, 
                width: '100px',
                height: '100px'
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div class="form-project-box__footer">
      <Button 
        label="Отмена" 
        icon="pi pi-times" 
        iconPos="right" 
        text 
        @click="props.hideDialog" 
      />
      <Button 
        type="submit"
        label="Отправить" 
        aria-label="Отправить данные"
        icon="pi pi-check" 
        iconPos="right"  
        :loading="loadingProject"
      />
    </div>
  </CustomForm>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { usePortfolioStore } from '@/stores/portfolio';
import { ref, computed, onMounted } from 'vue';
import CustomForm from '@/components/shared/CustomForm.vue';
import CustomInput from '@/components/shared/CustomInput.vue';
import CustomTextaria from '@/components/shared/CustomTextaria.vue';
import { useToast } from 'primevue/usetoast';

const toast = useToast();
const { changeProject, addProject } = usePortfolioStore();
const { loadingProject } = storeToRefs(usePortfolioStore());

import {
  isRequired,
  charLimit,
  loginValidation,
  urlValidation
} from '@/utils/validationRules';

const projectForm = ref(null);
const projectData = ref({
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
  });

const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  hideDialog: {
    type: Function
  }
});

onMounted(() => {
  projectData.value = props.project;
});

const textRules = computed(() => {
  return [isRequired, charLimit(50), loginValidation];
});
const responsibilityRules = computed(() => {
  return [isRequired, charLimit(300), loginValidation];
});
const urlRules = computed(() => {
  return [isRequired, charLimit(50), urlValidation];
});

const formatColor = computed({
  get() {
    const str = projectData.value.backgroundColor;
    const regex = /rgba\((\d+), (\d+), (\d+)/;
    const matches = str.match(regex);
    let result;

    if (matches) {
      const [_, r, g, b] = matches;
      result = { r: parseInt(r), g: parseInt(g), b: parseInt(b) };
    } else {
      result = {r: 0, g: 0, b: 0};
    };

    return result;
  },
  set({r, g, b}) {
    projectData.value.backgroundColor = `rgba(${r}, ${g}, ${b})`;
  }
});
const formatOpacity = computed({
  get() {
    const arr = projectData.value.backgroundColor.split(" ");
    if (arr.length > 3) {
      return Number(arr[arr.length - 1].slice(0, -1))
    } else {
      return 1
    }
  },
  set(value) {
    const arr = projectData.value.backgroundColor.split(" ");
    if (arr.length > 3) {
      arr.pop();
      arr.push(`${value})`);
    } else {
      const lastEl = arr[arr.length - 1].slice(0, -1);
      arr.pop();
      arr.push(lastEl);
      arr.push(`, ${value})`);
    }
    projectData.value.backgroundColor = arr.join(" ");
  }
});

const submit = async () => {
  const isVolidForm = projectForm.value.validate();

  if (!isVolidForm) {
    toast.add({ 
      severity: 'error', 
      summary: 'Ошибка', 
      detail: 'Форма не прошла валидацию', 
      life: 5000 
    });
    return;
  };
  console.log(projectData.value);
  if (projectData.value._id) {
    await changeProject(projectData.value);
  } else {
    // await addProject(projectData.value);
  };

  props.hideDialog();
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.form-project-box {
  display: flex;
  flex-direction: column;

  &__label {
    width: 100%;
  }
  &__input {
    margin-top: 10px;
  }
  &__input--interval {
    margin-top: 20px;
  }
  &__footer {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }
  &__color-box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &__color-box .color-picker {
    width: 32px;
    height: 32px;
  }
  &__color-total,
  &__color-opacity {
    margin-left: 10px;
  }
  &__color {
    display: flex;
    flex-direction: column;
  }
  &__color-opacity {
    max-width: 200px;
  }
  &__color-label {
    display: block;
  }
}

@media screen and (min-width: 768px) {
  .form-project-box {
    &__footer button:first-child {
      margin-right: 20px;
    }
  }
}
</style>
