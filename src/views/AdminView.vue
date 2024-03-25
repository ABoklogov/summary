<template>
  <div class="admin-view">
    <UserBlock class="user-box" />
    <TabView class="admin-view__content">
      <TabPanel header="Resume">
        <PanelResume/>
      </TabPanel>
      <TabPanel header="Portfolio">
        <PanelPortfolio/>
      </TabPanel>
    </TabView>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import { onBeforeMount } from 'vue';
import UserBlock from '@/components/auth/UserBlock.vue';
import PanelResume from '@/components/admin/PanelResume.vue';
import PanelPortfolio from '@/components/admin/PanelPortfolio.vue';

const storeAuth = useAuthStore();
// запрашиваем текущего юзера
onBeforeMount(() => {
  storeAuth.fetchCurrentUser();
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
.admin-view {
  background-color: #fff;
  min-height: 500px;
  // padding: 0 $contentPaddingMobile;

  &__content {
    height: 100%;
    margin-top: 20px;
  }
  &:deep .p-tabview-panels {
    padding: 10px 0;
  }
}
.user-box {
  margin-left: auto;
}

@media screen and (min-width: 1024px) {
  .admin-view {
    min-height: 700px;
    padding: 0 $contentPaddingTablete;
  }
}
// @media screen and (min-width: 768px) {
//   .admin-view {
//     min-height: 700px;
//     padding: 30px $contentPaddingTablete;
//   }
// }
</style>
