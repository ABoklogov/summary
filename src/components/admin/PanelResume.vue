<template>
  <div class="panel-resume">
    <Spiner
      v-if="loading"
      style="width: 50px; height: 50px; margin: 50px auto; display: block"
      strokeWidth="5"
      animationDuration=".5s"
      aria-label="Custom ProgressSpinner"
    />
    <div v-else>
      <NameBox class="panel-resume__name-box"/>
      <div class="panel-resume__box">
        <AvatarBox :avatar="dataResume.about?.avatar" class="panel-resume__sub-box"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useResumeStore } from '@/stores/resume';
import { storeToRefs } from 'pinia';
import { onBeforeMount } from 'vue';
import AvatarBox from '@/components/admin/avatar/AvatarBox.vue';
import NameBox from '@/components/admin/name/NameBox.vue';

const storeResume = useResumeStore();
const { loading, dataResume } = storeToRefs(useResumeStore());

// запрашиваем данные по резюме
onBeforeMount(() => {
  storeResume.getDataResume();
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.panel-resume {
  &__box {
    display: flex;
    flex-direction: column;
  }
  &__sub-box,
  &__name-box {
    width: 100%;
    margin-bottom: 15px;
  }
}
@media screen and (min-width: 1024px) {
  .panel-resume {
    &__box {
      flex-direction: row;
      margin: -15px;
    }
    &__sub-box {
      width: calc((100% - 4 * 15px) / 2);
      margin: 15px;
    }
  }
}
</style>
