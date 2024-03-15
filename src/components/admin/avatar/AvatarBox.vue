<template>
  <Box class="avatar-box">
    <SubTitle :text="'Смена аватара'" :admin="true"/>

    <div class="avatar-box__content">
      <div class="avatar-box__img-wrapper">
        <img  
          :src="avatar ? baseUrl + avatar : require('@/assets/images/default-avatar.jpg')" 
          alt="avatar" 
          crossorigin="anonymous"
          class="avatar-box__img"
        />
      </div>
      <FormAvatar />
    </div>
  </Box>
</template>

<script setup>
import Box from '@/components/shared/Box.vue';
import FormAvatar from '@/components/admin/avatar/FormAvatar.vue';
import SubTitle from '@/components/shared/SubTitle.vue';
import {baseUrl} from '@/services/urls.js';

defineProps({
  avatar: {
    type: String,
  },
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.avatar-box {
  &__content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  &__img-wrapper {
    width: 150px;
  }
  &__img {
    position: relative;
    z-index: calc($indexCurtain + 1);
    max-width: 100%;
  }
}

@media screen and (min-width: 768px) {
  .avatar-box {
    &__content {
      flex-direction: row;
    }
    &__img-wrapper {
      width: 200px;
    }
  }
}
</style>
