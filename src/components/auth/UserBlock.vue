<template>
  <Box class="user-block">
    <Spiner 
      v-if="loading" 
      style="width: 30px; height: 30px; margin: 0 auto; display: block;" 
      strokeWidth="8" 
      animationDuration=".5s" 
      aria-label="Custom ProgressSpinner"
    />
    <div v-else class="user-block__wrapper-name">
      <span class="user-block__name">
        {{login}}
      </span>
      <CustomButton @click="store.logOutUser">
        <IconLogOut/>
      </CustomButton>
    </div>
  </Box>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'; 
import { storeToRefs } from 'pinia';
// import { ref, computed } from 'vue';
import Box from '@/components/shared/Box.vue';
import CustomButton from '@/components/shared/CustomButton.vue'; 
import IconLogOut from '@/components/icons/IconLogOut.vue'; 

const store = useAuthStore();
const { login, loading } = storeToRefs(useAuthStore());
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.user-block {
  max-width: 100%;
  height: 60px;
  &__wrapper-name {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__name {
    display: flex;
    align-items: center;
    font-size: $fontMedium;
  }
  &__name::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background-image: url(/src/assets//images/default-avatar.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 24px;
    margin-right: 8px;
  }
}

@media screen and (min-width: 375px) {
  .user-block {
    max-width: 215px;
  }
}
@media screen and (min-width: 768px) {
  .user-block {
    &__name {
      font-size: $fontNorm;
    }
  }
}
</style>
