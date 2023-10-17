<template>
  <div class="resume">
    <div class="resume__left">
      <MyPhoto class="photo--position" />
    </div>
    <div class="resume__right"></div>
  </div>
</template>

<script>
import MyPhoto from '@/components/MyPhoto.vue'

export default {
  name: 'ResumeView',
  components: {
    MyPhoto
  }
}
</script>
<style scoped lang="scss">
.resume {
  display: flex;
  flex-direction: row;

  &__left {
    width: 40%;
  }
  &__right {
    width: 60%;
  }
}

.photo--position {
  margin-left: auto;
}
</style>
