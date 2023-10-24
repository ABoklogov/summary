<template>
  <ul class="social-list">
    <li 
      v-for="({ link, text}) in list" 
      :key="link"
      class="social-list__item"
    >
      <Link :link="link" :text="text"/>
    </li>
  </ul>
</template>

<script setup>
import Link from '@/components/shared/Link.vue';

defineProps({
  list: {
    type: Array,
    required: true
  }
});
</script>

<style scoped lang="scss">
@media screen and (min-width: 1024px) {
  .social-list__item {
    margin-top: 20px;
  }
}
</style>