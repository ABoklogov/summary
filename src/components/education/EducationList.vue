<template>
  <ul class="education-list">
    <li
      v-for="{ institution, speciality } in education"
      :key="institution.en"
      class="education-list__item"
    >
      <span>
        {{ language === 'ru' ? institution.ru : institution.en }}
      </span>
      -
      <span>
        {{ language === 'en' ? speciality.en : speciality.en }}
      </span>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  education: {
    type: Array,
    validator(arr) {
      return arr.every((obj) => {
        return Object.values(obj).every((subObj) => {
          return Object.values(subObj).every((el) => typeof el === 'string');
        });
      });
    },
    required: true
  },
  language: {
    type: String,
    required: true
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.education-list__item {
  & span {
    font-family: $fontBase;
    font-size: $fontMedium;
    font-style: $fontStyle;
    font-weight: $fontWeightRegular;
    line-height: $lineHeight;
    color: $transparentBlack;
  }
}

@media screen and (min-width: 768px) {
  .education-list__item span {
    font-size: $fontNorm;
  }
}
@media screen and (min-width: 1024px) {
  .education-list__item {
    margin-top: 20px;
  }
}
</style>
