<template>
  <ul class="education-list">
    <li v-for="({ institution, speciality }) in list" :key="institution" class="education-list__item">
      <span>{{ institution }}</span> - <span>{{ speciality }}</span>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  list: {
    type: Array,
    required: true
  }
});
</script>

<style scoped lang="scss">
.education-list__item {
  margin-top: 20px;

  & span {
    color: rgba(20, 13, 12, 0.30);
    line-height: 32px;
  }
}
</style>