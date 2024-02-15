<template>
  <div class="input">
    <label :for="$attrs.id">{{ $attrs.id }}</label>
    <InputText 
      v-if="$attrs.id !== 'password'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
      :invalid="!isValid"
      @blur="blurHandler"
      :data-valid="isValid && !isFirstInput"
    />
    <span v-if="!isValid" class="input__error">{{ error }}</span>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';
const props = defineProps({
  value: {
    type: String,
    default: '',
  },
  errorMessage: {
    type: String,
    default: '',
  },
  rules: {
    type: Array,
    default: () => [],
  },
});
defineEmits(["update:value"]);

const isFirstInput = ref(true);
const isValid = ref(true);
const error = ref('');

const validate = () => {
  return (isValid.value = props.rules.every(rule => {
    const { hasPassed, message } = rule(props.value);
    
    if (!hasPassed) {
      error.value = message || props.errorMessage;
    };
 
    return hasPassed;
  }));
};

watch(() => props.value, () => {
  if (isFirstInput.value) return;
  validate();
});

const blurHandler = () => {
  if (isFirstInput.value) validate();
  isFirstInput.value = false;
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
.input {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  &__error {
    position: absolute;
    top: 100%;
    left: 0;
    font-size: $fontMicro;
    color: $red;
  }
}
</style>
