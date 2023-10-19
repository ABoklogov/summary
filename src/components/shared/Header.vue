<template>
  <header class="header">
    <SiteNav/>
    <Multiselect 
    v-model="language" 
    :options="optionsSelectLanguage" 
    :show-labels="false"
    :showPointer="false"
  />
  </header>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import SiteNav from '@/components/SiteNav.vue';
import Multiselect from 'vue-multiselect';
import { useViewStore } from '@/stores/view';
const { language, optionsSelectLanguage } = storeToRefs(useViewStore());
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  & .multiselect {
    width: 120px;
  }
}

</style>