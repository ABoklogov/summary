<template>
  <Box class="avatar-box">
    <SubTitle :text="'Смена аватара'" :admin="true"/>

    <div class="avatar-box__content">
      <div class="avatar-box__img-wrapper">
        <img 
          v-if="avatar || newAvatar" 
          :src="baseUrl + `${newAvatar ? newAvatar : avatar}`" 
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
import { storeToRefs } from 'pinia';
import { useResumeStore } from '@/stores/resume';
import Box from '@/components/shared/Box.vue';
import FormAvatar from '@/components/admin/avatar/FormAvatar.vue';
import SubTitle from '@/components/shared/SubTitle.vue';
import {baseUrl} from '@/services/urls.js';

const { newAvatar } = storeToRefs(useResumeStore());

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
