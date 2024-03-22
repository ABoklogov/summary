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
      <NameBox class="panel-resume__one-box"/>

      <div class="panel-resume__box">
        <AvatarBox class="panel-resume__two-box"/>
        <AboutBox class="panel-resume__two-box"/>
      </div>

      <ContactsBox class="panel-resume__one-box panel-resume__one-box--contacts"/>
      <SocialBox class="panel-resume__one-box"/>
      <EducationBox class="panel-resume__one-box"/>
      <TechSkillsBox class="panel-resume__one-box"/>
      <ExperienceBox class="panel-resume__one-box"/>
    </div>
  </div>
</template>

<script setup>
import { useResumeStore } from '@/stores/resume';
import { storeToRefs } from 'pinia';
import { onBeforeMount } from 'vue';
import AvatarBox from '@/components/admin/avatar/AvatarBox.vue';
import AboutBox from '@/components/admin/about/AboutBox.vue';
import NameBox from '@/components/admin/name/NameBox.vue';
import ContactsBox from '@/components/admin/contacts/ContactsBox.vue';
import SocialBox from '@/components/admin/social/SocialBox.vue';
import EducationBox from '@/components/admin/education/EducationBox.vue';
import TechSkillsBox from '@/components/admin/techSkills/TechSkillsBox.vue';
import ExperienceBox from '@/components/admin/experience/ExperienceBox.vue';

const storeResume = useResumeStore();
const { loading } = storeToRefs(useResumeStore());

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
  &__two-box,
  &__one-box {
    width: 100%;
    margin-bottom: 15px;
  }
  &__one-box--contacts {
    margin: 15px 0;
  }
}
@media screen and (min-width: 1024px) {
  .panel-resume {
    &__box {
      flex-direction: row;
      margin: -15px;
    }
    &__two-box {
      width: calc((100% - 4 * 15px) / 2);
      margin: 15px;
    }
    // &__three-box {
    //   width: calc((100% - 6 * 15px) / 3);
    //   margin: 15px;
    // }
  }
}
</style>
