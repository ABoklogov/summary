<template>
  <div class="about-box">
    <Contacts class="contacts--position"/>
    <About class="about--position"/>
  </div>
</template>

<script setup>
import Contacts from './Contacts.vue';
import About from './About.vue';
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.about-box {
  background-color: $pinkSaturated;
}
.about--position {
  margin-top: 30px;
}

@media screen and (min-width: 1024px) {
  .about--position {
    max-width: 450px;
    margin-top: 56px;
  }
}
</style>