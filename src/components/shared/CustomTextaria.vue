<template>
  <div class="textarea" ref="textarea">
    <label :for="$attrs.label">{{ $attrs.label }}</label>
    <div class="textarea__wrapper">
      <Textarea
        v-bind="$attrs"
        :value="value"
        @input="$emit('update:value', $event.target.value)"
        :invalid="!isValid"
        @blur="blurHandler"
      />
    </div>

    <span v-if="!isValid" class="textarea__error">{{ error }}</span>
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

const textarea = ref(null);
const isFirstInput = ref(true);
const isValid = ref(true);
const error = ref('');

//при маунте регистрируем инпут в компоненте формы CustomForm
onMounted(() => {
  if (!form.value) return;
  registerInput({
    input: textarea.value,
    isValid,
    validate,
    reset
  });
});
//при размонтировании компонента удаляем инпут из компонента CustomForm
onBeforeUnmount(() => {
  if (!form.value) return;
  unRegisterInput(textarea.value);
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
.textarea {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  & textarea {
    width: 100%;
  }
  &__wrapper {
    position: relative;
  }
  &__error {
    position: absolute;
    top: 100%;
    left: 0;
    font-size: $fontMicro;
    color: $red;
  }
}
</style>
