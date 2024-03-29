<template>
  <form ref="form">
    <slot></slot>
  </form>
</template>

<script setup>
import { provide, ref } from 'vue';

const form = ref(null);
const inputs = ref([]);

//метод регистрации инпута в форме
const registerInput = (input) => {
  inputs.value.push(input);
};
//метод удаления инпута из формы
const unRegisterInput = (input) => {
  inputs.value.filter((item) => item !== input);
};
// метод валидации всех инпутов в форме
const validate = () => {
  return inputs.value.reduce((isValid, input) => {
    const isInputValid = input.validate();

    return isValid && isInputValid;
  }, true);
};
// метод обнуления всех инпутов в форме
const reset = () => {
  inputs.value.forEach((input) => input.reset());
};

provide('form', {
  form,
  registerInput,
  unRegisterInput
});

defineExpose({
  reset,
  validate
});
</script>
