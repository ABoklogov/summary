<template>
  <div class="input" ref="input">
    <label :for="$attrs.label">{{ $attrs.label }}</label>
    <div class="input__wrapper">
      <InputText
        v-bind="$attrs"
        :value="value"
        @input="$emit('update:value', $event.target.value)"
        :invalid="!isValid"
        @blur="blurHandler"
      />
      <div class="input__btn">
        <slot name="btn"></slot>
      </div>
    </div>

    <span v-if="!isValid" class="input__error">{{ error }}</span>
  </div>
</template>

<script setup>
import { ref, watch, inject, onMounted, onBeforeUnmount } from 'vue';
const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  errorMessage: {
    type: String,
    default: ''
  },
  rules: {
    type: Array,
    default: () => []
  }
});

defineOptions({
  inheritAttrs: false
});

const emit = defineEmits(['update:value']);
const { form, registerInput, unRegisterInput } = inject('form');

const input = ref(null);
const isFirstInput = ref(true);
const isValid = ref(true);
const error = ref('');

//при маунте регистрируем инпут в компоненте формы CustomForm
onMounted(() => {
  if (!form.value) return;
  registerInput({
    input: input.value,
    isValid,
    validate,
    reset
  });
});
//при размонтировании компонента удаляем инпут из компонента CustomForm
onBeforeUnmount(() => {
  if (!form.value) return;
  unRegisterInput(input.value);
});

watch(
  () => props.value,
  () => {
    if (isFirstInput.value) return;
    validate();
  }
);

const validate = () => {
  return (isValid.value = props.rules.every((rule) => {
    const { hasPassed, message } = rule(props.value);

    if (!hasPassed) {
      error.value = message || props.errorMessage;
    }

    return hasPassed;
  }));
};

const blurHandler = () => {
  if (isFirstInput.value) validate();
  isFirstInput.value = false;
};

const reset = () => {
  isFirstInput.value = true;
  isValid.value = true;
  emit('update:value', '');
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
.input {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  &__wrapper {
    position: relative;
  }
  & input {
    width: 100%;
  }
  &__error {
    position: absolute;
    top: 100%;
    left: 0;
    font-size: $fontMicro;
    color: $red;
  }
  &__btn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
  }
}
</style>
