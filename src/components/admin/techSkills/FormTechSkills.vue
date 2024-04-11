<template>
  <CustomForm @submit.prevent="submit" ref="techSkillsForm">
    <CustomInput
      name="short-link"
      id="short-link"
      type="text"
      v-model:value="techSkillsData.value"
      :rules="textRules"
    />

    <div class="form-tech-skills__footer">
      <Button label="Отмена" icon="pi pi-times" iconPos="right" text @click="props.hideDialog" />
      <Button
        type="submit"
        label="Отправить"
        aria-label="Отправить данные"
        icon="pi pi-check"
        iconPos="right"
        :loading="loadingTechSkills"
      />
    </div>
  </CustomForm>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useResumeStore } from '@/stores/resume';
import { ref, computed, onMounted } from 'vue';
import CustomForm from '@/components/shared/CustomForm.vue';
import CustomInput from '@/components/shared/CustomInput.vue';

const { changeTechSkills, addTechSkills } = useResumeStore();
const { loadingTechSkills } = storeToRefs(useResumeStore());

import { isRequired, charLimit, loginValidation, urlValidation } from '@/utils/validationRules';

const techSkillsForm = ref(null);

const techSkillsData = ref({
  value: ''
});

const props = defineProps({
  techSkills: {
    type: Object,
    required: true
  },
  hideDialog: {
    type: Function
  }
});

onMounted(() => {
  techSkillsData.value = props.techSkills;
});

const textRules = computed(() => {
  return [isRequired, charLimit(50), loginValidation];
});
const linkRules = computed(() => {
  return [isRequired, charLimit(50), urlValidation];
});

const submit = async () => {
  const isVolidForm = techSkillsForm.value.validate();

  if (!isVolidForm) {
    return;
  }

  if (techSkillsData.value._id) {
    await changeTechSkills(techSkillsData.value);
  } else {
    await addTechSkills(techSkillsData.value);
  };
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.form-tech-skills__footer {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}

@media screen and (min-width: 768px) {
  .form-tech-skills__footer button:first-child {
    margin-right: 20px;
  }
}
</style>
