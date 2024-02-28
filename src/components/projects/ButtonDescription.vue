<template>
  <CustomButton class="button" @click="$emit('click')">
    <span class="button__text">
      {{ textButton }}
    </span>
    <IconArrow
      :style="{
        transform: showDescription ? 'rotate(-90deg)' : 'rotate(0deg)'
      }"
    />
  </CustomButton>
</template>

<script setup>
import CustomButton from '@/components/shared/CustomButton.vue';
import IconArrow from '@/components/icons/IconArrow.vue';

defineProps({
  textButton: {
    type: String,
    required: true
  },
  showDescription: {
    type: Boolean,
    required: true
  }
});
const emit = defineEmits(['click']);
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.button {
  display: flex;
  align-items: center;

  &__text {
    display: block;
    font-family: $fontBase;
    font-style: $fontStyle;
    line-height: normal;
    font-size: $fontMini;
    color: $orange;
    transition: color $duration $timingFunction;
  }
  & svg {
    display: block;
    color: $orange;
    width: 24px;
    height: 24px;
    transform: rotate(0deg);
    transition:
      color $duration $timingFunction,
      transform $duration $timingFunction;
  }
  &:hover svg,
  &:focus svg,
  &:hover span,
  &:focus span {
    color: $orangeHover;
  }

  @media screen and (min-width: 768px) {
    .button__text {
      font-size: $fontMedium;
    }
  }
  @media screen and (min-width: 1024px) {
    .button__text {
      font-size: $fontNorm;
    }
    .button svg {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
